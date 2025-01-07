import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SpecificationAccordian({ label, specification }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className="shadow-sm rounded overflow-hidden"
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
        className={`transition-all duration-300 overflow-hidden border border-[#131313] border-t-0 rounded`}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        <div className="px-10 py-4 grid gap-4 md:grid-cols-3 grid-cols-2">
          {specification.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 bg-[#131313]  p-4 rounded-lg"
            >
              <p className="text-lg font-semibold text-white">
                {item.features}
              </p>
              <p className="text-sm text-cyan-300">{item.specifications}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecificationAccordian;
