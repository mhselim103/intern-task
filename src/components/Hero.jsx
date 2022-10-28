import React from "react";
import HeroSlider from "./HeroSlider";
// import banner from "../assets/Banner-1-1024x576.png"
const Hero = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className='text-white w-[1054px] h-28  bg-[url("https://i.ibb.co/Zdhdv1B/banner.png")] object-cover bg-no-repeat my-10'>
            <div className="flex justify-between px-5 items-center">
              <div className="">
                <h1 className="text-6xl font-bold pt-5">PUBG MOBILE</h1>
              </div>
              <div className="pt-4 pr-10">
                <button className="w-[150px] bg-red-600 ">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroSlider />
    </div>
  );
};

export default Hero;