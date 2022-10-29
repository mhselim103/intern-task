import React from "react";
import HeroSlider from "../components/HeroSlider";
// import banner from "../assets/Banner-1-1024x576.png"
const Hero = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="text-white w-[1054px] h-28 banner object-cover bg-no-repeat my-10">
            <div className="flex justify-between px-5 items-center">
              <div className="">
                <h1 className="text-6xl font-bold pt-5">PUBG MOBILE</h1>
              </div>
              <div className="pt-4 pr-10">
                <p className="btn btn-fill text-center">Join Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HeroSlider />
      </div>
    </div>
  );
};

export default Hero;
