import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const el = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<span>Step into the world of</span>",
        "<span>High-performance solutions.</span>",
      ],
      typeSpeed: 60,
      loop: true,
      backSpeed: 40,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="relative w-full md:h-screen h-auto md:py-0 py-16"
      style={{
        backgroundImage: "url('/images/home-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col gap-5 text-gray-100  justify-center">
        <motion.h3
          className="text-4xl md:text-6xl font-bold uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Nexlife
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span
            className="mt-4 text-2xl md:text-4xl text-cyan-500 font-medium uppercase"
            ref={el}
          />
        </motion.div>

        <motion.i
          className="mt-6 text-sm md:text-xl max-w-3xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Tested and verified by DSIR laboratory, with air thrust under the fan
          vs. <br /> conventional star rated fan. Aerofoil ABS blades resulting
          in low noise.
        </motion.i>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button className="md:px-6 px-3 py-2 md:py-3 bg-cyan-500 text-gray-100 rounded-lg text-lg font-medium hover:bg-cyan-600 transition duration-300" onClick={()=>navigate("/ceiling-fans")}>
            Get Started
          </button>
          <button className="md:px-6 px-3 py-2 md:py-3 border border-gray-100 bg-black md:bg-transparent text-gray-100 rounded-lg text-lg font-medium hover:bg-gray-100 hover:text-cyan-500 transition duration-300" onClick={()=>navigate("about-us")}>
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
