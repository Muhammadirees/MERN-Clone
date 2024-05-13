import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../store/Context";

const Sidebar = () => {
  const { recentPrompt, setRecentPrompt, onSent, newChat } = useContext(Context);
  const [extented, setExtented] = useState(true);

  const newChatHandler = (e) => {
    setRecentPrompt("");
    newChat();
  };

  return (
    <aside className="bg-[#f0f4f9] py-10 px-6 pr-12 hidden sm:inline-flex flex-col align-top justify-between text-[1.5rem]">
      <div className="">
        <img
          src={assets.menu_icon}
          alt=""
          className="w-8 ml-4 cursor-pointer"
          onClick={() => setExtented((prev) => !prev)}
        />
        <div
          className="flex items-center gap-x-4 ml-2 mt-20 px-6 w-fit py-4 text-[#808080] bg-[#e6eaf1] rounded-full text-[1.4rem] cursor-pointer"
          onClick={newChatHandler}
        >
          <img src={assets.plus_icon} alt="" className="w-9" />
          {extented && <p>New Chat</p>}
        </div>
        {extented && (
          <div className="mt-14 ml-2">
            <h2 className=" font-medium text-[1.6rem] animate-fadeIn">Recent</h2>
            {recentPrompt.length > 0 &&
              recentPrompt.map((el, index) => (
                <div
                  className="flex items-center gap-x-4 mt-12 ml-4 cursor-pointer animate-fadeIn"
                  key={index}
                  onClick={() => onSent(el)}
                >
                  <img src={assets.message_icon} alt="" className="w-8" />
                  <p>{el.slice(0, 10)} ...</p>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="ml-4 flex flex-col gap-y-1 text-[1.7rem]">
        <div className="flex items-center gap-x-3 pr-4 py-4 pl-3 rounded-full cursor-pointer hover:bg-[#e2e6eb] ">
          <img src={assets.question_icon} className="w-10" />
          {extented && <p>Help</p>}
        </div>
        <div className="flex items-center gap-x-3 pr-4 py-4 pl-3 rounded-full cursor-pointer hover:bg-[#e2e6eb] ">
          <img src={assets.history_icon} className="w-10" />
          {extented && <p>Activity</p>}
        </div>
        <div className="flex items-center gap-x-3 pr-4 py-4 pl-3 rounded-full cursor-pointer hover:bg-[#e2e6eb] ">
          <img src={assets.setting_icon} className="w-10" />
          {extented && <p>Setting</p>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
