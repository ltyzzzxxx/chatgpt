import { Input } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import ChatInfoCard from "../../components/ChatInfoCard";
import "./index.css";

const SideBar = () => {
  return (
    <>
      <div className="w-1/3 max-w-[400px] h-full flex flex-col bg-[#17171a] rounded-l-md text-[#97a3b6]">
        <div className="p-2 flex items-center justify-between mb-2">
          <div className="h-10 flex-1">
            <Input
              className="bg-[#25272d] hover:bg-[#25272d] h-full"
              bordered={false}
              allowClear
              prefix={<SearchOutlined className="text-[#97a3b6]" />}
              placeholder="搜索聊天内容"
            />
          </div>
          <PlusOutlined className="p-2 ml-1 text-xl cursor-pointer" />
        </div>
        <div className="p-2 flex flex-col items-center mb-4">
          <ChatInfoCard></ChatInfoCard>
          <ChatInfoCard></ChatInfoCard>
          <ChatInfoCard></ChatInfoCard>
          <ChatInfoCard></ChatInfoCard>
        </div>
      </div>
    </>
  );
};

export default SideBar;
