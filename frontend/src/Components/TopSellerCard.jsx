import React from 'react'
import {Link} from 'react-router-dom'
import "./../Style/ImporterCard.css"
// import { AllProducts } from '../static/AllProducts'
import p101 from "./../data/importers/p101.jpg"
import p102 from "./../data/importers/p102.jpg"
import p103 from "./../data/importers/p103.jpg"
import p104 from "./../data/importers/p104.jpg"
import p105 from "./../data/importers/p105.jpg"
import p106 from "./../data/importers/p106.jpg"


const TopSellerCard = () => {

  // const {title, description, brand, thumbnail} = AllProducts;

  return (
    <>
      <div className="container">
        <div className="row gy-3 d-flex justify-content-center ">

          {/* card 1 */}

          <div className="importer-card mx-3 card h-100 col-md-4 col-sm-12 col-lg-2 align-items-center h-50 d-flex p-2 justify-content-center">
            <img className="card-img-top" src={p101} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">Pak Trader</h5>
              <p className="card-text text-center">
                {" "}
                we are provide you a reliable sourcing from china and indonesia
              </p>
              <Link
                to="#"
                className="btn btn-primary text-center d-flex flex-col justify-content-center "
                style={{ backgroundColor: "#002549" }}
              >
                Contact Importer
              </Link>
            </div>
          </div>

          <div className="importer-card mx-3 card h-100 col-md-4 col-sm-12 col-lg-2 align-items-center h-50 d-flex p-2 justify-content-center">
            <img className="card-img-top" src={p103} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">traders Pakistan</h5>
              <p className="card-text text-center">
                {" "}
                we are provide you a reliable sourcing from china and indonesia
              </p>
              <Link
                to="#"
                className="btn btn-primary text-center d-flex flex-col justify-content-center "
                style={{ backgroundColor: "#002549" }}
              >
                Contact Importer
              </Link>
            </div>
          </div>

          <div className="importer-card mx-3 card h-100 col-md-4 col-sm-12 col-lg-2 align-items-center h-50 d-flex p-2 justify-content-center">
            <img className="card-img-top" src={p104} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">attari importer</h5>
              <p className="card-text text-center">
                {" "}
                we are provide you a reliable sourcing from china and indonesia
              </p>
              <Link
                to="#"
                className="btn btn-primary text-center d-flex flex-col justify-content-center "
                style={{ backgroundColor: "#002549" }}
              >
                Contact Importer
              </Link>
            </div>
          </div>

          <div className="importer-card mx-3 card h-100 col-md-4 col-sm-12 col-lg-2 align-items-center h-50 d-flex p-2 justify-content-center">
            <img className="card-img-top" src={p105} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">BuyNBuy</h5>
              <p className="card-text text-center">
                {" "}
                we are provide you a reliable sourcing from china and indonesia
              </p>
              <Link
                to="#"
                className="btn btn-primary text-center d-flex flex-col justify-content-center "
                style={{ backgroundColor: "#002549" }}
              >
                Contact Importer
              </Link>
            </div>
          </div>

          <div className="importer-card mx-3 card h-100 col-md-4 col-sm-12 col-lg-2 align-items-center h-50 d-flex p-2 justify-content-center">
            <img className="card-img-top" src={p106} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-center">CPEC trades</h5>
              <p className="card-text text-center">
                {" "}
                we are provide you a reliable sourcing from china and indonesia
              </p>
              <Link
                to="#"
                className="btn btn-primary text-center d-flex flex-col justify-content-center "
                style={{ backgroundColor: "#002549" }}
              >
                Contact Importer
              </Link>
            </div>
          </div>

          

          

        </div>
      </div>
    </>
  );
}

export default TopSellerCard