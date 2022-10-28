import React from "react";
import Hero from "../sections/Hero";
/* https://i.ibb.co/bQQL41P/Group-26.png
https://i.ibb.co/7WWGKLC/Group-27.png
https://i.ibb.co/HPThG3b/Group-377.png
https://i.ibb.co/618kSj4/Group-379.png
https://i.ibb.co/QjK52QD/Group-512.png
https://i.ibb.co/x6FVb7S/Icon-simple-messenger.png */
const Header = () => {
  return (
    <div className="grid grid-cols-10 gap-4 text-white ">
      <div className="left-nav  flex flex-col gap-40 bg-[#191C25] py-10 text-[15px]">
        <div className=" flex flex-col gap-10">
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img
              className="w-1/4"
              src="https://i.ibb.co/KmCt0QC/home.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img
              className="w-1/4"
              src="https://i.ibb.co/By9Fj2g/live.png"
              alt=""
            />
            <h1>Live</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img
              className="w-1/4"
              src="https://i.ibb.co/HPThG3b/Group-377.png"
              alt=""
            />
            <h1>PVP</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img
              className="w-1/4"
              src="https://i.ibb.co/1qXdn3X/Union-2.png"
              alt=""
            />
            <h1>TVT</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img
              className="w-1/4"
              src="https://i.ibb.co/bQQL41P/Group-26.png"
              alt=""
            />
            <h1>TOURNAMENT</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img
              className="w-1/4"
              src="https://i.ibb.co/618kSj4/Group-379.png"
              alt=""
            />
            <h1>WALLET</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img
              className="w-1/4"
              src="https://i.ibb.co/7WWGKLC/Group-27.png"
              alt=""
            />
            <h1>STACKING</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img
              className="w-1/4"
              src="https://i.ibb.co/QjK52QD/Group-512.png"
              alt=""
            />
            <h1>ACCOUNT</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <img
            className="w-1/4"
            src="https://i.ibb.co/x6FVb7S/Icon-simple-messenger.png"
            alt=""
          />
          <h1>HELP CENTER</h1>
          <p>Ask your question</p>
        </div>
      </div>
      <div className="col-span-9 p-7">
        <div className="flex gap-4 justify-end">
          <button className="border border-red-600 w-[136px]">Sign In</button>
          <button className="bg-red-600 w-[136px]">Sign Up</button>
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Header;
