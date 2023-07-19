declare namespace Chat {
  interface Message {
    role: string;
    content: string;
    dateTime: string;
  }

  interface Conversation {
    id: string;
    title: string;
    messages: Message[];
    dateTime: string;
  }
}
