// Loader.js
import React from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";

const Loader = () => (
  <div className="loader-wrapper">
    <div className="loader"></div>
    <div className="loader-section section-left"></div>
    <div className="loader-section section-right"></div>
  </div>
);

export default Loader;
