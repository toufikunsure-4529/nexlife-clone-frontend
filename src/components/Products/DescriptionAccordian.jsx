import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function DescriptionAccordian({ label, list }) {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef(null);

  return (
    <div
      className="shadow-sm border border-[#131313] rounded"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <button
        className={`
          flex items-center justify-between gap-4 w-full text-xl uppercase px-4 py-3 bg-[#131313]  hover:text-cyan-400 focus:outline-none ${
            isOpen ? "text-cyan-400" : "text-gray-100"
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="">{label}</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="transition-transform duration-200 transform ease-in"
        />
      </button>
      <div
        ref={contentRef}
        className={`transition-all duration-300 overflow-hidden`}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        <ul className="px-10 py-4 list-disc marker:text-cyan-500">
          {list.map((item, index) => (
            <li key={index} className="py-2 text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DescriptionAccordian;
