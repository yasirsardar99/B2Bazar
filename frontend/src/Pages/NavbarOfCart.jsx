import React from "react";
import logo from "./../data/logo/white&yellow.png";
import "./../Style/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const NavbarOfCart = () => {
  return (
    <div className="main-navbar shadow-sm sticky-top">
      <div className="top-navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 my-1 d-none d-sm-none d-md-block d-lg-block">
              <div className="brand-name d-flex">
                <img className="logo " style={{ width: 120 }} src={logo} />
              </div>
            </div>
            <div className="col-md-5 my-2">
              <form role="search">
                <div className="input-group ">
                  <input
                    type="search"
                    placeholder="Search your product"
                    className="nav-search form-control border border-white rounded-0 "
                  />
                  <button
                    className="search-btn btn bg-warning  border border-warning rounded-0 bg-warning "
                    type="submit"
                  >
                    <SearchIcon
                      className="searchIcon "
                      style={{ marginTop: 3 }}
                      fontSize="medium"
                    />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-5 my-2">
              <ul className="nav align-items-center d-flex justify-content-end">
                <li className="nav-item">
                  {/* <a className="nav-link d-flex"  href="#">
                                <i className="fa fa-shopping-cart "></i> Cart 
                                <ShoppingCartIcon className='mx-1'/>
                            </a> */}
                  <Link className="nav-link d-flex" to="/add-to-cart">
                    <Badge badgeContent={3} color="warning">
                      <ShoppingCartIcon className="mx-1 " color="white" />
                    </Badge>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex" to="#">
                    <Badge badgeContent={1} color="warning">
                      <FavoriteIcon className="mx-1 " color="white" />
                    </Badge>
                  </Link>
                </li>
                <li className="nav-item  text-white d-flex algin-items-center ">
                  <Link className="nav-link d-flex" to="/login">
                    <AccountCircleIcon className="mx-2" />
                    Login/Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarOfCart;
