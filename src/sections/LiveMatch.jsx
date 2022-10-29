import React from "react";
import triangle from "../assets/triangle.png";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const data = [
  {
    imageUrl:
      "https://d1j2c9jkfhu70p.cloudfront.net/codyfight_mobile_ce523a28fd.png",
  },
  {
    imageUrl: "https://i.ytimg.com/vi/mdsbOseRvUg/maxresdefault.jpg",
  },
  {
    imageUrl:
      "https://d1j2c9jkfhu70p.cloudfront.net/codyfight_mobile_ce523a28fd.png",
  },
];

const LiveMatch = () => {
  return (
    <div className="bg-[#000000] ">
      <div className="">
        <h1 className="text-white text-center rectangle font-bold text-4xl">
          Live Match
        </h1>
      </div>
      <div className="flex justify-center">
        <img src={triangle} alt="" />
      </div>

      <div className="grid grid-cols-3 gap-5 justify-items-center px-32 pt-20 pb-8">
        {data.map((item, idx) => (
          <Card key={idx} image={item.imageUrl} />
        ))}
      </div>
      <div className="flex justify-end pr-32 pb-12">
        <Pagination />
      </div>
    </div>
  );
};

export default LiveMatch;
