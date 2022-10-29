import React from "react";
import cardBottom from "../assets/card-bottom.svg";
import web from "../assets/web.png";
import LazyLoad from "./LazyLoad";

const Card = ({ image }) => {
  return (
    <div className="max-w-[470px]  text-white">
      <div className="w-full max-h-[265px] relative">
        <LazyLoad url={image} />
        <div className="absolute left-0 top-0">
          <div className="btn shape flex gap-2 items-center">
            <img src={web} alt="" />
            <p className="">Public</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1C1E22] flex flex-col relative">
        <div className="absolute left-0 bottom-0">
          <img className="w-1/4" src={cardBottom} alt="" />
        </div>
        <div className="flex justify-around items-center py-4 ">
          <p>Costro_2934</p>
          <p>VS</p>
          <p>ZonoXVII</p>
        </div>

        <div className="flex justify-around items-center border-t-[0.5px] border-t-[#2E2E32] divide-x-2 divide-[#2E2E32]">
          <p className="w-1/2 text-center py-4 cursor-pointer hover:bg-gray-800">
            3.55
          </p>
          <p className="w-1/2 text-center py-4 cursor-pointer hover:bg-gray-800">
            1.75
          </p>
        </div>
        <div className="flex justify-between items-center border-y-[0.5px] border-y-[#2E2E32]  divide-x-2 divide-[#2E2E32]">
          <p className="w-1/3 text-center py-4 cursor-pointer hover:bg-gray-800">
            1
          </p>
          <p className="w-1/3 text-center py-4 cursor-pointer hover:bg-gray-800">
            5
          </p>
          <p className="w-1/3 text-center py-4 cursor-pointer hover:bg-gray-800">
            3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
