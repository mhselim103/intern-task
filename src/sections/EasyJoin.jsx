import React from "react";
import timeline from "../assets/timeline.png";
import shape from "../assets/hero-shape.svg";
const EasyJoin = () => {
  return (
    <div className="py-20">
      <div className="flex justify-center flex-col items-center gap-20 easy">
        <h1 className="font-bold text-4xl text-white">
          EASY TO JOIN INO & IGO WITH 5 STEPS
        </h1>
        <img src={timeline} alt="" />
      </div>
    </div>
  );
};

export default EasyJoin;
