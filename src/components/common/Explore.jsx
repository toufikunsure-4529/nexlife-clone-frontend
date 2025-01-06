import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

function Explore() {
  const exploreCatagories = [
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

  return (
    <div className="w-full bg-[#000000] text-gray-100">
      <Container>
        <div className="max-w-5xl mx-auto px-4 py-5 flex justify-center items-center flex-col space-y-8">
          <h2 className="md:text-4xl text-2xl text-center uppercase">
            Explore <span className="text-cyan-300 ">Nex</span> Fans
          </h2>
          {/* Cards */}
          <div
            className="w-full flex gap-4 justify-center items-center flex-col md:flex-row"
            data-aos="fade-up"
          >
            {exploreCatagories.map((item) => (
              <Link to={item.slug} key={item.id}>
                <div className="group relative p-8 bg-[#131313] w-72 rounded-xl shadow flex flex-col justify-center items-center  gap-8 overflow-hidden">
                  {/* Static Content */}
                  <p className="text-lg font-semibold z-10">{item.itemName}</p>
                  <img src={item.images} alt={item.itemName} className="z-10" />
                  <button className="uppercase border border-cyan-300 rounded-full text-cyan-300 h-11 w-auto px-9 py-2 z-10">
                    View This
                  </button>
                  {/* Hover Image */}
                  <img
                    src={item.hoverImageUrl}
                    alt={`${item.itemName} hover`}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-[99]"
                  />
                </div>
              </Link>
            ))}
          </div>
          <button className="uppercase h-14 w-auto px-14 py-2 bg-cyan-400 hover:bg-black hover:border hover:border-cyan-400 hover:text-gray-100 text-black rounded-full transition-all duration-500 ease-in-out">
            View all
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Explore;
