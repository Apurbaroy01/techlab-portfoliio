import { useQuery } from "@tanstack/react-query";
import useAxois from "../../../Hooks/useAxois";
import { FaUserCircle, FaEnvelope, FaReply, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Message = () => {
    const axiosInstance = useAxois();
    const [replyingTo, setReplyingTo] = useState(null);
    const { register, handleSubmit } = useForm()

    const { data: messages = [], refetch } = useQuery({
        queryKey: ["contactMessage"],
        queryFn: async () => {
            const response = await axiosInstance.get("/contactMessage");
            return response.data;
        },
        onError: (error) => {
            console.error("❌ Error fetching messages:", error);
        },
    });

    const formatDateTime = (timestamp) => {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
        const formattedTime = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return { formattedDate, formattedTime };
    };

    // 📨 Send reply function
    const onSubmit = async (data) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, confirm it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosInstance.post('/replyMessage', data);
                    Swal.fire({
                        icon: "success",
                        title: "✨ sent message Successfully!",
                        text: "your message has been updated Successfully!",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                    refetch();
                }
            });

        } catch (error) {
            console.error("Error updating hero section:", error);
            Swal.fire({
                icon: "error",
                title: "Update Failed 😢",
                text: "Please try again later.",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-4 sm:p-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg">
                💬 Message Inbox
            </h2>

            <div className="max-w-3xl mx-auto space-y-8">
                {messages.length === 0 ? (
                    <p className="text-center text-gray-300 text-lg">No messages found 😢</p>
                ) : (
                    messages.map((message) => {
                        const { formattedDate, formattedTime } = formatDateTime(message.timestamp);

                        return (
                            <div
                                key={message._id}
                                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:border-purple-400/30 transition-all duration-300"
                            >
                                {/* 🧑 Header */}
                                <div className="flex items-center gap-3 mb-3">
                                    <FaUserCircle className="text-purple-400 text-3xl sm:text-4xl" />
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-white">
                                            {message.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-x-2 text-xs text-gray-300 opacity-80">
                                            <span>{formattedDate}</span>
                                            <span>•</span>
                                            <span>{formattedTime}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 💌 Message Body */}
                                <div className="bg-gradient-to-r from-purple-600/40 to-indigo-600/40 p-4 rounded-xl border border-white/10 text-sm sm:text-base">
                                    <p className="text-gray-100 leading-relaxed">{message.message}</p>
                                </div>

                                {/* 📧 Footer */}
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm text-blue-300 opacity-80">
                                        <FaEnvelope className="text-blue-400" />
                                        <a
                                            href={`mailto:${message.email}`}
                                            className="hover:text-blue-500 transition"
                                        >
                                            {message.email}
                                        </a>
                                    </div>

                                    {/* 📨 Reply Button */}
                                    <button
                                        onClick={() =>
                                            setReplyingTo(message._id)
                                        }
                                        className="btn btn-sm bg-purple-600 hover:bg-purple-700 border-none text-white flex items-center gap-2"
                                    >
                                        <FaReply /> Reply
                                    </button>
                                </div>

                                {/* ✏️ Reply Input Field */}
                                {replyingTo === message._id && (
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mt-4 bg-white/10 p-3 rounded-xl border border-white/20 flex flex-col  items-center gap-3">

                                            <input value={message.email} type="hidden" {...register("email")} />

                                            <input
                                                type="text"
                                                placeholder="your name..."
                                                {...register("name")}
                                                className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            />
                                            <input
                                                type="text"
                                                {...register("subject")}
                                                placeholder="Type subject..."
                                                className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            />

                                            <textarea
                                                type="text"
                                                {...register("replyMessage")}
                                                placeholder="Type your reply..."
                                                className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            />
                                            <button
                                                className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                                            >
                                                <FaPaperPlane /> Send
                                            </button>

                                        </div>
                                    </form>
                                )}

                                {/* 🌈 Glow effect */}
                                <div className="absolute opacity-0 group-hover:opacity-30 rounded-2xl bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-blue-400/40 blur-lg transition-all duration-700"></div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Message;
