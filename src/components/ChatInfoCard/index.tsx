import { useState, FC, useEffect } from "react";
import { MessageOutlined } from "@ant-design/icons";

interface ChatInfoCardProps {
  id: string;
  title: string;
  dateTime: string;
  selected: boolean;
  handleSelected: (id: string) => void;
}

const ChatInfoCard: FC<ChatInfoCardProps> = ({
  id,
  title,
  dateTime,
  selected,
  handleSelected,
}) => {
  useEffect(() => {
    // console.log(selected);
  }, []);

  return (
    <>
      <div
        onClick={() => handleSelected(id)}
        className={
          "w-full h-12 p-8 pl-5 pr-5 flex flex-row items-center justify-between rounded cursor-pointer hover:bg-[#25272d]" +
          (selected ? " bg-[#25272d]" : "")
        }
      >
        <div className="flex flex-row items-center justify-start w-[75%]">
          <MessageOutlined />
          <span className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {title}
          </span>
        </div>
        <span className="text-sm font-[200]">{dateTime}</span>
      </div>
    </>
  );
};

export default ChatInfoCard;
