import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>

      {/* Images */}
      <div className="grid grid-cols-2 gap-4">
        {product.image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product image ${index + 1}`}
            className="w-full h-64 object-contain"
          />
        ))}
      </div>

      {/* Details */}
      <div className="mt-6">
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
      </div>

      {/* Price */}
      <div className="mt-6 text-lg font-bold">
        Price: ₹{product.price}
      </div>
    </div>
  );
};

export default ProductDetails;
