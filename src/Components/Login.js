import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    console.log(email, password);
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already registered.Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
