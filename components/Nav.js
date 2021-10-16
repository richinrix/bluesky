import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/Logo.png";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import $ from "jquery";

export default function Nav() {
  const nav = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Benefits",
      link: "/benefits",
    },
  ];
  // Functions handling navbar buttons
  const handleToggle = () => {
    $("#sideMenu").toggleClass("translate-x-full");
  };
  const resize = () => {
    $("#sideMenu").addClass("translate-x-full");
  };
  const [scrollDetect, setScrollDetect] = useState(false);
  // Changing value of variable when scroll is encountered
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollDetect(true);
    } else {
      setScrollDetect(false);
    }
  };
  return (
    <>
      <div className="hidden md:flex w-full py-6 px-20  ">
        <div className="p-2 cursor-pointer ">
          <Link href="/" passHref>
            <Image src={logo} alt="logo" width={30} height={30} />
          </Link>
        </div>
        <div className="flex w-full  justify-between text-brand-gray font-rubik font-extrabold ">
          <div className="flex text-sm  items-center tracking-widest uppercase mx-20  ">
            <div className="mx-4">
              {nav.map((item, index) => {
                return (
                  <Link href={item.link} key={index}>
                    <a className="hover:text-white text-brand-gray font-rubik font-extrabold tracking-widest uppercase mx-4">
                      {item.name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center ">
            <div
              className="mx-4 orange-button orange-button-border"
              href="/signin"
              style={{ padding: "6px 33px" }}
            >
              Sign In
            </div>
            <div
              className="mx-4 orange-button orange-button-bg  "
              href="/signup"
              style={{ padding: "8px 35px" }}
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div
        id="mobNav"
        className="md:hidden overflow-hidden top-0 fixed z-50 w-full flex justify-between pr-2 items-center h-auto"
      >
        {/* <Link passHref href="/">
          <div className={scrollDetect ? "defLogo smallLogo" : "defLogo"} />
        </Link> */}
        <nav
          id="sideMenu"
          className="text-xl sideMenu fixed p-36 text-center inset-y-0 bg-brand-bg1 right-0 transform transition items-center translate-x-full duration-500 ease-in-out uppercase min-h-screen w-full flex z-10 flex-col justify-around min-w-screen"
        >
          {nav.map((item, index) => (
            <Link passHref href={item.link}>
              <div
                key={index}
                className="  text-brand-gray font-rubik font-extrabold "
                onClick={resize}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </nav>
        <button
          onClick={handleToggle}
          className="sideMenuButton bg-brand-bg1 border-2 border-brand-gray rounded text-brand-gray  -lg z-20 text-2xl fixed top-9 right-3 focus:outline-none p-2 py-1"
        >
          <AiOutlineMenu />
        </button>
      </div>
    </>
  );
}
