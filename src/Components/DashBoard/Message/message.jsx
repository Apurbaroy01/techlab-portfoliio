import { useQuery } from "@tanstack/react-query";
import useAxois from "../../../Hooks/useAxois";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";

const Message = () => {
    const axiosInstance = useAxois();

    const { data: messages = [] } = useQuery({
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-4 sm:p-8 text-white">
            {/* 💬 Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg">
                💬 Message Inbox
            </h2>

            {/* 📩 Chat List */}
            <div className="max-w-3xl mx-auto space-y-8">
                {messages.length === 0 ? (
                    <p className="text-center text-gray-300 text-lg">No messages found 😢</p>
                ) : (
                    messages.map((message) => {
                        const { formattedDate, formattedTime } = formatDateTime(
                            message.timestamp
                        );

                        return (
                            <div
                                key={message._id}
                                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:border-purple-400/30 transition-all duration-300"
                                data-aos="fade-up"
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
                                    <p className="text-gray-100 leading-relaxed">
                                        {message.message}
                                    </p>
                                </div>

                                {/* 📧 Footer */}
                                <div className="mt-3 flex items-center gap-2 text-sm text-blue-300 opacity-80">
                                    <FaEnvelope className="text-blue-400" />
                                    <a
                                        href={`mailto:${message.email}`}
                                        className="hover:text-blue-500 transition"
                                    >
                                        {message.email}
                                    </a>
                                </div>

                                {/* 🌈 Glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 rounded-2xl bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-blue-400/40 blur-lg transition-all duration-700"></div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Message;
