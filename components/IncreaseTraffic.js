import React from "react";
import BgImg from "../assets/overview.png";
import Image from "next/image";
export default function IncreaseTraffic() {
  return (
    <div className="md:h-screen flex flex-col-reverse md:flex-row w-full items-center justify-center relative  ">
      {/* background image */}
      <div className="bg-no-repeat bg-left -bottom-72 -left-32  absolute ray-particles2 w-full h-full" />
      <div className=" w-full  md:w-1/2   flex-col justify-center  md:justify-end  items-center px-5 ml-20 md:ml-36">
        <div className="text-2xl md:text-5xl text-brand-lightblue font-semibold w-5/6   md:w-3/4 ">
          Increase your business{" "}
          <span className="text-brand-orange">traffic</span>{" "}
        </div>
        <div className="text-sm text-brand-gray opacity-90 font-semibold w-4/5 my-3   md:my-12 leading-6">
          We are committed to processing the information in order to contact you
          and talk about your project.
        </div>
        <div className="mt-5 md:mt-10 ">
          <button
            className=" orange-button   orange-button-bg text-white text-sm rounded"
            style={{ padding: "17px 40px" }}
          >
            Learn more
          </button>
        </div>
      </div>
      {/* image */}
      <div className=" w-5/6 md:w-1/2 h-full flex items-center justify-center ">
        <Image src={BgImg} width={400} height={440} />
      </div>
    </div>
  );
}
