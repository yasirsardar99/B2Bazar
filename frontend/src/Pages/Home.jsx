import React from "react";
// import { useState, useEffect } from 'react';
import "./../Style/Home.css";
import Carousel from "./Carousel";
import { Navbar } from "./../../src/Routes.js";

const Home = () => {
  return (
    <>
      {/* navbar here */}
      <Navbar />

      {/* carousel here */}
      <div className="caruosel  d-flex justify-content-center">
        <Carousel />
      </div>

      {/* home working comes here */}
    </>
  );
};

export default Home;
