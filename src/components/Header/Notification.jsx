import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPhone } from "@fortawesome/free-solid-svg-icons";

function Notification() {
  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#00B0AD] text-gray-100 w-full hidden md:flex  items-center justify-between text-sm py-2">
        <p className="mx-4">
          <span>
            <FontAwesomeIcon icon={faComments} />
          </span>
          Extended hours, extended care. From 9am to 9pm.
        </p>
        <p className="mx-4">
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          Instant support on WhatsApp is just a text away.
        </p>
        <p className="mx-4">
          <span>
            <FontAwesomeIcon icon={faComments} />
          </span>
          Get 24x7 digital assistance.
        </p>
      </div>
    </>
  );
}

export default Notification;
