import React, { useState } from "react";
import AccordionMenu from "./AccordionMenu";

const FilterItem = ({ onApplyFilters, onClearFilters }) => {
  const [filterText, setFilterText] = useState("");
  const [filters, setFilters] = useState({});

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

  const applyFilters = () => {
    onApplyFilters(filterText, filters);
  };

  const clearFilters = () => {
    setFilterText("");
    setFilters({});
    onClearFilters();
  };

  return (
    <div className="w-full md:w-1/4 p-4 bg-[#00000] rounded shadow">
      <p className="text-xl text-gray-400 uppercase font-semibold mb-3">
        Filter By
      </p>

      <input
        type="text"
        placeholder="Search by product name"
        className="w-full p-2 mb-4 rounded bg-[#191919] text-gray-200"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
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
        items={["Remote Included", "Works with standard Regulator"]}
        selectedFilters={filters.remote || []}
        onChange={handleFilterChange}
      />
      <AccordionMenu
        label="BEE Star Rating"
        category="starRating"
        items={["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"]}
        selectedFilters={filters.starRating || []}
        onChange={handleFilterChange}
      />
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          className="bg-cyan-500 text-black px-4 py-2 rounded-full text-sm"
          onClick={applyFilters}
        >
          Apply
        </button>
        <button
          className="bg-cyan-500 text-black px-4 py-2 rounded-full text-sm"
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterItem;
