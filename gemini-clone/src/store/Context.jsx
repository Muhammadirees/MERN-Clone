import React, { useState } from "react";
import runChat from "../config/gemini";
import { useRef } from "react";

export const Context = React.createContext({});

const ContextProvider = (props) => {
  const inputRef = useRef(null);
  const [result, setResult] = useState("");
  const [recentPrompt, setRecentPrompt] = useState([]);
  const [prevPrompt, setPrevPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setLoading(true);
    setShowResult(true);
    setResult("");

    try {
      let enteredInput = prompt || inputRef.current?.value;
      let response = await runChat(enteredInput);
      setPrevPrompt(enteredInput);
      !prompt && setRecentPrompt((prev) => [...prev, enteredInput]);
      setResult(response);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      inputRef.current.value = "";
    }
  };

  const contextState = {
    onSent,
    newChat,
    inputRef,
    showResult,
    loading,
    prevPrompt,
    result,
    recentPrompt,
    setRecentPrompt,
  };

  return <Context.Provider value={contextState}>{props.children}</Context.Provider>;
};

export default ContextProvider;
