import "./index.css";
import SideBar from "../SideBar";

const MainBox = () => {
  return (
    <>
      <div className="w-full h-full bg-white text-white rounded-md">
        <SideBar></SideBar>
      </div>
    </>
  );
};

export default MainBox;
