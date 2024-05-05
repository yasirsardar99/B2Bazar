import React from "react";
// import { useState, useEffect } from 'react';
import "./../Style/Home.css";
// import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { Navbar } from "./../../src/Routes.js";
import "./../Style/Home.css";
import { TopCategory } from "./../static/TopCategory.js";
// import {brandingData} from "./../static/Branding";
import BrandingSection from "../components/BrandingSection.jsx";

import { HomeCategory } from "./../Routes.js";
import ImporterSection from "../components/ImporterSection.jsx";
import TopProducts from "../components/TopProducts.jsx";
import Footer from "../components/Footer.jsx";

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
          <BrandingSection/>
 
           
            

      {/* Top categories working comes here */}
      <div className="mx-2 section d-flex justify-content-between align-items-center">
        <h4 className="top-category-heading mx-5">Top Categories:</h4>
        <a href="#" className="see-all mx-5">
          See All
        </a>
      </div>

      <hr className="mx-5" />

      {/* product card */}

      <div className="contianer justify-content-center">
        <div className="row mx-2 align-items-center">
          {TopCategory.map((product) => {
            // console.log(product);
            return <HomeCategory data={product} />;
          })}
        </div>
      </div>

      {/* top importers card */}

      <ImporterSection/>

      <TopProducts/>
      <Footer/>
    </>
  );
};

export default Home;
// export default Home
