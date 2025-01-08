import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DescriptionAccordian from "./DescriptionAccordian";
import SpecificationAccordian from "./SpecificationAccordian";
import ProductGrid from "./ProductGrid";
import { toast } from "react-toastify";
import Innoviation from "./Innoviation";
import FaqAccordian from "./FaqAccordian";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productSelectColor, setProductSelectColor] = useState("Classic White");
  const [selectedImage, setSelectedImage] = useState();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const { productId } = useParams();

  const productDescription = [
    "Custom-tuned high stack Brushless DC motor with 100% copper winding for exceptional torque & power, delivering higher air thrust.",
    "Superior WiFi-enabled features - Control your fan via NexLife Mobile app, Alexa, Google platforms (Voice-enabled), or Bluetooth pairing when WiFi is unavailable.",
    "WiFi features include Power On/Off, Fine Speed Control (1-9), Multiple operation modes (Breezy, Stormy, Sleep), Preset Timer setting, Scheduler, and scene automation based on environment data like Time of day, Weather, and Humidity.",
    "Airfluence ABS Blade: Aerofoil ABS Plastic blades optimized to maximize air thrust while minimizing drag and noise. Durable and lightweight material, resistant to impact and corrosion.",
    "SharqFin Low Noise Design: Bio-inspired blade construct reduces drag, improves efficiency, and minimizes noise during operation while maintaining stability and rigidity at higher RPMs.",
    "Point Anywhere Remote: Nex RF remote technology allows control without a direct line of sight. Operates through solid objects with modes for Timer, Speed, Fine mode, and Power On/Off.",
    "Super Saver: High-efficiency motor saves up to Rs. 5560 per annum, compared to non-star-rated fans (average savings for 4 fans per household).",
    "Adjustable Downrod Cover: Premium adjustable downrod cover for varying fan height to suit room or space needs.",
    "Easy Clean: Dust-resistant PU coating ensures blades can be cleaned with just one swipe.",
    "Double Ball Bearing: Ensures smooth operation and longer lifespan.",
    "Air Sculpted Design: Seamless, aerodynamic design profile for uninterrupted airflow, stable operation, and dynamic aesthetics.",
  ];

  const productSpecification = [
    {
      features: "Motor",
      specifications: "BLDC",
    },
    {
      features: "RPM",
      specifications: "340",
    },
    {
      features: "Watt",
      specifications: "41",
    },
    {
      features: "AD",
      specifications: "250",
    },
    {
      features: "Sweep",
      specifications: "1200",
    },
    {
      features: "BEE Rating",
      specifications: "5",
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => {
          setFilteredProducts(data);
          const selectedProduct = data.find(
            (prod) => prod.id === parseInt(productId)
          );
          setProduct(selectedProduct);
          setSelectedImage(selectedProduct.image)
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
          setLoading(false);
        });
    }, 10);
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-gray-100">
        <div className="flex flex-col items-center">
          {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400 border-solid"></div> */}
          <img src="/loading.svg" alt="Loading..." />
          {/* <p className="text-lg">Loading...</p> */}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#00000] text-gray-100">
        <div className="bg-[#191919]rounded-lg shadow-md p-10 max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-100">
            Product not found
          </h1>
          <p className="text-lg text-gray-100 text-center mt-4">
            Sorry, the product you're looking for is not available.
          </p>
          <div className="flex justify-center mt-6">
            <Link
              to="/ceiling-fans"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen bg-[#131313] text-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Images */}
          <div className="w-full md:w-1/2 bg-[#131313] px-6 py-6 rounded-md shadow-lg">
            {/* Main Image */}
            <div className="bg-black p-4 rounded-md mb-4">
              <img
                src={selectedImage}
                alt={`Product image ${product.name}`}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {product.thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail image ${index + 1}`}
                  className={`w-20 h-20 rounded-md cursor-pointer border-2 ${
                    selectedImage === thumbnail
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => handleImageClick(thumbnail)}
                />
              ))}
            </div>
          </div>

          {/* Below Content */}
          <div className="bg-[#000000] w-full md:w-1/2 px-3 py-5 flex flex-col ">
            <div className="flex justify-between ">
              <div className="">
                <h1 className="md:text-2xl text-lg uppercase font-medium mb-1">
                  {product.name}
                </h1>
                <h1 className="text-sm">{product.description}</h1>
                <p className="mt-6 text-lg font-bold">
                  M.R.P. <span className="text-cyan-400">₹{product.price}</span>
                </p>
                <p className="mt-6 text-lg uppercase ">
                  Color:{" "}
                  <span
                    className={
                      productSelectColor == "Classic Gray"
                        ? "text-cyan-400"
                        : "text-gray-100"
                    }
                  >
                    {" "}
                    {productSelectColor}
                  </span>
                </p>
                <div className="flex justify-center   items-center gap-10 mt-6">
                  <div className="flex justify-center items-center gap-2 ">
                    <button
                      className="h-7 w-7 rounded-full bg-white border border-gray-300"
                      onClick={() => setProductSelectColor("Classic White")}
                    ></button>
                    <button
                      className="h-7 w-7 rounded-full bg-gray-400 "
                      onClick={() => setProductSelectColor("Classic Gray")}
                    ></button>
                  </div>
                  <div className="h-10 w-[1px] bg-cyan-400"></div>
                  <div className="flex justify-center items-center gap-3 md:flex-row flex-col">
                    <p className="uppercase md:text-md text-sm">grab NOW on</p>
                    <img
                      src="/images/products/amazon_btn.png"
                      alt="amazon_btn"
                      className="h-10 w-auto"
                    />
                  </div>
                </div>

                <div className="mt-10 flex  items-center gap-4">
                  <button
                    className="border px-6 py-2 rounded border-cyan-300 hover:bg-cyan-400  transition-all duration-500 ease-in-out "
                    onClick={() =>
                      toast.info(
                        "Cart feature is under development. Stay tuned!"
                      )
                    }
                  >
                    Add to Cart
                  </button>
                  <button
                    className="border px-6 py-2 rounded bg-green-400 text-black border-green-300 hover:bg-cyan-400  transition-all duration-500 ease-in-out "
                    onClick={() =>
                      toast.info(
                        "Order feature is under development. Stay tuned!"
                      )
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="/images/products/rating.png"
                  alt="rating"
                  className="h-auto w-28 object-contain "
                />
              </div>
            </div>

            <div className="mt-5">
              <DescriptionAccordian
                label="Desciption"
                list={productDescription}
              />
            </div>
            <div className="mt-5">
              <SpecificationAccordian
                label="Specification"
                specification={productSpecification}
              />
            </div>
          </div>

          {/* {product.image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product image ${index + 1}`}
            className="w-full h-64 object-contain"
          />
        ))} */}
        </div>
      </div>

      <div>
        <Innoviation />
      </div>

      {/* Show Recent Products Item */}
      <div className="w-full text-gray-100" data-aos="fade-up">
        <div className="max-w-5xl mx-auto md:px-10 py-6"></div>
        <h2 className="md:text-4xl text-2xl text-center uppercase mb-10">
          products <span className="text-cyan-300 ">you may like</span>
        </h2>
        <div className="pb-14">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      <div>
        <FaqAccordian />
      </div>
    </>
  );
};

export default ProductDetails;
