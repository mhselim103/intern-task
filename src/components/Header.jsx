import React from "react";
import account from "../assets/account.png";
import emoji from "../assets/emoji.png";
import home from "../assets/home.png";
import live from "../assets/live.png";
import pvp from "../assets/pvp.png";
import stacking from "../assets/stacking.png";
import tournament from "../assets/tournament.png";
import tvt from "../assets/tvt.png";
import wallet from "../assets/wallet.png";
const Header = () => {
  return (
    <div className="">
      <div className="left-nav  flex flex-col gap-28 bg-[#191C25] py-10 text-[15px]  max-w-[112px] fixed shadow-lg">
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-600">
            <img className="w-1/4" src={home} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-600">
            {" "}
            <img className="w-1/4" src={live} alt="" />
            <h1>Live</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-600">
            <img className="w-1/4" src={pvp} alt="" />
            <h1>PVP</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-600">
            <img className="w-1/4" src={tvt} alt="" />
            <h1>TVT</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-600">
            <img className="w-1/4" src={tournament} alt="" />
            <h1>TOURNAMENT</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-600">
            <img className="w-1/4" src={wallet} alt="" />
            <h1>WALLET</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-600">
            <img className="w-1/4" src={stacking} alt="" />
            <h1>STACKING</h1>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-600">
            <img className="w-1/4" src={account} alt="" />
            <h1>ACCOUNT</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-slate-600">
          <img className="w-1/4" src={emoji} alt="" />
          <h1>HELP CENTER</h1>
          <p>Ask your question</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
