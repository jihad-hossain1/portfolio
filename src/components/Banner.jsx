import React from "react";
import bannarImg from "../assets/images/banner.svg";
import jihadImg from "../assets/images/image.png";

const Banner = () => {
  return (
    <div className="relative ">
      <img src={bannarImg} className="w-full" alt="" />
      <div className="absolute -top-7">
        <img src={jihadImg} className="rounded-full bg-gray-400" alt="jihad" />
      </div>
    </div>
  );
};

export default Banner;
