import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="w-full  md:py-0 py-16">
      <div
        className="max-w-full mx-auto px-5 py-20 flex flex-col md:flex-row gap-14 md:gap-2 justify-center items-center"
        style={{
          backgroundImage: "url('/images/about/about-dot1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left side  */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 px-4 text-gray-100">
          <h3 className="text-2xl mb-4">Contact Details</h3>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:care@nexlife.in" className="text-cyan-400">
              care@nexlife.in
            </a>
          </p>
          <p className="text-sm">
            Phone No:{" "}
            <a href="tel:02241930000" className="text-cyan-400">
              022-41930000
            </a>
          </p>
          <p>
            Whatsapp No{" "}
            <a href="tel:7045130000" className="text-cyan-400">
              7045130000
            </a>
          </p>

          <div className="flex flex-col gap-2 mt-10">
            <h3 className="text-xl">Follow us</h3>
            <div className="flex space-x-3 text-cyan-400">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-cyan-400 text-xl hover:text-gray-300 cursor-pointer"
                />
              </Link>
              <Link to="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-cyan-400 text-xl hover:text-gray-300 cursor-pointer"
                />
              </Link>

              <Link to="/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-cyan-400 text-xl hover:text-gray-300 cursor-pointer"
                />
              </Link>
              <Link to="/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-cyan-400 text-xl hover:text-gray-300 cursor-pointer"
                />
              </Link>
              <Link to="/">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-cyan-400 text-xl hover:text-gray-300 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl uppercase font-mono text-gray-300">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
            <div className="md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="First Name *"
                  onChange={handleInputChange}
                  className={`p-2 border bg-black text-gray-100 w-full border-opacity-40 ${
                    errors.firstName ? "border-red-400" : "border-gray-300"
                  } rounded`}
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Last Name *"
                  onChange={handleInputChange}
                  className={`p-2 border bg-black text-gray-100 w-full border-opacity-40 ${
                    errors.lastName ? "border-red-400" : "border-gray-300"
                  } rounded`}
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`p-2 border bg-black text-gray-100 w-full border-opacity-40 ${
                    errors.email ? "border-red-400" : "border-gray-300"
                  } rounded`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  placeholder="Mobile Number *"
                  onChange={handleInputChange}
                  className={`p-2 border bg-black text-gray-100 w-full border-opacity-40 ${
                    errors.mobile ? "border-red-400" : "border-gray-300"
                  } rounded`}
                />
                {errors.mobile && (
                  <p className="text-red-400 text-sm">{errors.mobile}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleInputChange}
                className={`p-2 border bg-black text-gray-100 w-full border-opacity-40 ${
                  errors.message ? "border-red-400" : "border-gray-300"
                } rounded`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="bg-cyan-400 px-14 py-3 text-white p-2 rounded-full hover:bg-cyan-500 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
