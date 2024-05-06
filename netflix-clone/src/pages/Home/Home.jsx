import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

import Navbar from "../../Components/Navbar/Navbar";
import banner_icon from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [navDark, setNavDark] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const navbarCallback = (entries) => {
      const [entry] = entries;
      setNavDark(!entry.isIntersecting);
    };
    const navbarObserver = new IntersectionObserver(navbarCallback, { root: null, threshold: 0.8 });

    navbarObserver.observe(heroRef.current);

    return () => {
      navbarObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar navDark={navDark} />
      <header className="relative" ref={heroRef}>
        <img src={banner_icon} alt="" className="banner-img" />
        <div className="absolute sm:bottom-0 bottom-8 md:pl-[6%] pl-[4%] w-[100%]">
          <img src={hero_title} alt="" className="max-w-[42rem] lg:w-full lg:mb-12 mb-4 sm:w-[50%] sm:block hidden" />
          <p className="lg:text-[2rem] md:text-[1.5rem] text-[1.2rem] leading-snug lg:mb-12 mb-4 sm:max-w-[71rem] max-w-[32rem] font-medium">
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to
            save the city from immortal enemy
          </p>
          <div className="flex items-center lg:gap-x-8 gap-x-4 lg:mb-12 xlg:mb-16 mb-4 lg:text-2xl text-xl">
            <button className="flex items-center gap-x-4  font-semibold lg:px-10 px-6 py-3 rounded-lg bg-white text-black hover:bg-[#c0c0c0]">
              <img src={play_icon} alt="" className="lg:w-10 sm:w-8 w-6" />
              Play
            </button>
            <button className="flex items-center gap-x-4  font-semibold lg:px-10 px-6 py-3 rounded-lg bg-[#6d6d6db3] text-[#fff] hover:bg-[#6e6e6e66]">
              <img src={info_icon} alt="" className="lg:w-10 sm:w-8 w-6" />
              More Info
            </button>
          </div>
          <TitleCards responsiveClass={"title-cards"} />
        </div>
      </header>
      <main className="md:pl-[6%] pl-[4%] md:mt-12 mt-8">
        <TitleCards title={"BlockBuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
