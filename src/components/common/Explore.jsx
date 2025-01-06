import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Explore({ ViewAllBtnVisible = true }) {
  const [isMobileView, setIsMobileView] = useState(false);

  const exploreCategories = [
    {
      id: 1,
      itemName: "Nex Dryft",
      slug: "",
      images: "/images/H_dryft.png",
      hoverImageUrl: "/images/Nex_Dryft.jpg",
    },
    {
      id: 2,
      itemName: "Nex Giyde",
      slug: "",
      images: "/images/H_glyde.png",
      hoverImageUrl: "/images/Nex_Glyde.jpg",
    },
    {
      id: 3,
      itemName: "Nex TPW",
      slug: "",
      images: "/images/explore-section-TPW.png",
      hoverImageUrl: "/images/explore-section-TPW-hover.jpg",
    },
  ];

  useEffect(() => {
    const updateView = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileView(isMobile);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };
  return (
    <div className="w-full bg-[#000000] text-gray-100">
      <Container>
        <div className="max-w-5xl mx-auto px-4 py-5 flex justify-center items-center flex-col space-y-8">
          <h2 className="md:text-4xl text-2xl text-center uppercase">
            Explore <span className="text-cyan-300 ">Nex</span> Fans
          </h2>

          {isMobileView ? (
            // Mobile View: Slick Slider
            <Slider {...sliderSettings} className="w-full">
              {exploreCategories.map((item) => (
                <div key={item.id} className="px-4">
                  <div className="group relative p-8 bg-[#131313] w-full rounded-xl shadow flex flex-col justify-center items-center gap-8 overflow-hidden">
                    <p className="text-lg font-semibold z-10">
                      {item.itemName}
                    </p>
                    <img
                      src={item.images}
                      alt={item.itemName}
                      className="z-10"
                    />
                    <button className="uppercase border border-cyan-300 rounded-full text-cyan-300 h-11 w-auto px-9 py-2 z-10">
                      View This
                    </button>
                    <img
                      src={item.hoverImageUrl}
                      alt={`${item.itemName} hover`}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-[99]"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            // Desktop View: Grid Layout
            <div
              className="w-full flex gap-4 justify-center items-center flex-col md:flex-row"
              data-aos="fade-up"
            >
              {exploreCategories.map((item) => (
                <Link to={item.slug} key={item.id}>
                  <div className="group relative p-8 bg-[#131313] w-72 rounded-xl shadow flex flex-col justify-center items-center gap-8 overflow-hidden">
                    <p className="text-lg font-semibold z-10">
                      {item.itemName}
                    </p>
                    <img
                      src={item.images}
                      alt={item.itemName}
                      className="z-10"
                    />
                    <button className="uppercase border border-cyan-300 rounded-full text-cyan-300 h-11 w-auto px-9 py-2 z-10">
                      View This
                    </button>
                    <img
                      src={item.hoverImageUrl}
                      alt={`${item.itemName} hover`}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-[99]"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}

          {ViewAllBtnVisible && (
            <button className="uppercase h-14 w-auto px-14 py-2 bg-cyan-400 hover:bg-black hover:border hover:border-cyan-400 hover:text-gray-100 text-black rounded-full transition-all duration-500 ease-in-out">
              View all
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Explore;
