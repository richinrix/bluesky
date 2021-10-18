import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState();
  const [wrongMail, setWrongMail] = useState(false);
  const [success, setSuccess] = useState(false);
  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function submitHandler(e) {
    setSuccess(true);

    e.preventDefault();
    if (validateEmail(email)) {
      setWrongMail(false);
      // document.getElementById("newsletter-form ").reset();
    } else {
      setWrongMail(true);
    }
  }

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
        <form
          id="newsletter-form"
          className=" w-full md:w-96 flex   my-3  rounded overflow-hidden text-sm"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            className=" w-3/4 p-4 bg-gray-700    placeholder-brand-gray  font-inter focus:outline-none email-color"
            type="text"
            placeholder="Your email"
          />
          <style jsx>
            {`
              .email-color {
                color: ${wrongMail ? "red" : "white"};
              }
            `}
          </style>
          <div
            onClick={(e) => submitHandler(e)}
            className="w-1/4 cursor-pointer active:bg-yellow-800 bg-brand-orange font-inter text-white tracking-widest text-center flex items-center justify-center"
          >
            Send
          </div>
        </form>
        {success ? (
          wrongMail ? (
            <div className="text-red-500 -m-2 mb-2">
              *Please enter a valid mail
            </div>
          ) : (
            <div className="text-green-600 -m-2 mb-2">
              Thank You For Subscribing
            </div>
          )
        ) : null}
        <div className="text-brand-gray text-sm text-center">
          No spam. Only releases, updates and discounts
        </div>
      </div>
    </div>
  );
}
