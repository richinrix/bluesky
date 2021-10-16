import React from "react";
import Image from "next/image";
export default function Choices() {
  const choices = [
    {
      name: "Ecstatic elegance",
      icon: "/images/choices/choice1.png",
      description:
        "Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.",
    },
    {
      name: "Folly words widow",
      icon: "/images/choices/choice2.png",
      description:
        "Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.",
    },
    {
      name: "Possible procured trifling",
      icon: "/images/choices/choice3.png",

      description:
        "We me rent been part what. An concluded sportsman offending so provision mr education.",
    },
    {
      name: "Open game",
      icon: "/images/choices/choice4.png",
      description:
        "Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.",
    },
    {
      name: "Endeavor",
      icon: "/images/choices/choice5.png",
      description:
        "Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. ",
    },
    {
      name: "Confort pursuit",
      icon: "/images/choices/choice6.png",
      description:
        "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.",
    },
  ];
  return (
    <div className="flex-col justify-center  my-10 md:my-28 h-full  relative px-4 md:px-0 ">
      {/* pic */}
      <div className="absolute raining-particles-bg w-screen h-full bg-no-repeat bg-right md:bg-top md:-top-44 " />

      <div className="text-2xl md:text-5xl text-brand-lightblue font-bold text-center ">
        Your choice
      </div>
      <div className="text-lg text-center text-brand-gray opacity-70 font-inter font-semibold my-4">
        There are many reasons to get down and start to get depressed about your
        situation
      </div>
      <div className="flex items-center md:px-20 flex-wrap justify-center mt-10 ">
        {choices.map((choice) => {
          return (
            <div className="w-full md:w-1/3 my-3 md:my-0 md:p-4">
              <div className="flex justify-center">
                <div className="ml-10 md:ml-0 w-8/12 md:w-1/2">
                  <div className="text-brand-lightblue text-base md:text-lg font-inter relative">
                    <div className="absolute -ml-12">
                      <Image src={choice.icon} width={25} height={25} />
                    </div>
                    {choice.name}
                  </div>
                  <div className="text-brand-gray opacity-90 text-xs md:text-sm">
                    {choice.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
