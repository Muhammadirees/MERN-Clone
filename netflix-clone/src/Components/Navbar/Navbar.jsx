import React, { useState } from "react";
import "./Navbar.css";

import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import caret_icon from "../../assets/caret_icon.svg";
import profile_img from "../../assets/profile_img.png";
import { logout } from "../../Login";

const Navbar = ({ navDark }) => {
  const [signOut, setSignout] = useState(false);
  return (
    <nav
      className={`flex items-center justify-between lg:px-[6%] px-[3.5%] md:py-8 py-6 fixed top-0 z-10 w-full navbar ${
        navDark ? "bg-black" : ""
      } transition-all duration-500`}
    >
      <div className="flex items-center">
        <img src={logo} alt="" className="md:w-[9rem] w-[7.5rem]" />
        <ul className="lg:flex items-center gap-x-10 text-[1.5rem] ml-[5rem] hidden ">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News&Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div
        className="flex items-center gap-x-8"
        onMouseEnter={() => setSignout(true)}
        onMouseLeave={() => setSignout(false)}
      >
        <img src={search_icon} alt="" className="w-8" />
        <p className="text-2xl">Children</p>
        <img src={bell_icon} alt="" className="w-8" />
        <div className="flex items-center gap-x-4 relative">
          <img src={profile_img} alt="" />
          <img src={caret_icon} alt="" />
          <div
            className={`absolute top-full right-0 z-10 left-auto py-8 px-12 bg-black w-[300%] text-center ${
              signOut ? "block" : "hidden"
            }`}
          >
            <p className="text-white underline text-[1.2rem] cursor-pointer" onClick={() => logout()}>
              Sign Out of netflix
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
