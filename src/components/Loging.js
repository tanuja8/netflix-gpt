import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Loging = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handlebuttonClick = () => {
    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg"
          alt="back-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 my-36 mx-auto right-0 left-0  p-12 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-white"
        />
        <p className="text-red-500 text-lg py-4">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handlebuttonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already Registered?SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Loging;
