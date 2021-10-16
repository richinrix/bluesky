import React from "react";

export default function Newsletter() {
  return (
    <div className="md:h-70vh w-full flex justify-center items-center relative my-20">
      <div className="bg-no-repeat bg-center  absolute particles-standing-lines w-full h-full" />
      <div className="news-letter-bg  h-96 md:w-9/12 w-11/12   rounded flex flex-col justify-center items-center px-10">
        <div className="font-inter text-left md:text-center text-2xl md:text-4xl text-brand-orange font-semibold my-3">
          There are many reasons to get down
        </div>
        <div className="text-brand-gray text-sm my-3 text-left md:text-center w-full md:w-1/3 ">
          There are many reasons to get dwon and start to get depressed about
          your situation.
        </div>
        <div className="w-full md:w-96 flex   my-3  rounded overflow-hidden text-sm">
          <input
            className=" w-3/4 p-4 bg-gray-500 opacity-50  text-white placeholder-brand-gray  font-inter focus:outline-none"
            type="text"
            placeholder="Your email"
          />
          <div className="w-1/4 cursor-pointer active:bg-yellow-800 bg-brand-orange font-inter text-white tracking-widest text-center flex items-center justify-center">
            Send
          </div>
        </div>
        <div className="text-brand-gray text-sm text-center">
          No spam. Only releases, updates and discounts
        </div>
      </div>
    </div>
  );
}
