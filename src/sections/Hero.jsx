import React from "react";
import HeroSlider from "../components/HeroSlider";
// import banner from "../assets/Banner-1-1024x576.png"
const Hero = () => {
  return (
    <div>
      <div>
        <div className="flex gap-4 justify-end pr-10 pt-10">
          <div className="btn btn-outline flex justify-center items-center">
            <p className="font-bold">Sign In</p>
          </div>
          <div className="btn btn-fill flex justify-center items-center ">
            <p className="font-bold">Sign Up</p>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <div className="text-white w-[1054px] h-28 banner object-cover bg-no-repeat ">
            <div className="flex justify-between px-5 items-center">
              <div className="">
                <h1 className="text-6xl font-bold pt-5">PUBG MOBILE</h1>
              </div>
              <div className="pt-4 pr-10 ">
                <div className="btn btn-fill flex justify-center items-center">
                  <p className="font-bold">Join Now</p>
                </div>
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
