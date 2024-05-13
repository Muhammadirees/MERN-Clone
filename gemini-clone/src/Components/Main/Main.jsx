import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../store/Context";
import { useRef } from "react";

import ResultPara from "./ResultPara";

const Main = () => {
  const { onSent, inputRef, showResult, loading, prevPrompt, result } = useContext(Context);

  const promptInputHandler = (e) => {
    onSent();
  };

  return (
    <>
      <main className="flex-1 min-h-screen pb-[15vh] relative">
        <header className=" p-8 flex items-center justify-between">
          <h1 className="text-[#585858] text-[2.2rem]">Gemini</h1>
          <img src={assets.user_icon} alt="" className="w-16 md:w-20 rounded-full" />
        </header>
        <section className="max-w-[90rem] m-auto ">
          {!showResult && (
            <>
              <div className="p-8 my-6 md:my-10 lg:my-20 mx-0 text-[4.5rem] md:text-[5.6rem] font-medium text-[#c4c7c5]">
                <h2 className="text-[#c4c7c5]">
                  <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
                    Hello, Dev.
                  </span>
                </h2>
                <h2 className="text-[#c4c7c5]">How can I help you today?</h2>
              </div>
              <div className="text-[1.2rem] md:text-[1.4rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-8  md:mt-20 lg:mt-40">
                <div className="bg-[#f0f4f9] relative rounded-3xl p-8 lg:min-h-80 min-h-64">
                  <p className="">Suggest beautiful places to see on an upcoming road trip</p>
                  <img
                    src={assets.compass_icon}
                    alt=""
                    className=" absolute bottom-4 right-4 lg:w-14 w-12 bg-white p-2 rounded-full"
                  />
                </div>
                <div className="bg-[#f0f4f9] relative rounded-3xl p-8 lg:min-h-80 min-h-64">
                  <p className="">Briefly summarize this concept: urban planning</p>
                  <img
                    src={assets.bulb_icon}
                    alt=""
                    className=" absolute bottom-4 right-4 lg:w-14 w-12 bg-white p-2 rounded-full"
                  />
                </div>
                <div className="bg-[#f0f4f9] relative rounded-3xl p-8 lg:min-h-80 min-h-64">
                  <p className="">Brainstrom team bonding activities for out work retreat</p>
                  <img
                    src={assets.message_icon}
                    alt=""
                    className=" absolute bottom-4 right-4 lg:w-14 w-12 bg-white p-2 rounded-full"
                  />
                </div>
                <div className="bg-[#f0f4f9] relative rounded-3xl p-8 lg:min-h-80 min-h-64">
                  <p className="">Improve the readibilty of the following code</p>
                  <img
                    src={assets.code_icon}
                    alt=""
                    className=" absolute bottom-4 right-4 lg:w-14 w-12 bg-white p-2 rounded-full"
                  />
                </div>
              </div>
            </>
          )}
          {showResult && (
            <div className="pb-8 mt-20 px-6 md:px-0 text-[1.5rem] overflow-y-scroll result h-[40vh] md:h-[60vh] ">
              <div className="flex items-center gap-x-10">
                <img src={assets.user_icon} alt="" className="md:w-16 w-12 rounded-full" />
                <p>{prevPrompt}</p>
              </div>
              <div className="flex gap-x-1 md:gap-x-4 items-start mt-5 md:mt-8">
                <img src={assets.gemini_icon} alt="" className="md:w-20 w-16" />
                {loading && (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                )}
                {result && <ResultPara result={result} />}
              </div>
            </div>
          )}

          <div className="max-w-[75rem] md:max-w-[90rem] w-full  absolute bottom-0 px-4 mx-auto ">
            <div className="flex items-center justify-between px-12 py-5 md:py-8 bg-[#f0f4f9] rounded-full text-[1.5rem] md:text-[1.7rem]">
              <input
                type="text"
                placeholder="Enter a prompt here"
                className="border-none outline-none bg-transparent flex-1"
                ref={inputRef}
                spellCheck={true}
              />
              <div className="flex items-center gap-x-8">
                <img src={assets.gallery_icon} alt="" className="md:w-10 w-8" />
                <img src={assets.mic_icon} alt="" className="md:w-10 w-8" />
                <img src={assets.send_icon} alt="" className="md:w-10 w-8" onClick={promptInputHandler} />
              </div>
            </div>
            <p className="text-center my-6 text-lg md:text-xl">
              Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy
              and Gemini Apps
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
