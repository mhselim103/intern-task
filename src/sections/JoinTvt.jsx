import React from "react";
import triangle from "../assets/triangle.png";
import JoinCard from "../components/JoinCard";
const JoinTvt = () => {
  return (
    <div className="text-white bg-[#000000] ">
      <div className="">
        <h1 className="text-white text-center rectangle  font-bold text-4xl">
          JOIN TVT MATCH
        </h1>
      </div>
      <div className="flex justify-center">
        <img src={triangle} alt="" />
      </div>
      <div className="py-20 flex flex-col gap-3">
        <JoinCard />
        <JoinCard />
        <JoinCard />
      </div>
    </div>
  );
};

export default JoinTvt;
