import React from "react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer({ footerBg, isLogoVisible = true }) {
  const footerMenu = [
    {
      title: "Home",
      link: [{ linkTitle: "", path: "#" }],
    },
    {
      title: "Fans",
      link: [
        { linkTitle: "Ceiling", path: "#" },
        { linkTitle: "TPW", path: "#" },
        { linkTitle: "Download Catalogue", path: "#" },
        { linkTitle: "IOT Manual", path: "#" },
      ],
    },
    {
      title: "Discover",
      link: [{ linkTitle: "About Us", path: "/about-us" }],
    },
    {
      title: "Media",
      link: [{ linkTitle: "Blogs", path: "#" }],
    },
    {
      title: "Fans",
      link: [
        { linkTitle: "Installation Guide", path: "#" },

        { linkTitle: "Warranty", path: "#" },
        { linkTitle: "Contact Us", path: "/contact-us" },
        { linkTitle: "Register Complaint", path: "#" },
        { linkTitle: "Dealer Locator", path: "#" },
        { linkTitle: "FAQs", path: "#" },
        { linkTitle: "Terms and Conditions", path: "#" },
        { linkTitle: "Privacy Policy", path: "#" },
      ],
    },

    {
      title: "Corporate Enquiry",
      link: [{ linkTitle: "", path: "#" }],
    },
  ];

  return (
    <div
      className={`w-full pt-5 ${
        footerBg ? `bg-[${footerBg}]` : "bg-[#131313]"
      } `}
    >
      <div
        className={` ${
          isLogoVisible ? "flex" : "hidden"
        } justify-center items-center gap-2 px-4`}
      >
        <div className="text-center">
          <img
            src="/images/footer-logo-left.svg"
            alt="footer-logo-left"
            className="h-14 w-auto hidden md:flex"
          />
          <img
            src="/images/navbar-logo-left-sm.svg"
            alt="navbar-logo-left-sm"
            className="md:h-8 h-14 w-auto flex md:hidden"
          />{" "}
        </div>

        {/* Logo Section */}
        <div className="text-center">
          <img
            src="/images/footer-logo.png"
            alt="Logo"
            className="h-18 py-3 w-auto "
          />
        </div>

        {/* Left Section */}
        <div className="flex items-center">
          <img
            src="/images/footer-logo-right.svg"
            alt="footer-logo-right"
            className="h-14 w-auto hidden md:flex"
          />
          <img
            src="/images/navbar-logo-right-sm.svg"
            alt="navbar-logo-right-sm"
            className="md:h-8 h-14 w-auto flex md:hidden"
          />
        </div>
      </div>
      <div className={`px-6 ${isLogoVisible ? "visible" : "hidden"}`}>
        <hr className="mt-6 opacity-30" />
      </div>
      <Container>
        <div className="md:px-20">
          {/* Footer Menu */}
          <div className="grid md:grid-cols-6 grid-cols-1 mt-10 justify-center gap-6 md:gap-0">
            {footerMenu.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-3 text-gray-100">
                  {section.title}
                </h3>
                <ul className="">
                  {section.link.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-1 cursor-pointer">
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 ease-in-out"
                      >
                        {link.linkTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div
        className={`mt-6 bg-black py-5 px-20 text-center md:text-left ${
          isLogoVisible ? "flex" : "hidden"
        } justify-between items-center flex-col md:flex-row gap-5`}
      >
        <div className="text-gray-500">
          <p className="text-center md:text-left">
            Copyright © 2024 Nexlife All Rights Reserved. Bajaj Electricals Ltd.
          </p>
        </div>
        <div className="flex space-x-4 text-gray-500">
          <Link to="">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-gray-500 text-xl hover:text-gray-300 cursor-pointer"
            />
          </Link>
          <Link to="">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-500 text-xl hover:text-gray-300 cursor-pointer"
            />
          </Link>

          <Link to="">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-500 text-xl hover:text-gray-300 cursor-pointer"
            />
          </Link>
          <Link to="">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-500 text-xl hover:text-gray-300 cursor-pointer"
            />
          </Link>
          <Link to="">
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-gray-500 text-xl hover:text-gray-300 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
