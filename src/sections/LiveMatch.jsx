import React from "react";
import triangle from "../assets/triangle.png";
import Card from "../components/Card";
const LiveMatch = () => {
  return (
    <div className="bg-[#000000]">
      <div className="">
        <h1 className="text-white text-center rectangle ">Live Match</h1>
      </div>
      <div className="flex justify-center">
        <img src={triangle} alt="" />
      </div>

      <div>
        <Card
          image={
            "https://d1j2c9jkfhu70p.cloudfront.net/codyfight_mobile_ce523a28fd.png"
          }
        />
      </div>
    </div>
  );
};

export default LiveMatch;
