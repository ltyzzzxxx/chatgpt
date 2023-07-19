import { Input } from "antd";
import ChatCard from "../../components/ChatCard";
import { SendOutlined } from "@ant-design/icons";
import "./index.css";
import { FC, useState } from "react";

interface ChatBoxProps {
  selectedConversation: Chat.Conversation;
}

const ChatBox: FC<ChatBoxProps> = ({ selectedConversation }) => {
  const [message, setMessage] = useState("");

  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    selectedConversation.messages.push({
      role: "user",
      content: "asdasdasdas",
      dateTime: "2023-07-19"
    })
    console.log("asdasd")
  };

  return (
    <>
      <div className="w-full h-full flex flex-col bg-[#101014] rounded-r-md text-[#97a3b6]">
        <div className="flex-1 p-5 scrollbar overflow-auto h-full pb-0">
          {selectedConversation?.messages.map((item, index) => (
            <ChatCard
              key={index}
              role={item.role}
              content={item.content}
              date={item.dateTime}
            ></ChatCard>
          ))}
        </div>
        <div className="flex items-center p-5 pt-0">
          <Input.TextArea
            className="bg-[#25272d] hover:bg-[#25272d] h-full relative"
            bordered={false}
            value={message}
            onChange={handleMessage}
            allowClear
            autoFocus
            placeholder="和 ChatGPT 开始对话～"
            size="large"
            autoSize={{ minRows: 1, maxRows: 5 }}
            rows={10}
            style={{ resize: "none" }}
          />
          <SendOutlined
            className="p-2 ml-1 text-xl cursor-pointer"
            onClick={sendMessage}
          />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
