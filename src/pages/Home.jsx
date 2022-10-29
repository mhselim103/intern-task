import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import EasyJoin from "../sections/EasyJoin";
import JoinPvp from "../sections/JoinPvp";
import JoinTvt from "../sections/JoinTvt";
import LiveMatch from "../sections/LiveMatch";
import Tournaments from "../sections/Tournaments";

const Home = () => {
  return (
    <div>
      <Header />
      <EasyJoin />
      <LiveMatch />
      <JoinPvp />
      <JoinTvt />
      <Tournaments />
      <Footer />
    </div>
  );
};

export default Home;
