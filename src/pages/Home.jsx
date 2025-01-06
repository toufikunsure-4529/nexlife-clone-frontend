import React from "react";
import HeroSection from "../components/Herosection/HeroSection";
import Explore from "../components/common/Explore";
import HomeFluidicDetail from "../components/common/HomeFluidicDetail";
import ViewOnlyCardItem from "../components/common/ViewOnlyCardItem";
import VideoContent from "../components/common/VideoContent";

function Home() {
  return (
    <>
      <HeroSection />
      <Explore />
      <HomeFluidicDetail />
      <ViewOnlyCardItem />
      <VideoContent />
    </>
  );
}

export default Home;
