import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import PlayIcon from "../assets/icons/play.png";
// images

export default function LandingPage() {
  return (
    <div className="flex justify-start relative h-screen md:h-80vh w-full   md:mt-14  md:pl-20 ">
      <div className="w-full md:w-5/12 h-full flex items-center px-5 md:px-0 z-10">
        <div className="flex-col ">
          <div className="text-2xl md:text-4xl  text-brand-lightblue font-inter font-extrabold pr-20 leading-tight my-4 ">
            Many reasons to get up and start to get back in the business
          </div>
          <div className="text-md md:text-xl text-brand-gray font-rubik my-4">
            The harder you work for something the greater you'll feel when you
            achieve it.
          </div>
          <div className="  flex flex-col md:flex-row  my-8 w-full md:w-3/4">
            <div
              className="my-2 md:mr-4 orange-button orange-button-bg text-center w-3/4 md:w-1/2 h-12 flex justify-center items-center"
              href="/signup"
            >
              Learn More
            </div>
            <div
              className="my-2 md:mx-4 text-center orange-button orange-button-border w-3/4 md:w-1/2 h-12 flex justify-center items-center"
              href="/signin"
            >
              DEMO
            </div>
          </div>
          <div className="flex flex-col mt-1 md:mt-0 md:flex-row w-full ">
            <Link href="/preview" passHref>
              <div className="rounded cursor-pointer bg-brand-bg2 h-20 md:h-24 w-2/4  md:w-1/4">
                <div className="flex justify-center items-center h-full w-full ">
                  <Image
                    src={PlayIcon}
                    alt="play"
                    // className="text-5xl p-3 bg-white text-brand-bg2  rounded-full "
                  />
                </div>
              </div>
            </Link>
            <div className="flex items-center  md:px-14 md:w-3/4 text-brand-gray">
              <div className="flex-col">
                <div className="my-3 md:my-1 font-inter text-sm font-thin md:text-base">
                  The harder you work for something the greater you'll feel when
                  you achieve it.
                </div>
                <div className="text-gray-500 ">
                  <Link href="/preview" passHref>
                    Watch preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full  opacity-80 md:opacity-100 md:w-7/12 absolute top-20 md:-right-20 md:pl-30  h-90vh flex justify-end"
        style={{ zIndex: "1" }}
      >
        <div className="bg-cover bg-left  md:bg-top bg-no-repeat w-full h-full bg-runningman opacity-50 md:opacity-100 "></div>
      </div>
    </div>
  );
}
