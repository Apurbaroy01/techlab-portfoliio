import { useQuery } from "@tanstack/react-query";
import useAxois from "../../../Hooks/useAxois";

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
        }
    });
    console.log(messages);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-4 sm:p-8 text-white">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                💬 Message Inbox
            </h2>

            {/* Chat Box */}
            <div className="max-w-2xl mx-auto space-y-6">
                {messages.map((message) => (
                    <div key={message._id} className="chat chat-start">
                        <div className="chat-header text-xs font-semibold sm:text-base ">
                            {message.name}
                            <time className="text-xs opacity-50 ml-2">{new Date(message.timestamp).toLocaleDateString()} - {new Date(message.timestamp).toLocaleTimeString()}</time>
                        </div>
                        <div className="chat-bubble bg-purple-600 text-white text-sm sm:text-base">
                            {message.message}
                        </div>
                        <div className="chat-footer text-xs opacity-60">{message.email}</div>
                    </div>
                ))}






            </div>
        </div>
    );
};

export default Message;
