import React from "react";
import Link from "next/link";
// icons
import { FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const sitemap = [
    {
      name: "First",
      pages: [
        {
          name: "First page",
          url: "/first",
        },
        {
          name: "Second page",
          url: "/second",
        },
        {
          name: "Third page",
          url: "/third",
        },
        {
          name: "Fourth page",
          url: "/fourth",
        },
      ],
    },
    {
      name: "Second",
      pages: [
        {
          name: "First page",
          url: "/first",
        },
        {
          name: "Second page",
          url: "/second",
        },
        {
          name: "Third page",
          url: "/third",
        },
        {
          name: "Fourth page",
          url: "/fourth",
        },
      ],
    },
    {
      name: "Third",
      pages: [
        {
          name: "First page",
          url: "/first",
        },
        {
          name: "Second page",
          url: "/second",
        },
        {
          name: "Third page",
          url: "/third",
        },
        {
          name: "Fourth page",
          url: "/fourth",
        },
      ],
    },
    {
      name: "Fourth",
      pages: [
        {
          name: "First page",
          url: "/first",
        },
        {
          name: "Second page",
          url: "/second",
        },
        {
          name: "Third page",
          url: "/third",
        },
        {
          name: "Fourth page",
          url: "/fourth",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full px-5 md:px-32 ">
      <div className="flex justify-between items-center">
        <div className="text-brand-orange font-inter font-semibold text-3xl">
          ARShakir
        </div>
        <div className="flex justify-center ">
          <Link href="google.com/username" passHref>
            <FaGoogle className="text-white  text-4xl p-3 bg-gray-600 cursor-pointer rounded-full mx-2" />
          </Link>
          <Link href="twitter.com/username" passHref>
            <FaTwitter className="text-white  text-4xl p-3 bg-gray-600 cursor-pointer rounded-full mx-2" />
          </Link>
          <Link href="facebook.com/username" passHref>
            <FaFacebookF className="text-white  text-4xl p-3 bg-gray-600 cursor-pointer rounded-full mx-2" />
          </Link>
        </div>
      </div>
      {/* sitemap */}
      <div className="flex flex-wrap justify-between w-full my-4 ">
        {sitemap.map((page, index) => (
          <div
            className="w-1/2 md:w-auto flex flex-col text-center md:text-left my-5 md:my-0 "
            key={index}
          >
            <div className="text-white mb-2 md:mb-4">{page.name}</div>
            <div className="flex flex-col">
              {page.pages.map((item, index) => (
                <Link href={item.url} key={index}>
                  <a className="text-brand-gray my-0.5 md:my-1.5 text-sm font-inter font-semibold ">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* copyrights */}
      <div className="text-brand-gray text-md my-14 flex flex-col md:flex-row items-center justify-center">
        <div className="mx-3">© Copyrights 2021</div>
        <div className="mx-3">Privacy Policy</div>
        <div className="mx-3">Terms of Service</div>
      </div>
    </div>
  );
}
