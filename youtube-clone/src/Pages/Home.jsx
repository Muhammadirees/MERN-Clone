import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Feed from "../Components/Feed";
import { useState } from "react";

const Home = ({ sideBar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar
        sideBar={sideBar}
        setCategory={setCategory}
        category={category}
      />
      <main
        className={`bg-[#f9f9f9] h-screen ${sideBar ? "ml-[15%]" : "pl-[5%]"}`}
      >
        <Feed setCategory={setCategory} category={category} sideBar={sideBar} />
      </main>
    </>
  );
};

export default Home;
