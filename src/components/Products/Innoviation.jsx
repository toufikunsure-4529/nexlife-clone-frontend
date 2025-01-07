import React from "react";

function Innoviation() {
  return (
    <div className="relative w-full text-gray-100">
      <div className="relative max-w-7xl mx-auto px-4 py-5 mt-14 flex  flex-col space-y-8">
        <div
          className="px-10 md:h-52"
          style={{
            backgroundImage: "url('/images/left_buttom_bg.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "20%",
            backgroundPositionX: "left",
          }}
        >
          <h2 className="md:text-5xl text-2xl uppercase">
            Innovation Meets <br />
            <span className="text-cyan-300 ">Intuition</span>
          </h2>
        </div>

        {/* Inoviation section1 */}
        <div
          className="relative w-full h-auto md:py-16 py-12 px-5 md:px-10 flex flex-col md:flex-row justify-center items-center gap-14 md:gap-8"
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
              src="/images/innoviation/1.gif"
              alt="SMART CONNECT"
              className="w-full max-w-md md:max-w-xs h-auto object-contain"
            />
          </div>
          {/* Text Section */}
          <div className="text-gray-100 w-full md:w-2/3 md:px-20 text-center md:text-left">
            <h2 className="text-xl md:text-3xl uppercase mb-3">
              SMART CONNECT
            </h2>
            <p className=" md:text-sm  text-xs leading-relaxed">
              Superior WiFi enabled features - Control your fan via NexLife
              Mobile app, & also through Alexa & Google platform (Voice enabled)
              devices. It can be operated via bluetooth pairing, in case WiFi
              isn’t available.
            </p>
          </div>
        </div>

        {/* Inoviation section2 */}
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
            <h2 className="text-xl md:text-3xl uppercase mb-3">
              PeakTorq™ BLDC
            </h2>
            <p className=" md:text-sm  text-xs leading-relaxed">
              Custom-tuned high stack Brushless DC motor with 100% copper
              winding that delivers exceptional torque & power for higher air
              thrust
            </p>
          </div>

          {/* Image Section */}
          <div
            className="w-full md:w-1/3 px-6 flex justify-end "
            data-aos="fade-up"
          >
            <img
              src="/images/innoviation/2.gif"
              alt="PeakTorq™ BLDC"
              className="w-full max-w-md md:max-w-xs h-auto object-contain"
            />
          </div>
        </div>

        {/* Inoviation section3 */}
        <div
          className="relative w-full h-auto md:py-16 py-12 px-5 md:px-10 flex flex-col md:flex-row justify-center items-center gap-14 md:gap-8"
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
              src="/images/innoviation/3.gif"
              alt="Airfluence™ ABS Blade"
              className="w-full max-w-md md:max-w-xs h-auto object-contain"
            />
          </div>
          {/* Text Section */}
          <div className="text-gray-100 w-full md:w-2/3 md:px-20 text-center md:text-left">
            <h2 className="text-xl md:text-3xl uppercase mb-3">
              Airfluence™ ABS Blade
            </h2>
            <p className=" md:text-sm  text-xs leading-relaxed">
              Specially designed & Aerofoil ABS Plastic blades are optimized to
              maximise air thrust while minimizing drag & noise. In addition,
              ABS plastic is a durable and lightweight material that is
              resistant to impact and corrosion
            </p>
          </div>
        </div>

        {/* Inoviation section4 */}
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
            <h2 className="text-xl md:text-3xl uppercase mb-3">
              SharqFin™ Low Noise Design
            </h2>
            <p className=" md:text-sm  text-xs leading-relaxed">
              Bio-Inspired blade construct to reduce drag, improve efficiency
              and minimize noise during operation. This allows the blade to move
              more air at higher RPMs maintaining stability & rigidity. -
              Bio-Inspired blade construct to reduce drag, improve efficiency
              and minimize noise during operation. This allows the blade to move
              more air at higher RPMs maintaining stability & rigidity
            </p>
          </div>

          {/* Image Section */}
          <div
            className="w-full md:w-1/3 px-6 flex justify-end "
            data-aos="fade-up"
          >
            <img
              src="/images/innoviation/4.gif"
              alt="SharqFin™ Low Noise Design"
              className="w-full max-w-md md:max-w-xs h-auto object-contain"
            />
          </div>
        </div>

        {/* Inoviation section5 */}
        <div
          className="relative w-full h-auto md:py-16 py-12 px-5 md:px-10 flex flex-col md:flex-row justify-center items-center gap-14 md:gap-8"
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
              src="/images/innoviation/5.gif"
              alt="Adjustable DownRod Cover"
              className="w-full max-w-md md:max-w-xs h-auto object-contain"
            />
          </div>
          {/* Text Section */}
          <div className="text-gray-100 w-full md:w-2/3 md:px-20 text-center md:text-left">
            <h2 className="text-xl md:text-3xl uppercase mb-3">
              Adjustable DownRod Cover
            </h2>
            <p className=" md:text-sm  text-xs leading-relaxed">
              Specially designed premium down rod cover with height adjustment
              benefit, that allows the fan to be hung at different heights
              depending on the specific needs of the room or the space where it
              is being installed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innoviation;
