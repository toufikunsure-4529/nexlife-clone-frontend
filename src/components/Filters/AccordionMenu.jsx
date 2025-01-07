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
      <button
        className="w-full  flex justify-between items-center bg-[#191919] p-2 rounded text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="transition-transform duration-200 transform ease-in"
        />
      </button>
      {isOpen && (
        <div className="mt-2">
          {items.map((item, index) => (
            <label key={index} className="block  text-gray-400">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedFilters.includes(item)}
                onChange={() => onChange(category, item)}
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionMenu;
