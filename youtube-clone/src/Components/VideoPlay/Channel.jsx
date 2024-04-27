import React from "react";

import { value_converter } from "../../Data";
import Comments from "./Comments";

const Channel = ({ apiData, channelData, commentData }) => {
  return (
    <>
      <div className="flex items-center">
        <span className="flex items-center">
          <img
            src={channelData.snippet.thumbnails.default.url}
            alt=""
            className="rounded-full w-20"
          />
        </span>
        <div className="flex-1 ml-3">
          <span className="text-3xl font-semibold">
            {apiData.snippet.channelTitle}
          </span>{" "}
          <span className="block text-2xl mt-1 text-primaryOne">
            {value_converter(channelData.statistics.subscriberCount)}{" "}
            Subscribers
          </span>
        </div>

        <button className="bg-red-600 text-white rounded-md px-12 py-3 text-2xl ">
          Subscribe
        </button>
      </div>
      <div className="ml-24">
        <p className="text-3xl mt-12">
          {apiData.snippet.description.slice(0, 250)}{" "}
        </p>
        <hr className="my-3 bg-[#333] h-[1.5px]" />
        <Comments
          commentData={commentData}
          apiData={apiData}
          channelData={channelData}
        />
      </div>
    </>
  );
};

export default Channel;
