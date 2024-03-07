import React from "react";
import { NavbarOfCart } from "./../Routes.js";
import iphone from "./../data/carousel/iphone.jpg";
import { Typography } from "@mui/material";

function ProductPage() {
  return (
    <section>
      <NavbarOfCart />

      <Typography variant="h3">Samsung Galaxy A25</Typography>
      <img className="iphone" src={iphone} alt="iPhone Pro Max" />
      <Typography variant="h6">Brand: IPHONE</Typography>
      <p>Rating: ⭐⭐⭐</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </p>

      <Typography variant="h3">Rs. 1000</Typography>

      <button
        className="btn btn-warning btn-lg btn-block"
        type="submit"
        href="#"
      >
        Contact Supplier
      </button>

      <button
        className="btn btn btn-warning btn-lg btn-block"
        type="submit"
        href="#"
      >
        Add to Cart
      </button>

      <section>
        <h2>Product Specifications</h2>
        <p>Width: 3 inches</p>
        <p>Height: 1.75 inches</p>
        <p>Color: Gray</p>
        <p>
          <a href="#">Read More...</a>
        </p>
      </section>

      <section>
        <Typography variant="h5">More Items for You</Typography>
        <Typography variant="h5">Ratings:</Typography>
      </section>
    </section>
  );
}

export default ProductPage;
