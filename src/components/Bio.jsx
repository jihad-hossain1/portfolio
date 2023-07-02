import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import myResume from "../assets/Jihad.pdf";

const Bio = () => {
  return (
    <div className="border shadow-md border-neutral-200 mt-10 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-3">
        <div>
          <div>
            <h4 className="text-white bg-blue-600 px-4 rounded-sm inline-block font-extralight py-1">
              Age:
            </h4>
            <p className="inline-block ml-3">26 Years</p>
          </div>
          <hr className="my-4" />
          <div>
            <h4 className="text-white bg-blue-600 px-4 rounded-sm inline-block font-extralight py-1">
              Job:
            </h4>
            <p className="inline-block ml-3">Fresher</p>
          </div>
          <hr className="my-4" />
          <div>
            <h4 className="text-white py-1 bg-blue-600 px-4 rounded-sm inline-block font-extralight">
              Citizenship:
            </h4>
            <p className="inline-block ml-3">Bangladesh</p>
          </div>
          <hr className="my-4" />
          <div>
            <h4 className="text-white py-1 bg-blue-600 px-4 rounded-sm inline-block font-extralight">
              Adress:
            </h4>
            <p className="inline-block ml-3">Bogura, Rajshahi</p>
          </div>
          <hr className="my-4" />
          <div>
            <h4 className="text-white py-1 bg-blue-600 px-4 rounded-sm inline-block font-extralight">
              Phone:
            </h4>
            <p className="inline-block ml-3">+880 1779-334696</p>
          </div>
          <hr className="my-4" />
          <div>
            <h4 className="text-white py-1 bg-blue-600 px-4 rounded-sm inline-block font-extralight">
              Email:
            </h4>
            <p className="inline-block ml-3">jihadkhan934@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col my-auto">
          <h4 className="text-2xl font-semibold">Hello! I'm Jihad Hossain</h4>
          <p className="text-gray-500 text-xl">
            I am a MERN Web developer with more than 6000 hours of building,
            maintaining and deploying single page/eCommerce applications. and I
            can adapt onto any technology rapidly making myself flexible upon
            any tech stack. A passionate, diligent person who wants to learn
            continuously
          </p>
          <div className="">
            <button className="mr-4 bg-blue-600 text-white px-8 py-4 rounded-sm hover:shadow-md hover:bg-opacity-90">
              <a
                href={myResume}
                download={`jihadResume.pdf`}
                className="text-white hover:text-white"
              >
                Download CV
              </a>
            </button>
            <button className="bg-gray-200 text-gray-500 px-8 py-4 rounded-sm hover:bg-opacity-90 hover:shadow-md">
              <Link to={`contact`} spy={true} smooth={true} duration={500}>
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
