import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../Login";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    if (!enteredEmail || !enteredPassword) return;

    if (signState === "Sign In") {
      await login(enteredEmail, enteredPassword);
    } else await signup(enteredName, enteredEmail, enteredPassword);
  };
  return (
    <section className="w-full h-screen  py-8 px-[8%] login-section">
      <img src={logo} alt="" className="md:w-60 sm:w-48 w-40" />
      <div className="max-w-[45rem] m-auto mt-12 bg-[#000000bf] md:px-24 px-16 md:py-28 py-20">
        <h2 className="md:text-6xl text-4xl font-semibold md:mb-12 mb-8">{signState}</h2>
        <form>
          {signState === "Sign Up" && (
            <input
              type="text"
              name="name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              placeholder="Your name"
              className="w-full md:px-8 px-6 md:py-4 py-2 md:my-5 my-3 bg-[#333] text-white md:h-20 h-16 placeholder:text-[#a9a9a9] md:text-[1.6rem] text-[1.3rem] outline-none border-none rounded-md"
            />
          )}
          <input
            type="email"
            name="email"
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
            placeholder="Email"
            className="w-full md:px-8 px-6 md:py-4 py-2 md:my-5 my-3 bg-[#333] text-white md:h-20 h-16 placeholder:text-[#a9a9a9] md:text-[1.6rem] text-[1.3rem] outline-none border-none rounded-md"
          />
          <input
            type="password"
            name="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Password"
            className="w-full md:px-8 px-6 md:py-4 py-2 md:my-5 my-3 bg-[#333] text-white md:h-20 h-16 placeholder:text-[#a9a9a9] md:text-[1.6rem] text-[1.3rem] outline-none border-none rounded-md"
          />
          <button
            className="bg-red-600 w-full md:h-20 h-16 md:my-5 my-3 text-2xl rounded-md"
            onClick={user_auth}
            type="submit"
          >
            {signState}
          </button>
        </form>
        <div className="flex items-center justify-between text-xl text-[#b7b7b7]">
          <div className="flex items-center gap-x-4">
            <input type="checkbox" name="" id="" className="w-7 h-7" />
            <p>Remmember Me</p>
          </div>
          <p>Need Help?</p>
        </div>

        {signState === "Sign In" ? (
          <p className="md:mt-16 mt-12 md:text-[1.5rem] text-[1.2rem] text-[#a9a9a9]">
            New to Netflix
            <span className="text-white ml-2 cursor-pointer" onClick={() => setSignState("Sign Up")}>
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className="md:mt-16 mt-12 md:text-[1.5rem] text-[1.2rem] text-[#a9a9a9]">
            Already have account?
            <span className="text-white ml-2 cursor-pointer" onClick={() => setSignState("Sign In")}>
              Sign In Now
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Login;
