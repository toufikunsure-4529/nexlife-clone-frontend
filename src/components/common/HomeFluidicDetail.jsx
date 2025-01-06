import React from "react";

const HomeFluidicDetail = () => {
  return (
    <div className="bg-black w-full md:h-screen" data-aos="fade-up">
      <div
        className="relative w-full md:h-screen h-auto md:py-0 py-16"
        style={{
          backgroundImage: "url('/images/Rectangle-106.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center text-gray-100">
          <div className="flex flex-col gap-4 md:pb-60 md:pl-44">
            <h5 className="text-4xl uppercase leading-tight">
              <span className="text-5xl font-bold">D</span>esigned with <br />
              <span className="text-cyan-300">fluidic precision</span>
            </h5>
            <p className="text-base">
              Designed to look like in motion, always.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFluidicDetail;
