import React from "react";
import Header from "../components/Header";
import EasyJoin from "../sections/EasyJoin";
import LiveMatch from "../sections/LiveMatch";

const Home = () => {
  return (
    <div>
      <Header />
      <EasyJoin />
      <LiveMatch />
    </div>
  );
};

export default Home;
