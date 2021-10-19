import React from "react";
import Image from "next/image";
// images
import BgImg from "../assets/features.png";
import feature1 from "../assets/icons/feature1.png";
import feature2 from "../assets/icons/feature2.png";
export default function FindingInfo() {
  return (
    <div className="h-screen flex flex-col md:flex-row w-full items-center relative px-5 md:px-20 ">
      {/* image */}
      <div className="w-full md:w-2/5 h-full flex items-center justify-start ">
        <Image src={BgImg} width={500} height={440} />
      </div>
      <div className="w-full md:w-3/5 flex flex-col  justify-center md:pl-14 ">
        {/* header */}
        <div className="flex flex-col my-8 w-full md:w-2/3 ">
          <div className="text-3xl font-bold font-inter text-brand-lightblue my-1 md:my-8">
            Help Finding Information Online
          </div>
          <div className="text-sm text-brand-gray opacity-90">
            Fully customizble and neatly organized components will help you work
            faster without limiting creative freedom.
          </div>
        </div>
        {/* features */}
        <div className="flex flex-col md:flex-row justify-between w-full    ">
          <div className="flex flex-col w-full md:w-1/2  ">
            <div>
              <Image src={feature1} width={35} height={35} />
            </div>
            <div className="text-brand-lightblue text-lg font-inter my-1">
              Feature One
            </div>
            <div className="text-sm text-brand-gray opacity-90 pr-0 md:pr-32 my-2 ">
              Fully customizble and neatly organized components will help you
              work faster without limiting creative freedom.
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2  ">
            <div>
              <Image src={feature2} width={35} height={35} />
            </div>
            <div className="text-brand-lightblue text-lg font-inter my-1">
              Feature Two
            </div>
            <div className="text-sm text-brand-gray opacity-90 pr-0 md:pr-32 my-2">
              Fully customizble and neatly organized components will help you
              work faster without limiting creative freedom.
            </div>
          </div>
        </div>
      </div>
      {/* background image */}
      <div className="bg-no-repeat bg-right  -right-2  absolute ray-particles w-full h-full" />
    </div>
  );
}
