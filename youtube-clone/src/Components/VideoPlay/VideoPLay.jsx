import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import VideoInfo from "./VideoInfo";
import Channel from "./Channel";

import { API_KEY } from "../../Data";

const VideoPLay = () => {
  const { videoId, categoryId } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    // Fetching Video Data
    const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    setLoading(true);
    await fetch(videolist_url)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.items[0]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  const fetchChennelData = async () => {
    // Fetching Channel Data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    // Fetching Comment Data
    const commentData_url = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentData_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) fetchChennelData();
  }, [apiData]);

  return (
    <section className="lg:basis-[50%] cs:basis-[60%] basis-[100%]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        className="w-full h-[40vw]"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="py-8">
        {!loading && !error && <VideoInfo apiData={apiData} />}

        {loading && apiData === null && !error && (
          <p className="text-center text-4xl font-bold">Loading...</p>
        )}

        {error && (
          <p className="text-center text-4xl font-bold text-red-500">{error}</p>
        )}
        <hr className="my-6 bg-[#333] h-[1px]" />

        {apiData && channelData && (
          <Channel
            apiData={apiData}
            channelData={channelData}
            commentData={commentData}
          />
        )}
      </div>
    </section>
  );
};

export default VideoPLay;
