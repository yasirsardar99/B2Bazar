import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <>
      <div
        className="footer container-fluid "
        style={{ backgroundColor: "#002549" }}
      >
        {/* <!-- Footer --> */}
        <footer className="text-center text-lg-start  text-white">
          {/* <!-- Section: Social media --> */}
          <section className="d-flex w-100 justify-content-between bg-warning p-4" style={{maxWidth:"100% !important"}}>
            
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold">B2Bazar</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                    style={{ width: "60px", height: "2px" }}
                  />
                  <p>
We are providing a service of B2B marketplace where sellers interact with importers or manufacturer
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                    style={{ width: "60px", height: "2px" }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      MDBootstrap
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      MDWordPress
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      BrandFlow
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Bootstrap Angular
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                    style={{ width: "60px", height: "2px" }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Become a Seller
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Career
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Help
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                    style={{ width: "60px", height: "2px" }}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> Karachi, Pakistan
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> b2bazar@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> 03131042306
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> 03142764256
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center  p-3"
            style={{ backgroundColor: "002549" }}
          >
            © 2020 Copyright:
            <a className="text-warning" href="https://mdbootstrap.com/">
              B2Bazar.com
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </>
  );
};

export default Footer;
