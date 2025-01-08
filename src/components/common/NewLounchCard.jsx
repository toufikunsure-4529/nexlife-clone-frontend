import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewLaunchCard() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      image: "/images/fans/new-launch-thumb1.png",
      contentImage: "/images/fans/a95-bldc.png",
      title: "Nex dryft a95 bldc iot",
      content:
        "Where performance meets smart, with its powerful BLDC motor technology, Low noise design, & WiFi enabled features, for enhanced comfort & convenience.",
    },
    {
      id: 2,
      image: "/images/fans/new-launch-thumb2.png",
      contentImage: "/images/fans/a80-bldc.png",
      title: "Nex Glyde A80 BLDC",
      content:
        "Experience maximum torque for superior cooling, with our innovative AirFluence™ Tangential blades. Powered by AeirologyTM to deliver 20% higher air thrust* - A revolution in performance and energy efficiency with PeakTorq™ BLDC motor.",
    },
    {
      id: 3,
      image: "/images/fans/new-launch-thumb3.png",
      contentImage: "/images/fans/tpw-fan.png",
      title: "Glyde A5 TPW Fan Range",
      content:
        "An extraordinary fan that elevates the cooling and the aesthetics of your space. Experience peak performance with low noise, powered by AeirologyTM, to deliver 20% higher air thrust*.",
    },
  ];

  return (
    <div className="w-full h-auto bg-[#131313] text-white">
      <div className="max-w-full mx-auto flex flex-col md:flex-row shadow-lg">
        {/* Left Tab Section */}
        <div className="flex flex-row md:flex-col w-full md:w-1/6  overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`py-4 md:px-8 cursor-pointer flex flex-col items-center justify-center shadow-xl border border-[#696969] ${
                activeTab === tab.id ? "bg-cyan-500" : "bg-[#3b3b3b]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <img
                src={tab.image}
                alt={tab.title}
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
              <p className="text-center text-sm md:text-md font-normal">
                {tab.title}
              </p>
            </div>
          ))}
        </div>
        {/* Right Content Section */}
        <div
          className="w-full p-4 md:p-6 bg-[#1a1a1a] rounded-lg"
          data-aos="fade-left"
        >
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div
                  key={tab.id}
                  className="w-full flex flex-col md:flex-row gap-6 items-start"
                >
                  {/* Image Section */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={tab.contentImage}
                      alt={tab.title}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6 py-4">
                    <h2 className="text-2xl md:text-3xl text-white">
                      {tab.title}
                    </h2>
                    <p className="text-gray-100 text-sm leading-relaxed">
                      {tab.content}
                    </p>

                    {/* Features Section */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border border-gray-50 border-opacity-30 rounded-lg p-2">
                        <img
                          src="/images/fans/feature1.png"
                          alt="Feature 1"
                          className="w-full h-20 object-cover rounded-lg"
                        />
                      </div>
                      <div className="border border-gray-50 border-opacity-30 rounded-lg p-2">
                        <img
                          src="/images/fans/feature3.png"
                          alt="Feature 2"
                          className="w-full h-20 object-cover rounded-lg"
                        />
                      </div>
                      <div className="border border-gray-50 border-opacity-30 rounded-lg p-2">
                        <img
                          src="/images/fans/feature2.png"
                          alt="Feature 3"
                          className="w-full h-20 object-cover rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Icons Section */}
                    <div className="flex flex-wrap justify-center items-center bg-black py-2 rounded-full border border-gray-50 border-opacity-45 gap-3">
                      <img
                        src="/images/fans/icon-point-anywhere-remote.svg"
                        alt="Icon 1"
                        className="w-auto h-6 md:h-8 object-cover"
                      />
                      <img
                        src="/images/fans/icon-nexlife-app.svg"
                        alt="Icon 2"
                        className="w-auto h-6 md:h-8 object-cover"
                      />
                      <img
                        src="/images/fans/icon-alexa.png"
                        alt="Icon 3"
                        className="w-auto h-6 md:h-8 object-cover"
                      />
                      <img
                        src="/images/fans/icon-google-assistant.png"
                        alt="Icon 4"
                        className="w-auto h-6 md:h-8 object-cover"
                      />
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center items-center">
                      <Link
                        to="/ceiling-fans"
                        className="px-4 py-1 md:px-6 md:py-1 bg-transparent text-gray-100 rounded-full border border-cyan-400 transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-black"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default NewLaunchCard;
