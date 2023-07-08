import { MessageOutlined } from "@ant-design/icons";

const ChatInfoCard = () => {
  return (
    <>
      <div className="w-full h-12 p-3 flex flex-row items-center bg-[#25272d] rounded cursor-pointer hover:bg-gray-700 mb-4">
        <MessageOutlined />
        <span className="ml-2">你好呀</span>
      </div>
    </>
  );
};

export default ChatInfoCard;
