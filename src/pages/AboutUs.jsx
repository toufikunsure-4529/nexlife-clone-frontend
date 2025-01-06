import React from "react";
import Explore from "../components/common/Explore";

function AboutUs() {
  return (
    <div className=" w-full h-auto md:py-0 py-16">
      {" "}
      {/* About Hero Section */}
      <div
        className="relative  w-full h-auto md:py-10 py-16 flex flex-col justify-center items-center gap-5"
        style={{
          backgroundImage: "url('/images/about/about-dot1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src="/images/about/logo-n.png" alt="About-logo" />

        <div className="text-center text-gray-100">
          <h2 className="md:text-5xl text-2xl text-gray-100 text-center uppercase mb-3">
            Feel The <span className="text-cyan-300">Future</span>
          </h2>
          <p className="font-semibold">A surreal experience for your senses</p>
        </div>
      </div>
      {/* 1st Section */}
      <div
        className="max-w-6xl mx-auto px-5 py-8 h-auto text-gray-100 flex flex-col md:flex-row justify-between items-center"
        data-aos="fade-up"
      >
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl text-cyan-400 uppercase">
            Tomorrow <br />
            Makers
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm">
            At Nex, we don’t just stop at today. We see what the future looks
            like. Our home appliances go beyond function. They are made to evoke
            human emotion. Every Nex appliance is made for elevating
            experiences.
          </p>
        </div>
      </div>
      {/* About dot section1 */}
      <div
        className="relative w-full h-auto md:py-16 py-12 px-5 md:px-10 flex flex-col-reverse md:flex-row justify-center items-center gap-14 md:gap-8"
        style={{
          backgroundImage: "url('/images/about/about-dot2.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "30%",
          backgroundPositionX: "right",
        }}
        data-aos="fade-up"
      >
        {/* Text Section */}
        <div className="text-gray-100 w-full md:w-2/3 md:px-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl uppercase mb-6">
            Our <span className="text-cyan-400">philosophy</span>
          </h2>
          <p className=" md:text-sm  text-xs leading-relaxed">
            Nex is built on three foundations; Idea, Innovation, and Intuition.
            We look at the electrical appliances from a fresh perspective. We
            question their impact on human lives. We seek answers to enhance
            human experience. We ideate relentlessly to deliver the best.
            Innovation is at the heart of our actions. All our machines are
            fine-tuned to solve human problems. We constantly challenge
            ourselves and look beyond the norm. Finally, we drive our efforts
            with human intuition. We identify small conveniences that make a
            difference in lives. We move beyond the excess and focus on what’s
            important to the user.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/3 px-6 flex justify-end "
          data-aos="fade-up"
        >
          <img
            src="/images/about/about1.png"
            alt="philosophy"
            className="w-full max-w-md md:max-w-xs h-auto object-contain"
          />
        </div>
      </div>
      {/* About dot section2 */}
      <div
        className="relative w-full h-auto md:px-10 flex flex-col md:flex-row justify-center items-center gap-14 md:gap-8"
        style={{
          backgroundImage: "url('/images/about/about-dot3.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "30%",
          backgroundPositionX: "left",
        }}
        data-aos="fade-up"
      >
        {/* Image Section */}
        <div
          className="w-full md:w-1/3 px-6 flex justify-end "
          data-aos="fade-up"
        >
          <img
            src="/images/about/about2.png"
            alt="philosophy"
            className="w-full max-w-md md:max-w-xs h-auto object-contain"
          />
        </div>
        {/* Text Section */}
        <div className="text-gray-100 w-full md:w-2/3 px-6 md:px-20 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl uppercase mb-6">
            Our <span className="text-cyan-400">mission</span>
          </h2>
          <p className=" text-sm leading-relaxed">
            We have set out to revolutionise home appliances. We study the
            impact of appliances on our lives, how they interact with us, and
            how they make us feel. We fine-tune the ordinary and deliver the
            extraordinary.
          </p>
        </div>
      </div>
      {/* About dot section3 */}
      <div
        className="relative w-full h-auto md:py-16 py-12 px-5 md:px-10 flex flex-col-reverse md:flex-row justify-center items-center gap-14 md:gap-8"
        style={{
          backgroundImage: "url('/images/about/about-dot2.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "30%",
          backgroundPositionX: "right",
        }}
        data-aos="fade-up"
      >
        {/* Text Section */}
        <div className="text-gray-100 w-full md:w-2/3  md:px-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl uppercase mb-6">
            Our <span className="text-cyan-400">Vision</span>
          </h2>
          <p className=" text-sm leading-relaxed">
            We are rethinking the everyday. The small things that impact our
            lives but barely make it to the forefront. We are changing the
            mundane and making it big. Because to feel the next, we need to look
            beyond the present and think a new. We are re-engineering our
            thinking and delivering experiences that inch you closer to the
            future.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/3 px-6 flex justify-end "
          data-aos="fade-up"
        >
          <img
            src="/images/about/about3.png"
            alt="philosophy"
            className="w-full max-w-md md:max-w-xs h-auto object-contain"
          />
        </div>
      </div>
      {/* Bottm Explore section */}
      <div
        className="max-w-6xl mx-auto px-5 py-8 flex flex-col justify-center items-center"
        data-aos="fade-up"
      >
        <Explore ViewAllBtnVisible={false} />
      </div>
    </div>
  );
}

export default AboutUs;
