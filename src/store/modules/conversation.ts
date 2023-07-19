import { proxy } from "valtio";
import { subscribeKey } from "valtio/utils";
import moment from "moment";

const initConversations: Chat.Conversation[] = [
  {
    id: Date.now().toString(),
    title: "开始新对话～",
    messages: [] as Chat.Message[],
    dateTime: moment().format("MM-DD"),
  },
];

const currentConversations = localStorage.getItem("conversations")
  ? JSON.parse(localStorage.getItem("conversations") ?? "[]")
  : initConversations;

export const conversationStore = proxy({
  conversations: currentConversations as Chat.Conversation[],
  addMessage: (conversationId: string, role: string, content: string) => {
    conversationStore.conversations.forEach((conversation) => {
      if (conversation.id === conversationId) {
        conversation.messages.push({ role, content });
      }
    });
  },
  addConversation: () => {
    conversationStore.conversations.unshift({
      id: Date.now().toString(),
      title: "开始新对话～",
      messages: [] as Chat.Message[],
      dateTime: moment().format("MM-DD"),
    });
  },
  changeConversation: (id: string, title: string) => {
    conversationStore.conversations.forEach((conversation) => {
      if (conversation.id === id) {
        conversation.title = title;
      }
    });
  },
});

subscribeKey(conversationStore, "conversations", () => {
  localStorage.setItem(
    "conversations",
    JSON.stringify(conversationStore.conversations)
  );
});
