import React from "react";
import { Link } from "react-router-dom";
import NewLounchCard from "../components/common/NewLounchCard";
import HomeFluidicDetail from "../components/common/HomeFluidicDetail";

import Slider from "react-slick";

function Fans() {
  const nextFanData = [
    {
      id: "celling-fans",
      slug: "/ceiling-fans",
      name: "Celling Fans",
      image: "/images/fans/ceiling_fan_bg.png",
      description:
        "Meet the new high of comfort. Here is a range of ceiling fans powered by Aeirology™ that give 20% higher air thrust*, make lesser noise, look stunning, and give higher power savings. Fans that are engineered with you in mind.",
    },
    {
      id: "tpw-fans",
      slug: "/ceiling-fans",
      name: "TPW fans",
      image: "/images/fans/stand_fan_bg.png",
      description:
        "A range of Table, Pedestal & Wall fans where elegance meets engineering. Experience peak performance with low noise, powered by AeirologyTM , to deliver 20% higher air thrust*. Nex TPW fans are the breath of fresh air your space has been waiting for.",
    },
  ];

  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove arrows
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#ccc",
        }}
      ></div>
    ),
  };

  return (
    <div className="w-full bg-black">
      {/* Hero Image Section */}
      <div className="relative w-full md:h-screen">
        {/* Slider */}
        <Slider {...settings}>
          <div>
            <img
              src="/images/fans/hero.jpg"
              alt="Fans showcasing hero image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/images/fans/hero2.jpg"
              alt="Fans showcasing hero image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* Content Section */}
      <div
        className="max-w-6xl mx-auto px-6 py-10 text-gray-100"
        data-aos="fade-up"
      >
        <h1 className="text-2xl font-semibold uppercase md:text-4xl text-center">
          Explore <span className="text-cyan-300">Nex</span> Fans
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center">
          Discover our premium range of Nex Fans built for ultimate comfort and
          style. Perfect for your home or office space.
        </p>

        {/* images section */}
        <div className="flex justify-center items-center md:flex-row flex-col md:gap-10 gap-4 py-20">
          {/* Card */}

          {nextFanData.map((item, index) => (
            <div
              className="relative w-full h-[450px] rounded-lg shadow-sm overflow-hidden hover:shadow-cyan-400 transition-all duration-500 ease-in-out cursor-pointer group"
              key={index}
              data-aos="fade-up"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 ease-in-out  group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-all duration-300"></div>
              <div className="absolute w-fit md:w-8/12 bottom-5 left-5 z-20 text-white space-y-4">
                <h3 className="text-xl font-normal uppercase">{item.name}</h3>
                <p className="text-sm">{item.description}</p>
                <Link
                  to={`${item.slug}?${item.id}`}
                  className="inline-block text-cyan-300  rounded-lg transition-all"
                >
                  Pick your {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Components */}
      <div data-aos="fade-up">
        <h1 className="text-2xl font-semibold text-gray-100 mb-6 uppercase md:text-4xl text-center">
          New <span className="text-cyan-300">Launches</span>
        </h1>
        <NewLounchCard />
      </div>
      {/* Render Components */}
      <div className="my-6 mt-16" data-aos="fade-up">
        <h1 className="text-2xl font-semibold text-gray-100 mb-6 uppercase md:text-4xl text-center">
          Step <span className="text-cyan-300">Into the world</span>
        </h1>
        <HomeFluidicDetail />
      </div>
      {/* Render Components */}
      <div
        className="max-w-6xl mx-auto px-5 md:py-5 my-6 mt-10"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <img
              className="mx-auto lg:mx-0"
              src="/images/fans/icon-iot-fan.svg"
              alt="iot-Fan"
            />
            <p className="text-lg text-gray-100">
              Meet the new high of comfort. Here is a range of ceiling fans
              powered by Aeirology™ that give 20% higher air thrust*, make
              lesser noise, look stunning, and give higher power savings. Fans
              that are engineered with you in mind.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 my-4">
              <img
                className="w-auto h-8"
                src="/images/fans/icon-point-anywhere-remote.svg"
                alt="Point Anywhere Remote"
              />
              <img
                className="w-auto h-8"
                src="/images/fans/icon-google-assistant.png"
                alt="Google Assistant"
              />
              <img
                className="w-auto h-8"
                src="/images/fans/icon-alexa.png"
                alt="Alexa"
              />
            </div>
            <div className="mt-6">
              <img
                className="w-full max-w-xs mx-auto lg:mx-0"
                src="/images/fans/Unit.png"
                alt="Unit"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <img
              className="w-full h-auto max-w-lg mx-auto"
              src="/images/fans/iot-Fan.jpg"
              alt="iot-Fan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fans;
