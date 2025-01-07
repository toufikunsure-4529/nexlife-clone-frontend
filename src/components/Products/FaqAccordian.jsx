import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FaqAccordian() {
  const faqQustionAns = [
    {
      id: 1,
      question: "How do I pair my Nex app on Mobile with my Nex IoT fan?",
      answer:
        "Press the buttons ‘Speed 5’ > ‘Speed 4’ > ‘Speed 5’ within 10 seconds on your remote. The long ‘beep’ sound indicates that you can now pair the fan with your phone. (If not, switch the fan OFF and repeat this process). Connect your phone to your home’s Wi-Fi, and turn on the Bluetooth. Open the Nex Mobile App. (For android users, make sure the app has permission to scan nearby devices. This can be enabled by ‘long pressing’ the app icon on the home screen). Go to ‘Add Device’. Your device can then be manually or automatically added via the ‘auto scan’ option. Once the device is detected, click the appropriate name to pair the devices. Enter your home’s Wi-Fi credentials in the NexLife app.",
    },
    {
      id: 2,
      question:
        "Can I connect my smart fan to multiple smart assistants at the same time?",
      answer:
        "Yes, you can connect and control your Nex IoT fan through both Alexa and Google Assistant",
    },
    {
      id: 3,
      question:
        "What additional features do I get when operating my IoT fan through the Nex app?",
      answer:
        "a. You get the freedom of precisely controlling the fan speed from Level 1 to 9. b. You can choose to operate the fan in multiple modes eg: Breezy mode, Stormy mode and Sleep mode. c. You can assign an operation schedule using the Scheduler function. d. You can also set a timer to switch the fan on or off based on your preferences.",
    },
    {
      id: 4,
      question:
        "Can I integrate IoT ceiling fans with other smart home devices or ecosystems?",
      answer:
        "Yes, you can connect the fans with other smart home devices. Creating routines, for example, to time the fan to turn on once the AC switches off is also an option.",
    },
    {
      id: 5,
      question:
        "Are there energy-saving features in IoT ceiling fans, such as speed control based on outdoor conditions?",
      answer:
        "Yes, our Nex IoT fans come with a “Tap to Run” option to automatically change your ceiling fan speed based on outdoor conditions like the weather, temperature, time of day, humidity, wind speed, etc.",
    },
    {
      id: 6,
      question:
        "Can I control multiple IoT ceiling fans from a single app or hub?",
      answer:
        "Yes, all your Nex IoT ceiling fans can be controlled at the same time with a single touch of a button via the Smart App, by pairing all your Nex devices to it.",
    },
    {
      id: 7,
      question:
        "What happens if I lose my internet connection? Can I still control the fan?",
      answer:
        "Yes, our Nex IoT fans come equipped with both Bluetooth and WiFi connectivity. They only require internet connection during the first pairing stage of the installation process.",
    },
    {
      id: 8,
      question: "How do I pair my Nex Smart remote with my Nex IoT fan?",
      answer:
        "Switch the fan on first. Within 10 seconds of doing so, press the Power Button on your remote followed by ‘Speed 1’. Hearing the double beep sound, confirms that the fan has successfully paired with the remote. (If not, turn OFF the fan and repeat the steps above).",
    },
  ];

  const [isFaqOpen, setIsFaqOpen] = useState(null);

  const faqToggle = (id) => {
    setIsFaqOpen(isFaqOpen === id ? null : id);
  };

  return (
    <div
      className="relative w-full h-auto"
      style={{
        backgroundImage: "url('/images/innoviation/doubt_bg.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-10 text-gray-100">
        <h2 className="md:text-4xl text-2xl text-center uppercase font-bold mb-8">
          Still have <span className="text-cyan-300">doubts?</span>
        </h2>
        {faqQustionAns.map((data) => (
          <div key={data.id} className="mt-6">
            <div
              className="w-full bg-[#000000] h-auto shadow-md flex items-center px-6 py-4 text-gray-100 cursor-pointer justify-between border border-[#131313] rounded-full transition-all duration-200"
              onClick={() => faqToggle(data.id)}
            >
              <p className="nd:text-lg text-sm font-medium">{data.question}</p>
              <FontAwesomeIcon
                icon={isFaqOpen === data.id ? faChevronUp : faChevronDown}
                className={`transition-transform duration-300 transform ${
                  isFaqOpen === data.id ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isFaqOpen === data.id ? "max-h-screen py-4 px-6" : "max-h-0"
              }`}
              style={{
                backgroundColor:
                  isFaqOpen === data.id ? "rgba(0, 0, 0, 0.85)" : "transparent",
              }}
            >
              <p className="text-gray-300 text-sm leading-6">{data.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqAccordian;
