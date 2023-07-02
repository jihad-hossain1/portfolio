import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { Progress } from "antd";
import { FaUserAlt } from "react-icons/fa";
const Skills = () => {
  return (
    <div className="mt-10 md:mt-16">
      <h2 className="text-4xl md:text-6xl font-extralight text-center text-slate-500 py-6 mb-10">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded border shadow border-neutral-300 relative p-8">
          <div className="absolute -top-10 flex flex-col justify-center items-center mx-auto">
            <div className="">
              <AiFillSetting className="text-7xl text-white bg-blue-600 rounded-full p-4"></AiFillSetting>
            </div>
            <span className="font-semibold text-xl mt-2">Professional</span>
          </div>
          <div className="pt-24">
            <div>
              <label htmlFor="" className="uppercase">
                HTML/CSS
              </label>
              <Progress percent={80} status="active"></Progress>
            </div>
            <div>
              <label htmlFor="" className="uppercase">
                React
              </label>
              <Progress percent={70} status="active"></Progress>
            </div>
            <div>
              <label htmlFor="" className="uppercase">
                JavaScript
              </label>
              <Progress percent={60} status="active"></Progress>
            </div>
            <div>
              <label htmlFor="" className="uppercase">
                Node.js
              </label>
              <Progress percent={50} status="active"></Progress>
            </div>
            <div>
              <label htmlFor="" className="uppercase">
                Express.js
              </label>
              <Progress percent={50} status="active"></Progress>
            </div>
            <div>
              <label htmlFor="" className="uppercase">
                Mongodb
              </label>
              <Progress percent={50} status="active"></Progress>
            </div>
          </div>
        </div>
        <div className="rounded border shadow border-neutral-300 relative p-8">
          <div className="absolute -top-10 flex flex-col justify-center items-center mx-auto">
            <div className="">
              <FaUserAlt className="text-7xl text-white bg-blue-600 rounded-full p-4"></FaUserAlt>
            </div>
            <span className="font-semibold text-xl mt-2">Personal</span>
          </div>
          <div className="pt-24">
            <div>
              <label htmlFor="">Communication</label>
              <Progress percent={70} status="active"></Progress>
            </div>
            <div>
              <label htmlFor="">Team Work</label>
              <Progress percent={60} status="active"></Progress>
            </div>
            <div>
              <label htmlFor="">Leadership</label>
              <Progress percent={50} status="active"></Progress>
            </div>
            <div>
              <label htmlFor="">Creativity</label>
              <Progress percent={80} status="active"></Progress>
            </div>
            <div>
              <label htmlFor="">Language</label>
              <Progress percent={40} status="active"></Progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
