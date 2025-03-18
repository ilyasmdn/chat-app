import { create } from "zustand";

type Message = {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: string;
};

type ChatState = {
    messages: Message[];
    sendMessage: (text: string) => void;
};

export const useChatStore = create<ChatState>((set) => ({
    messages: [],
    sendMessage: (text) => {
        const userMessage: Message = {
            id: Date.now(),
            text,
            sender: "user",
            timestamp: new Date().toISOString(),
        };

        set((state) => ({
            messages: [...state.messages, userMessage],
        }));

        setTimeout(() => {
            const botReply: Message = {
                id: Date.now() + 1,
                text: "This is a bot reply!",
                sender: "bot",
                timestamp: new Date().toISOString(),
            };

            set((state) => ({
                messages: [...state.messages, botReply],
            }));
        }, 1500);
    },
}));
