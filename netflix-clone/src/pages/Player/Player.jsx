import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";

const PLayer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [apiData, setApiData] = useState([]);

  const { id } = useParams();
  const navigaate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODBmZjYwMGIyMmQzYjgwYWRmODZlNTViNzRiYTgyMyIsInN1YiI6IjY2MzBlMDBkNmEzMDBiMDEyYTYwOTY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p9d8Ol4d14fQ55KO35HhJqVqSKX5kNZ4KVo6xzTO08Q",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
        if (!response.ok) throw new Error("Something went wrong!!!");
        const data = await response.json();
        setLoading(false);
        setApiData([data.results[0]]);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const PlayerConent = () => {
    if (apiData.length > 0) {
      console.log("greater");
      return (
        <>
          <iframe
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${apiData[0].key}`}
            title="trailer"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
          <div className="flex items-center justify-between md:text-3xl text-2xl w-[90%] mt-8">
            <p>{apiData[0].published_at.slice(0, 10)}</p>
            <p>{apiData[0].name}</p>
            <p>{apiData[0].type}</p>
          </div>
        </>
      );
    } else if (loading) return <p className="text-2xl">Loading....</p>;
    else if (error) return <p className=" text-2xl">{error}</p>;
    else return <p className=" text-2xl text-red-500">Something went wrong!!</p>;
  };

  return (
    <section className="relative my-4 h-screen h flex items-center justify-center flex-col">
      <img
        src={back_arrow}
        alt=""
        className=" absolute left-4 md:w-20 w-12 top-8 cursor-pointer"
        onClick={() => navigaate(-1)}
      />
      {PlayerConent()}
    </section>
  );
};

export default PLayer;
