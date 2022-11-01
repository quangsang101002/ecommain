import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBattleNet } from "react-icons/fa";

import "./filter.css";

function Navbar() {
  const state = useSelector((stateeees) => stateeees.handleCart);
  console.log("state", state.length);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light py-3 bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            <FaBattleNet className="navbar-icon" />
            SUNGROUP
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <button className="btn">
                <Link to="/login" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"> Login</i>
                </Link>
                <Link to="/register" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"> Register</i>
                </Link>
                <Link to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1">
                    {" "}
                    Cart({state.length})
                  </i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
