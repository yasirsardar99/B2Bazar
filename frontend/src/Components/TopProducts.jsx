import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AllProducts } from "../static/AllProducts";
import "./../Style/TopProduct.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TopProducts = () => {
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    const d = AllProducts && AllProducts.sort(AllProducts.rating);
    const firstFive = d.slice(0, 8);
    setproductData(firstFive);
  }, []);
  const [heartIcon, setheartIcon] = useState("gray");

  const toggleWishList = (value) => {
    
    heartIcon[value] == "gray" ? setheartIcon("red") : setheartIcon("gray");
  };

  const navigate = useNavigate();

  return (


    <>
      <div className="cotainer mx-2 section align-items-center text-center d-flex justify-content-between align-items-center">
        <h4 className="top-category-heading mx-5">Top Products:</h4>
        <Link to="#" className="see-all mx-5">
          See All
        </Link>
      </div>
      <hr className="mx-5" />

      <div className="container">
        <div className="row d-flex justify-content-center">
          {productData.map((products) => {
            return (
              <div
                key={products.id}
                className="product-card card bg-light border border-dark col-md-3  col-sm-12  m-3 p-2"
              >
                {/* <!-- Card image --> */}
                <div className="view overlay">
                  <img
                    className="card-img-top"
                    src={products.thumbnail}
                    alt="Card image cap"
                  />
                  <Link to="/">
                    <div className="mask rgba-white-slight"></div>
                  </Link>
                </div>

                {/* <!-- Card content --> */}
                <div className="product-card-body">
                  {/* <!-- Title --> */}
                  <div className="">
                    <h6 className="card-title text-left mx-2 my-4 ">
                      <b>
                        {products.title.length > 10
                          ? products.title.slice(0, 20) + "..."
                          : products.title}
                      </b>
                    </h6>
                  </div>
                  {/* <!-- Text --> */}
                  <div className="">
                    <p className="product-card-brand badge badge-pill badge-warning p-2 px-3 card-text text-left ">
                      {products.brand.length > 10
                        ? products.brand.split(" ")
                        : products.brand}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between m-3">
                    <div className="d-flex">
                      <div className=" ">
                        <p className=" font-weight-bold ">
                          {" "}
                          {Math.floor(
                            products.price -
                              products.price / products.discountPercentage
                          )}
                          ${" "}
                        </p>
                      </div>
                      <div className="">
                        <p
                          className="product-card-price align-content-start mx-1"
                          style={{ fontSize: "10px", color: "red" }}
                        >
                          {" "}
                          <del>{products.price}$ </del>
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <Link >
                        <FavoriteIcon 
                          style={{ color: heartIcon }}
                          onClick={()=>{{toggleWishList(products.id)}}}
                        />
                      </Link>
                    </div>
                  </div>

                 <div className="d-flex justify-content-center">
                 <button className="product-card-btn btn btn-large  col-md-8 col-sm-12">
                    Send Inquiry
                  </button>
                 </div>
                  {/* <!-- Button --> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopProducts;
