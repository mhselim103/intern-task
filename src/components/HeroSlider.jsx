import React, { useState } from "react";
import featuedGame from "../assets/featured-game.png";
import fifa from "../assets/fifa.png";
import leftArrow from "../assets/leftArrow.png";
import pes from "../assets/pes.jpg";
import pubg from "../assets/PUBG_Mobile.png";
import rightArrow from "../assets/rightArrow.png";
import LazyLoad from "./LazyLoad";
const HeroSlider = () => {
  const [slider, setSlider] = useState("fifa");

  const handleRightArrow = () => {
    if (slider === "fifa") {
      setSlider("pes");
    } else if (slider === "pes") {
      setSlider("pubg");
    } else {
      setSlider("fifa");
    }
  };
  const handleLeftArrow = () => {
    if (slider === "fifa") {
      setSlider("pubg");
    } else if (slider === "pubg") {
      setSlider("pes");
    } else {
      setSlider("fifa");
    }
  };

  return (
    <div className="pt-10 flex justify-center">
      <div className="flex gap-3 items-center">
        <div>
          <img
            src={leftArrow}
            alt=""
            className="cursor-pointer"
            onClick={() => handleLeftArrow()}
          />
        </div>
        <div className="relative">
          <div>
            <img
              src={slider === "fifa" ? fifa : slider === "pubg" ? pubg : pes}
              className="w-[1100px] h-[700px]"
              alt=""
            />
          </div>
          <div className="absolute top-0 left-0 feature btn w-[200px]">
            <img src={featuedGame} alt="" />
          </div>
          <div className="flex flex-col gap-12 absolute top-80 left-0 px-10 text-gray">
            <div>
              <h1
                className={`text-3xl font-bold text-white ${
                  slider === "pes" ? "bg-gray-600" : ""
                }`}
              >
                ENGINES OF FURY
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <p>ENTER TO THE GAME</p>
              <div className="btn btn-fill flex justify-center items-center h-[33px]">
                <p className=" font-bold">JOIN NOW</p>
              </div>
            </div>
          </div>

          <div className="absolute top-52 right-0">
            <div className="flex flex-col gap-5">
              <div
                className="w-36 cursor-pointer"
                onClick={() => setSlider("fifa")}
              >
                <LazyLoad url={fifa} />
              </div>
              <div
                className="w-36 cursor-pointer"
                onClick={() => setSlider("fifa")}
              >
                <LazyLoad url={pes} />
              </div>
              <div
                className="w-36 cursor-pointer"
                onClick={() => setSlider("fifa")}
              >
                <LazyLoad url={pubg} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={rightArrow}
            alt=""
            className="cursor-pointer"
            onClick={() => handleRightArrow()}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
