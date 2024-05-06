import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home/Home";
import PLayer from "./pages/Player/Player";
import Login from "./pages/Login/Login";
import { auth } from "./Login";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // check wheather user is logged in
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // if user is logged in show home screen
        console.log("Logg in");
        navigate("/");
      } else {
        // if user is not logged in redirect it log in screen
        console.log("Logged Out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<PLayer />} />
      </Routes>
    </>
  );
};

export default App;
