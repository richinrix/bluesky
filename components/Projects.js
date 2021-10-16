import React, { useRef } from "react";
import CountUp from "react-countup";
import useVisible from "./useIsVisible";
import Image from "next/image";
// image
import BgImg from "../assets/invest_bg.png";
export default function Projects() {
  // Constants for custom Hook
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);

  return (
    <div className="flex flex-col items-center justify-center  my-10 md:my-0 w-full overflow-hidden ">
      {/* save money section */}
      <div className="my-20 md:my-0 h-full w-full text-center flex flex-col items-center justify-center px-5 md:px-20">
        <div className="text-2xl md:text-4xl mx-auto text-center text-brand-lightblue font-inter font-extrabold w-full md:w-3/5 ">
          3 Simple Ways To <span className="text-brand-orange">Save</span> A
          Bunch Of <span className="text-brand-orange">Money</span> When Buying
          A New Computer
        </div>
        <div className="text-brand-gray opacity-90 font-semibold text-sm my-6 w-full md:w-1/3 text-center">
          Fully customizable and neatly organized components will help you work
          faster without limiting creative freedom.
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full my-1 md:my-8">
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 my-3 md:my-0">
            <div
              ref={elemRef}
              className="text-4xl text-brand-lightblue font-bold"
            >
              {isVisible && <CountUp start={0} end={100} duration={1} />}+
            </div>
            <div className="text-sm text-brand-gray opacity-90 font-semibold w-full md:w-1/2 text-center my-1 md:my-4">
              5 Reasons To Purchase Desktop Computers
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3  my-3 md:my-0">
            <div
              ref={elemRef}
              className="text-4xl text-brand-lightblue font-bold"
            >
              {isVisible && <CountUp start={0} end={43000} duration={2} />}+
            </div>
            <div className="text-sm text-brand-gray opacity-90 font-semibold w-full md:w-1/2 text-center my-1 md:my-4">
              3 Simple Ways To Save A Bunch Of Money When Buying A New Computer
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 my-3 md:my-0">
            <div
              ref={elemRef}
              className="text-4xl flex  text-brand-lightblue font-bold"
            >
              {isVisible && <CountUp start={0} end={30} duration={1} />}+
            </div>
            <div className="text-sm text-brand-gray opacity-90 font-semibold w-full md:w-1/2 text-center my-1 md:my-4">
              A Discount Toner Cartridge Is Better Than Ever And You Will Save
              50 Or More
            </div>
          </div>
        </div>
      </div>
      {/* get started section */}
      <div className="w-full flex flex-col md:justify-center md:items-center h-60vh md:h-50vh relative md:mb-40 my-10 ">
        <div
          className="projects-orbit-bg bg-no-repeat bg-bottom w-full h-full absolute -bottom-32 md:-bottom-72"
          style={{ zIndex: "1" }}
        />
        <div className="text-brand-lightblue text-3xl md:text-4xl text-center font-semibold font-inter w-full md:w-1/2 leading-tight z-10 px-5 md:px-20">
          Create your <span className="text-brand-orange">next project</span>{" "}
          with startup framework
        </div>
        <div className="mt-10 z-10 px-5 md:px-20">
          <div className=" orange-button orange-button-bg text-white font-inter text-center mx-auto  w-2/3 md:w-auto text-sm rounded">
            GET STARTED
          </div>
        </div>
      </div>
      {/* better business section */}
      <div className="md:h-screen  flex flex-col md:flex-row my-10  w-screen  items-center relative   px-10 md:px-20">
        <div className="bg-no-repeat bg-right -bottom-10  absolute world-map-bg w-full h-full" />
        <div className="w-full md:w-1/2 flex-col justify-end mx-auto    items-center md:ml-36 ">
          <div className="text-3xl md:text-5xl text-brand-lightblue text-left  font-bold md:font-semibold  w-full md:w-3/4  leading-snug">
            Invest property for better{" "}
            <span className="text-brand-orange">business</span>{" "}
          </div>
          <div className="text-sm text-brand-gray opacity-90 font-semibold text-left  w-full md:w-4/5 my-2 md:my-12 leading-6">
            We are committed to processing the information in order to contact
            you and talk about your project. We are committed to processing the
            information.
          </div>
          <div className="mt-10 ">
            <button
              className=" orange-button  orange-button-bg text-white text-sm  "
              style={{ padding: "17px 40px" }}
            >
              Learn more
            </button>
          </div>
        </div>

        <div className="w-4/5 md:w-1/2 h-full flex items-center justify-center my-5 md:my-0">
          <Image src={BgImg} width={400} height={440} />
        </div>
      </div>
    </div>
  );
}
