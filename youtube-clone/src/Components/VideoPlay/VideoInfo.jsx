import React from "react";
import moment from "moment";

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

import { value_converter } from "../../Data";

const VideoInfo = ({ apiData }) => {
  return (
    <>
      <h2 className="text-5xl font-bold">{apiData.snippet.title}</h2>
      <div className="flex items-center justify-between py-2">
        <p className=" text-primaryOne text-2xl">
          {value_converter(apiData.statistics.viewCount)} Views &bull;{" "}
          {moment(apiData.statistics.publishedAt).fromNow()}
        </p>
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-2">
            <img src={like} alt="" className="w-12" />{" "}
            <p className="text-2xl">
              {value_converter(apiData.statistics.likeCount)}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={dislike} alt="" className="w-12" />{" "}
            <p className="text-2xl">
              {value_converter(apiData.statistics.dislikeCount)}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={share} alt="" className="w-12" />{" "}
            <p className="text-2xl">Share</p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={save} alt="" className="w-12" />{" "}
            <p className="text-2xl">Save</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoInfo;
