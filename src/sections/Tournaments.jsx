import React from "react";
import triangle from "../assets/triangle.png";
import Pagination from "../components/Pagination";
// import Pagination from "../components/Pagination";
import TournametCard from "../components/TournamentCard";

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

const Tournaments = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-white text-center rectangle1  font-bold text-4xl">
          Tournaments
        </h1>
      </div>
      <div className="flex justify-center">
        <img src={triangle} alt="" />
      </div>

      <div className="grid grid-cols-3 gap-5 justify-items-center px-32 py-20">
        {data.map((item, idx) => (
          <TournametCard key={idx} image={item.imageUrl} />
        ))}
      </div>

      <div className="flex justify-end pr-32">
        <Pagination />
      </div>
    </div>
  );
};

export default Tournaments;
