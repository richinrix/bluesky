import React from "react";
import Nav from "../components/Nav";
import Link from "next/link";
export default function Error() {
  return (
    <div className="h-screen bg-gradient">
      <Nav />

      <div className=" mx-auto px-4 text-brand-gray flex h-screen md:h-90vh items-center justify-center  ">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-3xl font-bold ">Page not found</h2>
          <div className=" text-xl font-semibold border-2 rounded-md border-brand-gray  text-brand-white my-4 flex items-center pl-3  ">
            Go back to{" "}
            <Link href="/">
              <span className="text-white bg-brand-orange ml-2 py-2 px-3 my-0 rounded shadown cursor-pointer">
                Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
