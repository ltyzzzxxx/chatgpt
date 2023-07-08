import { Input } from "antd";
import ChatCard from "../../components/ChatCard";
import { SendOutlined } from "@ant-design/icons";
import "./index.css";

const ChatBox = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col bg-[#101014] rounded-r-md text-[#97a3b6]">
        <div className="flex-1 p-5 scrollbar">
          <ChatCard></ChatCard>
          <ChatCard></ChatCard>
          <ChatCard></ChatCard>
          <ChatCard></ChatCard>
          <ChatCard></ChatCard>
          <ChatCard></ChatCard>
        </div>
        <div className="flex items-center justify-center h-20 p-5">
          <Input
            className="bg-[#25272d] hover:bg-[#25272d] h-full"
            bordered={false}
            allowClear
            placeholder="和 ChatGPT 开始对话～"
          />
          <SendOutlined className="p-2 ml-1 text-xl cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
