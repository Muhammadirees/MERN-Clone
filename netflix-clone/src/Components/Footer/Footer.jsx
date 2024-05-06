import React from "react";
import "./Footer.css";

import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <footer className="max-w-[100rem] pl-[4%] mx-auto md:my-20 my-12 text-[1.5rem]">
      <div className=" flex items-center gap-x-8">
        <img src={youtube_icon} alt="" className="md:w-12 w-10" />
        <img src={twitter_icon} alt="" className="w-12" />
        <img src={instagram_icon} alt="" className="w-12" />
        <img src={facebook_icon} alt="" className="w-12" />
      </div>
      <ul className="md:text-[1.5rem] text-[1.2rem] md:mt-12 mt-10 grid md:grid-cols-4 grid-cols-2 gap-6 mb-12 list-none">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="md:text-[1.5rem] text-[1.2rem] text-[#b2b2b2]"> © 1997-2024 Netlflix, Inc.</p>
    </footer>
  );
};

export default Footer;
