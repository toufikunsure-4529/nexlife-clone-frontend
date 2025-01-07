import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find(
          (prod) => prod.id === parseInt(productId)
        );
        setProduct(selectedProduct);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, []);

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
    <div className="max-w-4xl mx-auto p-5 text-gray-100">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-100 mb-4">{product.description}</p>

      {/* Images */}
      <div className="grid grid-cols-2 gap-4">
        {/* {product.image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product image ${index + 1}`}
            className="w-full h-64 object-contain"
          />
        ))} */}
        <img
          src={product.image}
          alt={`Product image ${product.name}`}
          className="w-full h-64 object-contain"
        />
      </div>

      {/* Details */}
      {/* <div className="mt-6">
        <h2 className="text-xl font-semibold">Specifications:</h2>
        <ul className="list-disc list-inside">
          {Object.entries(product.specification).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Features:</h2>
        <ul className="list-disc list-inside">
          {product.itemDescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div> */}

      {/* Price */}
      <div className="mt-6 text-lg font-bold">Price: ₹{product.price}</div>
    </div>
  );
};

export default ProductDetails;
