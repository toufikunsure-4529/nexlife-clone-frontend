import React, { useState, useEffect } from "react";
import ProductsCard from "../components/Categories/ProductsCard";

function ProductCategories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="w-full h-auto text-gray-100">
      <img src="/images/ceiling.jpg" alt="ceiling" />
      <div className="max-w-full mx-auto px-5 py-5">
        <ProductsCard  />
      </div>
    </div>
  );
}

export default ProductCategories;
