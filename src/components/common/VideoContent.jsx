import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function VideoContent() {
  return (
    <div className="w-full  bg-[#000000]">
      <div className=" md:py-16 py-16 ">
        <video
          src="/images/static-card/COMPARENEW__10_1FINALAPPROVED.mp4"
          autoPlay
          loop
          muted
          className="max-w-full max-h-full"
        />
      </div>

      {/* 2snd video */}

      <div className="w-full md:px-6 py-10 text-gray-100 flex items-center gap-36 flex-col md:flex-row">
        <div className="md-w-1/2 w-full">
          <video
            src="/images/static-card/aeirology-bg.mp4"
            autoPlay
            loop
            muted
            className="max-w-full max-h-full"
          />
        </div>
        <div
          className="md-w-1/2 w-full px-6"
          data-aos-anchor-placement="top-center"
        >
          <h3 className="font-semibold md:text-5xl text-3xl line-clamp-3 mb-5">
            The{" "}
            <span className="text-cyan-400">
              AeirologyTM <br />
            </span>
            Experience
          </h3>
          <button className="text-xl flex justify-center items-center gap-4 hover:gap-1 transition-all duration-500 ease-in-out hover:text-cyan-400">
            Explore{" "}
            <div className="h-12 w-12 rounded-full bg-cyan-400 text-black flex justify-center items-center">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoContent;
