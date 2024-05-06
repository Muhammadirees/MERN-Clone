import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";

import { Link } from "react-router-dom";

const TitleCards = ({ title, category, responsiveClass }) => {
  const sliderRef = useRef(null);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODBmZjYwMGIyMmQzYjgwYWRmODZlNTViNzRiYTgyMyIsInN1YiI6IjY2MzBlMDBkNmEzMDBiMDEyYTYwOTY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p9d8Ol4d14fQ55KO35HhJqVqSKX5kNZ4KVo6xzTO08Q",
      },
    };

    const wheelHandler = (e) => {
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY;
    };
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
          options
        );

        if (!response.ok) throw new Error("Something went wrong!!!");

        const data = await response.json();
        setLoading(false);

        setApiData(data.results);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
    sliderRef.current.addEventListener("wheel", wheelHandler);
    return () => {
      if (sliderRef.current) sliderRef.current.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <section className={`mb-12 md:mt-8 mt-6 ${responsiveClass ? responsiveClass : ""}`}>
      <h2 className="md:mb-4 mb-3 md:text-[2.5rem] text-[1.7rem] font-bold">{title ? title : "Popular on Netflix"}</h2>
      <aside className="flex items-start md:gap-x-8 gap-x-5 overflow-x-scroll card-list md:mb-12 mb-2" ref={sliderRef}>
        {apiData.map((item, index) => {
          return (
            <Link to={`/player/${item.id}`} className="relative" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt=""
                className="md:w-[24rem] w-[18rem] max-w-[24rem]"
              />
              <h3 className=" absolute bottom-[15%] right-[2%] md:text-[1.5rem] text-[1.2rem] font-semibold">
                {item.original_title}
              </h3>
            </Link>
          );
        })}
        {loading && <div className="text-center text-4xl">Loading....</div>}
        {error && <p className="text-red-600 text-3xl">{error}</p>}
      </aside>
    </section>
  );
};

export default TitleCards;
