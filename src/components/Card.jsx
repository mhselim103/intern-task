import React from "react";

const Card = ({ image }) => {
  return (
    <div className="w-[470px]  text-white">
      <div className="w-full h-[265px] relative">
        <img src={image} alt="" />
        <div className="absolute left-0 top-0">
          <div className="btn shape">
            <p className="">Public</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1C1E22] flex flex-col gap-8 py-8">
        <div className="grid grid-cols-3 divide-x justify-items-center">
          <p>Costro_2934</p>
          <p>VS</p>
          <p>ZonoXVII</p>
        </div>
        <div className="flex justify-around items-center">
          <p>3.55</p>
          <p>1.75</p>
        </div>
        <div className="grid grid-cols-3 divide-x justify-items-center">
          <p>3</p>
          <p>1</p>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
