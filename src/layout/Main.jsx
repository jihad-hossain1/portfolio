import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className=" pb-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
