import { useState } from "react";
import { useChatStore } from "../store/chatStore";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const sendMessage = useChatStore((state) => state.sendMessage);

  const handleSend = () => {
    if (!message.trim()) return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="flex items-center p-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className="flex-grow p-2 border border-gray-400 rounded-lg"
      />
      <button
        onClick={handleSend}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
