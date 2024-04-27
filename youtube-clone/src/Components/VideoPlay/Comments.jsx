import React from "react";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";

import { value_converter } from "../../Data";

const Comments = ({ apiData, channelData, commentData }) => {
  return (
    <>
      <h3 className=" text-primaryOne text-3xl font-bold">
        {value_converter(apiData.statistics.commentCount)} Comments
      </h3>
      <div className="my-6 mt-10">
        {commentData.map((item, index) => {
          return (
            <div className="flex items-start mb-10" key={index}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
                className="w-16 rounded-full"
              />
              <div className="ml-6 text-2xl">
                <p className="flex  gap-x-3 items-center">
                  <span className="text-3xl font-bold">
                    {item.snippet.topLevelComment.snippet.authorDisplayName}
                  </span>{" "}
                  <span>2 minutes ago</span>
                </p>
                <p className="mt-2 ml-2">
                  {item.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="flex items-center gap-x-8">
                  <div className="mt-4 flex items-center  gap-x-3">
                    <img src={like} alt="" className="w-10 " />
                    <p>
                      {value_converter(
                        item.snippet.topLevelComment.snippet.likeCount
                      )}{" "}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-x-3">
                    <img src={dislike} alt="" className="w-10 " />
                    <p>
                      {value_converter(
                        item.snippet.topLevelComment.snippet.dislikeCount
                      )}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Comments;
