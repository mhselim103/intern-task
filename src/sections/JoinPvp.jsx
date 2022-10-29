import React from "react";
import triangle from "../assets/triangle.png";
import JoinCard from "../components/JoinCard";
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
      <div className="py-20 flex flex-col gap-3">
        <JoinCard />
        <JoinCard />
        <JoinCard />
        {/* <Accordian />
        <Accordian />
        <Accordian /> */}
      </div>
      <div>{/* <Pagination /> */}</div>
    </div>
  );
};

export default JoinPvp;
