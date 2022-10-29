import React, { useState } from "react";
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
  const [active, setActive] = useState("home");

  return (
    <div className="text-gray-400">
      <div className="left-nav  flex flex-col justify-between bg-[#191C25] pt-5 text-[15px]  max-w-[112px] h-full fixed shadow-lg">
        <div className=" flex flex-col gap-6">
          <div
            onClick={() => setActive("home")}
            className={`flex flex-col justify-center items-center cursor-pointer  ${
              active === "home" &&
              "bg-[#13141F] border-l-4 border-green-700 text-white"
            }`}
          >
            <img className="w-1/4" src={home} alt="" />
          </div>
          <div
            onClick={() => setActive("live")}
            className={`flex flex-col justify-center items-center cursor-pointer  ${
              active === "live" &&
              "bg-[#13141F] border-l-4 border-green-700 text-white"
            }`}
          >
            {" "}
            <img className="w-1/4" src={live} alt="" />
            <h1>Live</h1>
          </div>
          <div
            onClick={() => setActive("pvp")}
            className={`flex flex-col justify-center items-center cursor-pointer  ${
              active === "pvp" &&
              "bg-[#13141F] border-l-4 border-green-700 text-white"
            }`}
          >
            <img className="w-1/4" src={pvp} alt="" />
            <h1>PVP</h1>
          </div>
          <div
            onClick={() => setActive("tvt")}
            className={`flex flex-col justify-center items-center cursor-pointer  ${
              active === "tvt" &&
              "bg-[#13141F] border-l-4 border-green-700 text-white"
            }`}
          >
            <img className="w-1/4" src={tvt} alt="" />
            <h1>TVT</h1>
          </div>
          <div
            onClick={() => setActive("tournament")}
            className={`flex flex-col justify-center items-center cursor-pointer  ${
              active === "tournament" &&
              "bg-[#13141F] border-l-4 border-green-700 text-white"
            }`}
          >
            <img className="w-1/4" src={tournament} alt="" />
            <h1>TOURNAMENT</h1>
          </div>
          <div
            onClick={() => setActive("wallet")}
            className={`flex flex-col justify-center items-center cursor-pointer  ${
              active === "wallet" &&
              "bg-[#13141F] border-l-4 border-green-700 text-white"
            }`}
          >
            <img className="w-1/4" src={wallet} alt="" />
            <h1>WALLET</h1>
          </div>
          <div
            onClick={() => setActive("stacking")}
            className={`flex flex-col justify-center items-center cursor-pointer  ${
              active === "stacking" &&
              "bg-[#13141F] border-l-4 border-green-700 text-white"
            }`}
          >
            <img className="w-1/4" src={stacking} alt="" />
            <h1>STACKING</h1>
          </div>
          <div
            onClick={() => setActive("account")}
            className={`flex flex-col justify-center items-center cursor-pointer  ${
              active === "account" &&
              "bg-[#13141F] border-l-4 border-green-700 text-white"
            }`}
          >
            <img className="w-1/4" src={account} alt="" />
            <h1>ACCOUNT</h1>
          </div>
        </div>
        <div
          onClick={() => setActive("emoji")}
          className={`flex flex-col justify-center items-center cursor-pointer  ${
            active === "emoji" &&
            "bg-[#13141F] border-l-4 border-green-700 text-white"
          }`}
        >
          <img className="w-1/4" src={emoji} alt="" />
          <h1>HELP CENTER</h1>
          <p>Ask your question</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
