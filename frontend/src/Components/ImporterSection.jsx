import React from "react";
import { Link } from "react-router-dom";
import { Importers } from "./../static/Importer";
import "./../Style/Importer.css";

const ImporterSection = () => {
  return (
    <>
      <div className="cotainer mx-2 section align-items-center text-center d-flex justify-content-between align-items-center">
        <h4 className="top-category-heading mx-5">Top Importers:</h4>
        <Link to="#" className="see-all mx-5">
          See All
        </Link>
      </div>
      <hr className="mx-5" />

      <div className="container">
        <div className="row">
          {Importers.map((i) => {
            return (
              <div className="col">
                <div className="importer-card card col-sm-12 my-2 mx-4">
                  {/* <!-- Card image --> */}
                  <div className="view overlay">
                    <img
                      className="card-img-top"
                      src={i.image}
                      alt="Card image cap"
                    />
                    <a href="#!">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  {/* <!-- Card content --> */}
                  <div className="card-body">
                    {/* <!-- Title --> */}
                    <h4 className="card-title text-center">{i.title}</h4>
                    {/* <!-- Text --> */}
                    <p className="card-text ">{i.experience}</p>
                    {/* <!-- Button --> */}
                    <a
                      href="#"
                      className="card-btn btn btn-primary d-flex justify-content-center"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* card */}
    </>
  );
};

export default ImporterSection;

// <div className="card">

// {/* <!-- Card image --> */}
// <div className="view overlay">
//   <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
//     alt="Card image cap" />
//   <a href="#!">
//     <div className="mask rgba-white-slight"></div>
//   </a>
// </div>

// {/* <!-- Card content --> */}
// <div className="card-body">

//   {/* <!-- Title --> */}
//   <h4 className="card-title">Card title</h4>
//   {/* <!-- Text --> */}
//   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
//     content.</p>
//   {/* <!-- Button --> */}
//   <a href="#" className="btn btn-primary">Button</a>

// </div>

// </div>
