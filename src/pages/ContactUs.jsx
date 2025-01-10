import React, { useEffect } from "react";
import Container from "../components/common/Container";
import ContactUsForm from "../components/common/ContactUsForm";

function ContactUs() {

  useEffect(() => {
    document.title =
      "Contact | Best Fans in India for Elevated experience Savings | Nex Fans";
  }, []);
  return (
    <div className="w-full bg-[#000000] min-h-screen flex items-center justify-center">
      <Container>
        <div className="max-w-5xl mx-auto text-gray-100 px-5 py-4 flex flex-col items-center gap-4 h-full">
          <div className="text-center">
            <h2 className="md:text-5xl text-2xl text-gray-100 text-center uppercase mb-3">
              contact <span className="text-cyan-300">us</span>
            </h2>
            <p className="font-semibold">We are always within reach</p>
          </div>
          <img
            src="/images/contact-us-banner.jpg"
            alt="New-customer-service"
            className="w-full h-auto max-w-md md:max-w-full"
          />
        </div>
        <div>
          <ContactUsForm />
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
