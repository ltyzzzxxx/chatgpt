import { useState, useEffect } from "react";
import "./index.css";
import SideBar from "../SideBar";
import ChatBox from "../ChatBox";
import { conversationStore } from "@/store";
import { useSnapshot } from "valtio";

const MainBox = () => {
  const { conversations } = useSnapshot(conversationStore);
  const [selectedConversationId, setSelectedConversationId] =
    useState<string>("");
  const [selectedConversation, setSelectedConversation] =
    useState<Chat.Conversation>();
  useEffect(() => {
    setSelectedConversationId(conversations[0]?.id || "");
  }, []);

  useEffect(() => {
    conversations.forEach((item) => {
      if (item.id == selectedConversationId) {
        setSelectedConversation(item);
      }
    });
  }, [selectedConversationId]);

  return (
    <>
      <div className="w-full h-full flex flex-row bg-white text-white rounded-md">
        <SideBar
          setSelectedConversationId={setSelectedConversationId}
          selectedConversationId={selectedConversationId}
        ></SideBar>
        <ChatBox selectedConversation={selectedConversation}></ChatBox>
      </div>
    </>
  );
};

export default MainBox;
