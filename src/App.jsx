import React, { useEffect } from "react";
import Navbar from "./components/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Notification from "./components/Header/Notification";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Notification />
      <ToastContainer  />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
