import React from "react";
// json
import brands from "../public/JSON/brands.json";

export default function Brands() {
  return (
    <div className="flex flex-wrap w-full md:px-32 justify-around md:my-4">
      {brands.map((brand) => (
        <div className=" flex   opacity-80 md:opacity-50 my-4 mx-3">
          <img src={brand.image} alt={brand.name} />
        </div>
      ))}
    </div>
  );
}
