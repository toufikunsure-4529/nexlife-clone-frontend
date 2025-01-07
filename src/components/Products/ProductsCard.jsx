import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="relative group bg-[#00000] hover:bg-[#191919] shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 w-72 mx-auto cursor-pointer">
        <div className="flex flex-col items-center text-center py-4 space-y-4">
          <div>
            <h5 className="text-md font-semibold text-gray-100">
              {product.name}
            </h5>
            <p className="text-gray-400 mt-2">
              M.R.P.{" "}
              <span className="text-cyan-500 font-bold">₹{product.price}</span>
            </p>
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
          <div className="flex gap-2 mt-4">
            {/* Placeholder buttons for color variants */}
            <button className="h-4 w-4 rounded-full bg-white border border-gray-300"></button>
            <button className="h-4 w-4 rounded-full bg-gray-400"></button>
          </div>
          <Link
            to={`/ceiling-fans/${product.id}`}
            className="border px-6 py-2 rounded border-cyan-300 hover:bg-cyan-400 group-hover:bg-cyan-400 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          >
            View Item
          </Link>
        </div>
    </div>
  );
};

export default ProductCard;
