import React from "react";
import bannarImg from "../assets/images/banner.svg";
import jihadImg from "../assets/images/image.png";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${bannarImg})` }}
        className="h-[300px] sticky top-0 flex flex-col items-center "
      >
        <TypeAnimation
          sequence={["I am a MERN Stack Developer", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block", color: "white" }}
          repeat={Infinity}
          className="py-16"
        />
      </div>
      <div className="relative ">
        {/* <img src={bannarImg} className="w-full sticky top-0" alt="" /> */}
        <div className="avatar relative -top-20 md:-top-32 flex flex-col justify-center items-center">
          <div className="w-44 md:w-64 rounded-full ring ring-blue-700 ring-offset-base-100 ring-offset-2">
            <img src={jihadImg} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
