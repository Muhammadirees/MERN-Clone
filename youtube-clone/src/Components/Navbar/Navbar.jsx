import React from "react";
import "./Navbar.css";
import menu_png from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_logo from "../../assets/search.png";

import upload_icon from "../../assets/upload.png";
import notification_icon from "../../assets/notification.png";
import more_icon from "../../assets/more.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex items-center justify-between py-4 px-14 sticky top-0  bg-white">
      <div className="flex items-center">
        <img
          src={menu_png}
          alt=""
          className="w-[3rem]"
          onClick={() => {
            setSidebar((prev) => (prev = !prev));
          }}
        />

        <Link to="/">
          <img src={logo} alt="" className="w-[18rem] ml-10" />
        </Link>
      </div>
      <div className="flex items-center justify-between w-[40rem] border rounded-3xl px-5 py-3">
        <input
          type="text"
          placeholder="Search"
          className="text-2xl outline-0 border-0"
        />
        <img src={search_logo} alt="" className="w-[2rem]" />
      </div>
      <div className="flex items-center justify-between gap-x-8">
        <img src={upload_icon} alt="" className="w-[3rem]" />
        <img src={notification_icon} alt="" className="w-[3rem]" />
        <img src={more_icon} alt="" className="w-[3rem]" />
        <img src={profile_icon} alt="" className="w-[5rem] rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
