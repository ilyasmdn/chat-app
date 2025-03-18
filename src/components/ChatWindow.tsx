import { useEffect, useRef } from "react";
import { useChatStore } from "../store/chatStore";

const ChatWindow = () => {
  const messages = useChatStore((state) => state.messages);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-[450px] w-full p-4 border border-gray-400 rounded-lg overflow-y-auto bg-gray-100">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`p-2 my-2 rounded-lg max-w-[70%] ${
            msg.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"
          }`}
        >
          <p>{msg.text}</p>
          <span className={`text-xs font-light ${msg.sender === "user" ? 'text-gray-200' : 'text-gray-600'}`}>
            {new Date(msg.timestamp).toLocaleTimeString()}
          </span>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow;
