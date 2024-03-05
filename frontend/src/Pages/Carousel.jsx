import React from 'react'
import Slider from "react-slick";
import './../Style/Carousel.css';
import img1 from "./../data/carousel/1.jpg"
import img2 from "./../data/carousel/2.jpg"
import img3 from "./../data/carousel/3.jpg"
import img4 from "./../data/carousel/4.png"

const Carousel = () => {
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };

    return (
      <section className="homeSlider">
        <div className="container">
          <Slider {...settings}>
         
            <div
              className="img-slide d-flex justify-content-center img-fluid"
              alt="Responsive image"
            >
              <img className="" src={img1} />
            </div>
         

            <div
              className="img-slide d-flex justify-content-center img-fluid"
              alt="Responsive image"
            >
              <img className="" src={img2} />
            </div>
         

            <div
              className="img-slide d-flex justify-content-center img-fluid"
              alt="Responsive image"
            >
              <img className="" src={img3} />
            </div>
         

            <div
              className="img-slide d-flex justify-content-center img-fluid"
              alt="Responsive image"
            >
              <img className="" src={img4} />
            </div>
         
            <div
              className="img-slide d-flex justify-content-center img-fluid "
              alt="Responsive image"
            >
              <img className="" src={img1} />
            </div>
            
          </Slider>
        </div>
      </section>
    );
}

export default Carousel