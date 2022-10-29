import React from "react";

const TournametCard = ({ image }) => {
  return (
    <div className="max-w-[470px]  text-white">
      <div className="w-full max-h-[265px] relative">
        <img src={image} alt="" />
        <div className="absolute left-0 top-0">
          <div className="btn shape">
            <p className="">Public</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1C1E22] flex flex-col">
        <div className="flex justify-around items-center py-4 ">
          <h1 className="text-xl font-bold">Codyfight IGO</h1>
        </div>

        <div className="flex justify-around items-center border-t-[0.5px] border-t-[#2E2E32] divide-x-2 divide-[#2E2E32]">
          <p className="w-1/2 text-center py-4 cursor-pointer text-sm font-semibold text-[#FFFFFF]">
            DATE : Sat, Aug 18
          </p>
          <p className="w-1/2 text-center py-4 cursor-pointer text-sm font-semibold text-[#FFFFFF]">
            TYPE : 1 V 1
          </p>
        </div>
        <div className="flex justify-center items-center border-y-[0.5px] border-y-[#2E2E32]  ">
          <p className="text-center py-4 cursor-pointer ">
            TIME : 12:00 PM UTC
          </p>
        </div>
      </div>
    </div>
  );
};

export default TournametCard;
