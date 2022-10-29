import React, { useState } from "react";
import bottomArrow from "../assets/dropdown.png";

const JoinCard = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="bg-[#363846] max-w-6xl mx-auto">
      <div className=" grid grid-cols-2 px-14 py-2 max-w-6xl mx-auto">
        <div className="flex gap-5 justify-around items-center">
          <div className="bg-white w-11 h-11 rounded-full"></div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#9B9CA3] text-base font-bold">USERNAME</h1>
            <p className="text-lg font-poppins font-semibold">GAFI</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#9B9CA3] text-base font-bold">AMOUNT</h1>
            <p className="text-lg font-poppins font-semibold">PUBG</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#9B9CA3] text-base font-bold">GAME</h1>
            <p className="text-lg font-poppins font-semibold">10</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#9B9CA3] text-base font-bold">PLATFOMR</h1>
            <p className="text-lg font-poppins font-semibold">PS5</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 items-center">
          <p className="btn btn-fill text-center">Accept</p>
          <img
            onClick={() => setVisibility(!visibility)}
            className="cursor-pointer"
            src={bottomArrow}
            alt=""
          />
        </div>
      </div>

      <div className={`h-12 ${visibility ? "block" : "hidden"}`}></div>
    </div>
  );
};

export default JoinCard;