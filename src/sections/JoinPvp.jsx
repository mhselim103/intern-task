import React from "react";
import triangle from "../assets/triangle.png";
import JoinCard from "../components/JoinCard";
import Pagination from "../components/Pagination";
const JoinPvp = () => {
  return (
    <div className="text-white">
      <div className="">
        <h1 className="text-white text-center rectangle1 font-bold text-4xl ">
          JOIN PVP MATCH
        </h1>
      </div>
      <div className="flex justify-center">
        <img src={triangle} alt="" />
      </div>
      <div className="pt-20 pb-8 flex flex-col gap-3">
        <JoinCard />
        <JoinCard />
        <JoinCard />
        {/* <Accordian />
        <Accordian />
        <Accordian /> */}
      </div>
      <div className="flex justify-end pr-32 pb-12">
        <Pagination />
      </div>
    </div>
  );
};

export default JoinPvp;
