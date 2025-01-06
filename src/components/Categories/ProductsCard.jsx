import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    name: "Nex Dryft A95 BLDC IoT Classic White",
    price: 14990,
    airDelivery: "220 - 229 CMM",
    sweep: "1200 mm (48 inch)",
    speed: "High Speed (>370 RPM)",
    remote: "Remote Include",
    starRating: 9,
    image: "https://nexlife.in/ProductImgs/20/listing/1.png",
  },
  {
    id: 2,
    name: "Nex Aero 900 Smart Ceiling Fan",
    price: 20000,
    airDelivery: "230 - 239 CMM",
    sweep: "1200 mm (48 inch)",
    speed: "Comfort Speed (<370 RPM)",
    remote: "Works with standard Regulator",
    starRating: 5,
    image: "https://nexlife.in/ProductImgs/19/listing/1.png",
  },
  {
    id: 3,
    name: "Nex Stellar A85 LED Light Fan",
    price: 10990,
    airDelivery: "240 - 249 CMM",
    sweep: "1200 mm (48 inch)",
    speed: "High Speed (>370 RPM)",
    remote: "Remote Include",
    starRating: 3,
    image: "https://nexlife.in/ProductImgs/18/listing/1.png",
  },
  {
    id: 4,
    name: "Nex Stellar A85 LED Light Fan",
    price: 10990,
    airDelivery: "240 - 249 CMM",
    sweep: "1200 mm (48 inch)",
    speed: "High Speed (>370 RPM)",
    remote: "Remote Include",
    starRating: 5,
    image: "https://nexlife.in/ProductImgs/18/listing/1.png",
  },
  {
    id: 5,
    name: "Nex Stellar A85 LED Light Fan",
    price: 10990,
    airDelivery: "240 - 249 CMM",
    sweep: "1200 mm (48 inch)",
    speed: "High Speed (>370 RPM)",
    remote: "Remote Include",
    starRating: 4,
    image: "https://nexlife.in/ProductImgs/18/listing/1.png",
  },
];

function ProductsCard() {
  const [filterText, setFilterText] = useState(""); // For filtering by name
  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Update filters
  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[category]?.includes(value)) {
        newFilters[category] = newFilters[category].filter(
          (item) => item !== value
        );
        if (newFilters[category].length === 0) delete newFilters[category];
      } else {
        newFilters[category] = [...(newFilters[category] || []), value];
      }
      return newFilters;
    });
  };

  // Apply filter logic
  const applyFilters = () => {
    const filtered = products.filter((product) => {
      const matchesText = product.name
        .toLowerCase()
        .includes(filterText.toLowerCase());
      const matchesFilters = Object.entries(filters).every(
        ([category, values]) => values.includes(product[category])
      );
      return matchesText && matchesFilters;
    });
    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setFilterText("");
    setFilters({});
    setFilteredProducts(products);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-5 py-14 flex justify-center md:flex-row flex-col gap-10 bg-[#00000] text-gray-100">
        {/* Filter Section */}
        <div className="w-full h-auto md:w-1/4 mb-8 flex flex-col gap-4 bg-[#00000] p-4 rounded-lg shadow-md">
          <p className="text-xl text-gray-500 uppercase">Filter By</p>
          <input
            type="text"
            placeholder="Search by product name"
            className="border rounded px-4 py-2 bg-[#191919]"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />

          {/* Accordion Menus */}
          <AccordionMenu
            label="Air Delivery (CMM)"
            category="airDelivery"
            items={["220 - 229 CMM", "230 - 239 CMM", "240 - 249 CMM"]}
            selectedFilters={filters.airDelivery || []}
            onChange={handleFilterChange}
          />
          <AccordionMenu
            label="Sweep"
            category="sweep"
            items={["1200 mm (48 inch)"]}
            selectedFilters={filters.sweep || []}
            onChange={handleFilterChange}
          />
          <AccordionMenu
            label="Speed"
            category="speed"
            items={["High Speed (>370 RPM)", "Comfort Speed (<370 RPM)"]}
            selectedFilters={filters.speed || []}
            onChange={handleFilterChange}
          />
          <AccordionMenu
            label="Remote Compatibility"
            category="remote"
            items={["Remote Include", "Works with standard Regulator"]}
            selectedFilters={filters.remote || []}
            onChange={handleFilterChange}
          />
          <AccordionMenu
            label="BEE Star Rating"
            category="starRating"
            items={["5 Star", "4 Star", "3 Star"]}
            selectedFilters={filters.starRating || []}
            onChange={handleFilterChange}
          />
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={applyFilters}
              className="bg-cyan-500 text-black px-4 py-2 rounded-full text-sm"
            >
              Apply Filter
            </button>
            <button
              onClick={clearFilters}
              className="bg-cyan-500 text-black px-4 py-2 rounded-full text-sm"
            >
              Clear Filter
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group bg-[#00000] hover:bg-[#191919] shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center py-4 space-y-4">
                <div>
                  <h5 className="text-lg font-semibold text-gray-100">
                    {product.name}
                  </h5>
                  <p className="text-gray-400 mt-2">
                    M.R.P.{" "}
                    <span className="text-cyan-500 font-bold">
                      ₹{product.price}
                    </span>
                  </p>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
                <div className="flex gap-4 mt-4">
                  <button className="h-6 w-6 rounded-full bg-white border border-gray-300"></button>
                  <button className="h-6 w-6 rounded-full bg-gray-400"></button>
                </div>
                <button className="border px-10 py-2 rounded border-cyan-300 hover:bg-cyan-400 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  View Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const AccordionMenu = ({
  label,
  category,
  items,
  selectedFilters,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="text-white text-lg w-full flex justify-between items-center bg-[#00000]hover:bg-gray-700 rounded-lg px-4 transition-all duration-300"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="transition-transform duration-200 transform ease-in"
        />
      </button>
      <div
        className={`pl-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {items.map((item, index) => (
          <p key={index} className="text-gray-400 py-1 flex items-center">
            <input
              type="checkbox"
              className="mr-2 w-5 h-5 rounded border-gray-500 focus:ring-2 focus:ring-cyan-500 checked:bg-cyan-500 cursor-pointer transition-colors duration-300"
              checked={selectedFilters.includes(item)}
              onChange={() => onChange(category, item)}
            />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ProductsCard;
