import "./index.css";
import SideBar from "../SideBar";
import ChatBox from "../ChatBox";

const MainBox = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row bg-white text-white rounded-md">
        <SideBar></SideBar>
        <ChatBox></ChatBox>
      </div>
    </>
  );
};

export default MainBox;
