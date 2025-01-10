import React, { useEffect } from "react";
import HeroSection from "../components/Herosection/HeroSection";
import Explore from "../components/common/Explore";
import HomeFluidicDetail from "../components/common/HomeFluidicDetail";
import ViewOnlyCardItem from "../components/common/ViewOnlyCardItem";
import VideoContent from "../components/common/VideoContent";

function Home() {
  useEffect(() => {
    document.title =
      "Best Fans in India for Elevated experience Savings | Nex Fans";
  }, []);

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
