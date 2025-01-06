import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

function ViewOnlyCardItem() {
  const exploreCatagories = [
    {
      itemName: "Layered Intelligence",
      itemDescription: "Creating a stunning depth perception",
      images: "/images/static-card/h-scroll-img1.jpg",
      hoverImageUrl: "/images/static-card/h-scroll-img0-hover.gif",
    },
    {
      itemName: "Fluidic stance",
      itemDescription: "An insight into our new-age design philosophy",
      images: "/images/static-card/h-scroll-img2.jpg",
      hoverImageUrl: "/images/static-card/h-scroll-img1-hover.gif",
    },
    {
      itemName: "Static motion",
      itemDescription: "Designed to appear in motion even when static",
      images: "/images/static-card/h-scroll-img3.jpg",
      hoverImageUrl: "/images/static-card/h-scroll-img3-hover.gif",
    },
    {
      itemName: "Air Sculpted",
      itemDescription: "Appearance of being moulded by moving air",
      images: "/images/static-card/h-scroll-img4.jpg",
      hoverImageUrl: "/images/static-card/h-scroll-img4-hover.gif",
    },
  ];

  return (
    <div className="w-full bg-[#000000] text-gray-100">
      <Container>
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col items-center">
          {/* Cards */}
          <div
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            {exploreCatagories.map((item, index) => (
              <Link to="/" key={index}>
                <div className="group relative w-full h-80 bg-[#131313] rounded-xl shadow-lg overflow-hidden">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    style={{ backgroundImage: `url(${item.images})` }}
                  ></div>
                  {/* Hover Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    style={{ backgroundImage: `url(${item.hoverImageUrl})` }}
                  ></div>
                  {/* Text Content */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <p className="text-xl font-semibold text-cyan-400">
                      {item.itemName}
                    </p>
                    <p className="text-sm">{item.itemDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ViewOnlyCardItem;
