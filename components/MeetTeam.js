import React from "react";

export default function MeetTeam() {
  const team = [
    {
      name: "Bruce",
      role: "Frontend Developer",
      img: "/images/team/person1.jpg",
    },
    {
      name: "Clark",
      role: "Frontend Developer",
      img: "/images/team/person2.jpg",
    },
    {
      name: "Diana",
      role: "Frontend Developer",
      img: "/images/team/person3.jpg",
    },
    {
      name: "Barry",
      role: "Frontend Developer",
      img: "/images/team/person4.jpg",
    },
    {
      name: "Barry",
      role: "Frontend Developer",
      img: "/images/team/person5.jpg",
    },
    {
      name: "Barry",
      role: "Frontend Developer",
      img: "/images/team/person6.jpg",
    },
  ];
  function imageCard(image, name, position, index) {
    return (
      <div
        className={`"card-pos h-30vh md:h-80  mt-5  mx-1 md:mx-5  px-10   w-5/12 md:w-1/6 flex flex-col items-center justify-end bg-brand-gray bg-cover bg-center bg-no-repeat " ${
          index % 2 == 0 ? "md:mt-10" : "md:mt-0"
        } `}
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="w-full">
          {/* <img className="card-img-top" src={image} alt="Card image cap" /> */}
          <div className="text-center md:my-5 w-full">
            <h5 className="text-brand-lightblue md:text-brand-bg3 font-bold text-xl ">
              {name}
            </h5>
            <p className="text-brand-bg3  text-xs font-semibold hidden md:block w-full">
              {position}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="my-10 md:my-0  md:h-90vh flex flex-col  items-center  w-full px-5 md:px-20 ">
      <div className="text-2xl md:text-4xl font-semibold text-brand-lightblue font-inter md:my-20">
        Meet The Team
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:flex-row  justify-center">
        {team.map((item, index) => {
          return imageCard(item.img, item.name, item.role, index);
        })}
      </div>
    </div>
  );
}
