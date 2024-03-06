import React from "react";
// import { useState, useEffect } from 'react';
import "./../Style/Home.css";
import Carousel from "./Carousel";
import { Navbar } from "./../../src/Routes.js";
import "./../Style/Home.css";
import { TopCategory } from "./../static/TopCategory.js";
import { HomeCategory } from "./../Routes.js";

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

      <div className="mx-2 section d-flex justify-content-between align-items-center">
        <h4 className="top-category-heading mx-5">Top Importers:</h4>
        <a href="#" className="see-all mx-5">
          See All
        </a>
      </div>
      <hr className="mx-5" />
    </>
  );
};

export default Home;
// export default Home
