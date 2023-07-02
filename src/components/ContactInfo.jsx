import React from "react";
import { AiFillMail } from "react-icons/ai";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="text-4xl md:text-6xl font-extralight">Jihad Hossain</h4>
      <p className="font-semibold text-md md:text-xl">MERN Stack Developer</p>
      <div className="flex space-x-6 items-center">
        <Link
          to={`https://www.linkedin.com/in/jihad-hossain-175571162/`}
          target="_blank"
        >
          <FaLinkedin className="text-3xl md:text-5xl shadow rounded-md"></FaLinkedin>
        </Link>
        <Link to={`https://github.com/jihad-hossain1`} target="_blank">
          <FaGithub className="text-3xl md:text-5xl text-black shadow rounded-md"></FaGithub>
        </Link>
        <Link to={``} target="_blank">
          <AiFillMail className="text-3xl md:text-5xl text-purple-600 shadow rounded-md"></AiFillMail>
        </Link>
        <Link
          to={`https://www.facebook.com/jihad.hossain.982/`}
          target="_blank"
        >
          <FaFacebook className="text-3xl md:text-5xl text-blue-700 shadow rounded-md"></FaFacebook>
        </Link>
        <Link to={``} target="_blank">
          <FaWhatsappSquare className="text-3xl md:text-5xl text-green-500 shadow rounded-md"></FaWhatsappSquare>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
