import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
      {/* Accordion Header */}
      <button
        className="w-full flex justify-between items-center bg-[#191919] p-3 rounded-md text-gray-200 hover:bg-[#262626] transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="md:text-md  font-medium">{label}</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={`transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mt-2 space-y-2">
          {items.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 text-gray-400 hover:text-gray-200 cursor-pointer"
            >
              <input
                type="checkbox"
                className="appearance-none h-5 w-5 border-2 border-gray-400 rounded-md checked:bg-[#6c63ff] checked:border-[#6c63ff] transition-all duration-300 focus:ring-2 focus:ring-[#6c63ff]"
                checked={selectedFilters.includes(item)}
                onChange={() => onChange(category, item)}
              />
              <span className="text-sm">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionMenu;
