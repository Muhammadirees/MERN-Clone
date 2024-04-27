import React from "react";

import "./Sidebar.css";

import Home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const sideLinks = [
  { image: Home, text: "Home", tab: 0 },
  { image: game_icon, text: "Gaming", tab: 20 },
  { image: automobiles, text: "Automobiles", tab: 2 },
  { image: sports, text: "Sports", tab: 17 },
  { image: entertainment, text: "Entertainment", tab: 24 },
  { image: tech, text: "Technology", tab: 28 },
  { image: music, text: "Music", tab: 10 },
  { image: blogs, text: "Blogs", tab: 22 },
  { image: news, text: "News", tab: 25 },
];

const Sidebar = ({ sideBar, setCategory, category }) => {
  const categoryHandler = (e) => {
    const clicked = e.target.closest("li");
    if (clicked) {
      setCategory(+clicked.dataset.category);
    }
  };

  return (
    <aside className={`sideBar ${sideBar === true ? " " : "small-screen"}`}>
      <ul onClick={categoryHandler}>
        {sideLinks.map((side, index) => {
          return (
            <li
              className="flex items-center mb-6 flex-wrap w-fit"
              data-category={side.tab}
              key={index}
            >
              <img
                src={side.image}
                alt=""
                className={`${sideBar ? "w-9" : "w-12"} ${
                  category === side.tab ? "pb-2 border-b-2 border-red-500 " : ""
                }`}
              />
              <p
                className={`ml-8 text-1 5rem font-medium side-link ${
                  category === side.tab ? "text-red-500 font-semibold" : ""
                }`}
              >
                {side.text}
              </p>
            </li>
          );
        })}
      </ul>
      <hr
        className={`h-[1px] w-[85%] my-12 bg-[#ccc] ${sideBar ? "" : "mb-12"}`}
      />
      <h2 className="side-link font-semibold text-[1.7rem] text-primaryOne mb-6">
        SUBSCRIBED
      </h2>
      <div className="mb-6 flex items-center">
        <img src={jack} alt="" className="w-12 rounded-full" />
        <p className="side-link font-medium ml-8">PewDiePie</p>
      </div>
      <div className="mb-6 flex items-center">
        <img src={simon} alt="" className="w-12 rounded-full" />
        <p className="side-link font-medium ml-8">Justin Bieber</p>
      </div>
      <div className="mb-6 flex items-center">
        <img src={tom} alt="" className="w-12 rounded-full" />
        <p className="side-link font-medium ml-8">5-Minutes Crafts</p>
      </div>
      <div className="mb-6 flex items-center">
        <img src={cameron} alt="" className="w-12 rounded-full" />
        <p className="side-link font-medium ml-8">Channel</p>
      </div>
    </aside>
  );
};

export default Sidebar;
