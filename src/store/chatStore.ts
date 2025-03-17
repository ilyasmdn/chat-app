import { create } from "zustand";

type Message = {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: string;
}

type ChatState = {
    messages: Message[];
    sendMessage: (text: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
    messages: [],
    sendMessage: (text) =>
      set((state) => ({
        messages: [
          ...state.messages,
          { id: Date.now(), text, sender: "user", timestamp: new Date().toISOString() },
        ],
    })),
}));
