import React, { useState, useEffect } from "react";
import "./Recommanded.css";

import thumbnail1 from "../../assets/thumbnail1.png";
import { API_KEY, value_converter } from "../../Data";
import { Link, useParams, useLocation } from "react-router-dom";

const Recommanded = () => {
  const { videoId, categoryId } = useParams();
  const { pathname } = useLocation();

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [categoryId, pathname]);

  return (
    <aside className="cs:basis-[29%] cs:mt-0 basis-[75%] mt-12 ">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="flex mb-4"
            key={index}
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className="w-[50%] basis-[49%] rounded-sm"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold mb-4">{item.snippet.title}</h2>
              <p className="text-2xl ">{item.snippet.channelTitle}</p>
              <p className="text-2xl ">
                {value_converter(item.statistics.viewCount)} Views
              </p>
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default Recommanded;
