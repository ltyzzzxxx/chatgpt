import { useState, FC } from "react";
import { EditOutlined } from "@ant-design/icons";

interface ChatCardProps {
  role: string;
  content: string;
  date: string;
}

const ChatCard: FC<ChatCardProps> = ({ role, content, date }) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowEdit(true);
  };

  const handleMouseLeave = () => {
    setShowEdit(false);
  };

  return (
    <>
      <div
        className="relative w-full h-auto p-4 flex flex-row items-start hover:bg-[#1d1d22]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 头像 */}
        {role == "assistant" && (
          <img src="../../../gpt.png" className="w-[40px] h-[40px]" alt="" />
        )}
        {role == "user" && (
          <img src="../../../boy.png" className="w-[40px] h-[40px]" alt="" />
        )}
        {/* 内容 */}
        <div className=" w-full break-words ml-4">{content}</div>
        {/* Edit 按钮 */}
        {showEdit && (
          <div className="flex flex-row absolute right-[1%] top-[5%]">
            <div className="mr-2 text-[#59606b]">{date}</div>
            <div className="flex justify-center items-center w-7 h-7 cursor-pointer hover:bg-[#34383f]">
              <EditOutlined />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatCard;
