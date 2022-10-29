import React from "react";
import Hero from "../sections/Hero";
import home from "../assets/home.png";
import live from "../assets/live.png";
import pvp from "../assets/pvp.png";
import tvt from "../assets/tvt.png";
import tournament from "../assets/tournament.png";
import wallet from "../assets/wallet.png";
import stacking from "../assets/stacking.png";
import account from "../assets/account.png";
import emoji from "../assets/emoji.png";
const Header = () => {
  return (
    <div className="grid grid-cols-10 gap-4 text-white ">
      <div className="left-nav  flex flex-col gap-40 bg-[#191C25] py-10 text-[15px]">
        <div className=" flex flex-col gap-10">
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-1/4" src={home} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-1/4" src={live} alt="" />
            <h1>Live</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-1/4" src={pvp} alt="" />
            <h1>PVP</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-1/4" src={tvt} alt="" />
            <h1>TVT</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-1/4" src={tournament} alt="" />
            <h1>TOURNAMENT</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-1/4" src={wallet} alt="" />
            <h1>WALLET</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-1/4" src={stacking} alt="" />
            <h1>STACKING</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-1/4" src={account} alt="" />
            <h1>ACCOUNT</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <img className="w-1/4" src={emoji} alt="" />
          <h1>HELP CENTER</h1>
          <p>Ask your question</p>
        </div>
      </div>
      <div className="col-span-9 p-7">
        <div className="flex gap-4 justify-end">
          <div className="btn btn-outline flex justify-center items-center">
            <p className="font-bold">Sign In</p>
          </div>
          <div className="btn btn-fill flex justify-center items-center">
            <p className="m-2 font-bold">Sign Up</p>
          </div>
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Header;
