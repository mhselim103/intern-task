import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import EasyJoin from "../sections/EasyJoin";
import Hero from "../sections/Hero";
import JoinPvp from "../sections/JoinPvp";
import JoinTvt from "../sections/JoinTvt";
import LiveMatch from "../sections/LiveMatch";
import Tournaments from "../sections/Tournaments";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <EasyJoin />
      <LiveMatch />
      <JoinPvp />
      <JoinTvt />
      <Tournaments />
      <Footer />
    </Layout>
  );
};

export default Home;
