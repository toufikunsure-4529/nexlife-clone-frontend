import React, { useEffect, useState } from "react";
import FilterItem from "../components/Filters/FIlterItem";
import ProductGrid from "../components/Products/ProductGrid";

const ProductCategories = () => {
  const [initialProducts, setInitialProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products on mount
  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        return response.json();
      })
      .then((data) => {
        setInitialProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) =>
        alert("Error fetching product details: " + error.message)
      );
  }, []);

  const handleApplyFilters = (text, filters) => {
    const filtered = initialProducts.filter((product) => {
      const matchesText = product.name
        .toLowerCase()
        .includes(text.toLowerCase());
      const matchesFilters = Object.entries(filters).every(([key, values]) =>
        values.includes(product[key])
      );
      return matchesText && matchesFilters;
    });
    setFilteredProducts(filtered);
  };

  const handleClearFilters = () => {
    setFilteredProducts(initialProducts);
  };

  return (
    <>
      <div className="w-full h-auto text-gray-100">
        <img src="/images/ceiling.jpg" alt="ceiling" />
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <FilterItem
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
