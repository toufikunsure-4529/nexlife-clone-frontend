import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to true if products are being fetched
    if (products.length === 0) {
      setLoading(true);
    }else{
      setLoading(false);

    }

   
  }, [products]);

  if (loading) {
    return (
      <div className="text-center w-full flex justify-center items-center flex-col min-h-[200px]">
        <div className="loader w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500 w-full flex justify-center items-center flex-col">
        <p className="text-lg font-semibold">No Products Found</p>
        <p>Try adjusting your filters or search keywords.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
