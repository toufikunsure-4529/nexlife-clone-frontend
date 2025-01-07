import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faTimes,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);

  useEffect(() => {
    const scrollWindow = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);
  return (
    <nav
      className={`w-full shadow-md md:bg-[#000000] bg-[#131313] transition-transform duration-700 ease-in-out text-white
         px-2 py-1 flex items-center md:gap-1 gap-3  ${
           isSticky ? "sticky-nav slide-down" : "static top-0 left-0 z-[99]" //absolute top-0 left-0 z-[99]
         }`}
    >
      {/*  Left Section */}
      <div className=" flex justify-center items-center gap-2">
        <div className="text-center">
          <img
            src="/images/navbar-logo-left.svg"
            alt="navbar-logo-left"
            className="md:h-8 h-14 w-auto hidden md:flex"
          />
          <img
            src="/images/navbar-logo-left-sm.svg"
            alt="navbar-logo-left-sm"
            className="md:h-8 h-14 w-auto flex md:hidden"
          />{" "}
        </div>

        {/* Logo Section */}
        <div className="text-center">
          <Link to="/">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="h-18 py-2 w-auto "
            />
          </Link>
        </div>

        {/* Left Section */}
        <div className="flex items-center">
          <img
            src="/images/navbar-logo-right.svg"
            alt="navbar-logo-right"
            className="md:h-8 h-14 w-auto hidden md:flex"
          />
          <img
            src="/images/navbar-logo-right-sm.svg"
            alt="navbar-logo-right-sm"
            className="md:h-8 h-14 w-auto flex md:hidden"
          />
        </div>
      </div>

      {/* Right Section For Mobile screen */}
      <div className="flex items-center space-x-4 md:hidden">
        {/* Mobile Search Icon */}
        <button
          className="text-white hover:text-cyan-400 text-lg"
          onClick={() => setSearchMenuOpen(!searchMenuOpen)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {/* Mobile Menu Icon */}
        <button
          className="text-white hover:text-cyan-400 text-lg h-8 w-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* <Bars3BottomRightIcon icon={menuOpen ? faTimes : faBars} /> */}
          <Bars3BottomRightIcon />
        </button>
      </div>

      {/* Desktop RIGHT SIDE Navigation Links */}
      <div className="hidden md:flex items-center space-x-14 md:px-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-white hover:underline"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/ceiling-fans"
          className={({ isActive }) =>
            isActive ? "text-cyan-400" : "text-white hover:underline"
          }
        >
          FANS
        </NavLink>
        <button
          className="text-white hover:text-cyan-400 text-lg"
          onClick={() => setSearchMenuOpen(!searchMenuOpen)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button
          className="text-white hover:text-cyan-400 text-lg h-8 w-8"
          onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
        >
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <Bars3BottomRightIcon />
        </button>
      </div>

      {/* Search Menu */}
      {searchMenuOpen && (
        <div
          className="fixed top-0 left-0 z-[999] w-full h-screen px-4 flex flex-col space-y-4 py-4 navOpenMenuAnimation "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          {" "}
          <div className="flex justify-end items-center">
            <button
              className="text-white hover:text-cyan-400 text-lg  text-center h-10 w-10 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-full border "
              onClick={() => setSearchMenuOpen(!searchMenuOpen)}
            >
              <FontAwesomeIcon icon={searchMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          {/* Search Box with Inline Layout */}
          <div className="relative flex items-center justify-center md:px-44">
            <input
              type="text"
              name="search"
              id="searchItem"
              placeholder="What are you looking for?"
              className="flex-grow h-12 px-4 py-8 text-lg text-gray-200 bg-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="bg-[#333333] text-gray-200 h-1/2 w-2/3 mx-auto rounded text-center py-7 hidden">
            <p>Search Result</p>
          </div>
        </div>
      )}

      {/* Desktop Menu Links */}
      {desktopMenuOpen && (
        <div
          className="fixed top-0 left-0 z-[999] w-full h-screen px-4 flex flex-col space-y-4 py-4 navOpenMenuAnimation "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          <div className="flex justify-end items-center">
            <button
              className="text-white hover:text-cyan-400 text-lg  text-center h-10 w-10 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-full border "
              onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            >
              <FontAwesomeIcon icon={desktopMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          <Footer footerBg="transparent" isLogoVisible={false} />
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 z-[999] w-full h-screen px-4 md:hidden flex flex-col space-y-4 py-4 bg-black bg-opacity-90 navOpenMenuAnimation">
          <div className="flex justify-end items-center">
            <button
              className="text-white hover:text-cyan-400 text-lg h-10 w-10 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-full border"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>

          {/* Main Menu */}
          <NavLink
            to="/"
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </NavLink>

          <AccordionMenu
            label="FANS"
            items={[
              { label: "Celling", link: "/ceiling-fans" },
              { label: "TPW", link: "" },
              { label: "Download Catalog", link: "" },
              { label: "IOT Manual", link: "" },
            ]}
          />

          <AccordionMenu
            label="DISCOVER"
            items={[{ label: "About Us", link: "/about-us" }]}
          />

          <AccordionMenu label="MEDIA" items={[{ label: "Blogs", link: "" }]} />

          <AccordionMenu
            label="SUPPORT"
            items={[
              { label: "Installation Guide", link: "" },
              { label: "Warranty", link: "" },
              { label: "Contact Us", link: "/contact-us" },
              { label: "Register Complaint", link: "" },
              { label: "Dealer Locator", link: "" },
              { label: "FAQs", link: "" },
              { label: "Terms and Conditions", link: "" },
              { label: "Privacy Policy", link: "" },
            ]}
          />

          <NavLink
            to=""
            className="text-white"
            onClick={() => setMenuOpen(false)}
          >
            CORPORATE ENQUIRY
          </NavLink>
        </div>
      )}
    </nav>
  );
};

{
  /* Accordion Menu Component */
}
const AccordionMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        className="text-white text-lg w-full flex justify-between items-center py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      {isOpen && (
        <div className="pl-4">
          {items.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="text-gray-400 hover:underline py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
