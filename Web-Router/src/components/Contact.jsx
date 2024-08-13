import React from "react";

function Contact() {
  return (
    <div className="bg-slate-400 h-screen">
      <div className="flex w-2/3 m-auto flex-wrap pt-24 justify-center items-center">
        <h1 className="text-4xl text-center w-full font-bold">
          Please Sign in
        </h1>
        <div className="flex flex-col">
          <input
            type="text"
            className="w-96 border-none outline-none rounded-lg my-5 p-2 "
            placeholder="Email address"
          />
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            className="w-96 border-none outline-none rounded-lg mt-2 mb-5 p-2 "
            placeholder="Enter your password"
          />
          <div className="text-center text-base">
            <input type="checkbox" />
            <label htmlFor="check" className="ml-1">
              Remember me
            </label>
          </div>
          <button
            className="w-96 border-none outline-none rounded-lg mt-2 bg-blue-800 text-white p-2 "
            placeholder="Enter your password"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
