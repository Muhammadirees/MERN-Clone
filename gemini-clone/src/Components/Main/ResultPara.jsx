import React, { useEffect, useRef, useState } from "react";
import "./Main.css";

const ResultPara = ({ result }) => {
  const timerRef = useRef(null);
  const [results, setResults] = useState("");

  useEffect(() => {
    let formatedText = result
      .split("**")
      .map((el, index) => (index % 2 === 0 ? el : `<b>${el}</b>`))
      .join("")
      .split("*")
      .join("<br/>")
      .split(" ");

    let index = 0;
    timerRef.current = setInterval(() => {
      if (index < formatedText.length - 1) {
        setResults((prev) => prev + formatedText[index] + " ");
        index++;
      } else {
        clearInterval(timerRef.current);
      }
    }, 100);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [result]);

  return <p className="px-6 py-2 leading-relaxed result" dangerouslySetInnerHTML={{ __html: results }}></p>;
};

export default ResultPara;
