import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { API_KEY, value_converter } from "../Data";

const Feed = ({ category = 0, sideBar }) => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const feed_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PK&videoCategoryId=${category}&key=${API_KEY}`;
    fetch(feed_url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setFeed(data.items);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <section className={`px-12 py-16 feed `}>
      {!loading &&
        !error &&
        feed.map((item, index) => {
          return (
            <Link
              to={`video/${item.snippet.categoryId}/${item.id}`}
              key={index}
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                alt=""
                className="rounded-lg mb-3 w-full"
              />
              <h2 className="text-3xl mb-3 font-semibold">
                {item.snippet.title}
              </h2>
              <h3 className="text-2xl font-semibold text-primaryOne mb-3">
                {item.snippet.chanelTitle}
              </h3>
              <p className="flex items-center text-2xl text-primaryOne">
                {value_converter(item.statistics.viewCount)} views &bull;{" "}
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </Link>
          );
        })}
      {loading && feed.length === 0 && !error && (
        <p className="text-center text-4xl font-bold">Loading...</p>
      )}
      {error && (
        <p className="text-center text-4xl font-bold text-red-500">{error}</p>
      )}
    </section>
  );
};

export default Feed;
