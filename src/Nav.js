import React, { useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Nav.css";
const Nav = ({ searchBtn }) => {
  const [search, setSearch] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="anc">
        <div className="icon">
          <FaTruckMoving />
        </div>
        <p>Free shipping on the orders above Rs500</p>
      </div>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src="./img/Logo.png" height="50px" alt="shOpo"></img>
          </div>
          <div className="search-box">
            <input
              type="text"
              value={search}
              placeholder="Enter the product name"
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button onClick={() => searchBtn(search)}>search</button>
          </div>
          <div className="icon">
            {isAuthenticated && (
              <div className="account">
                <div className="user-icon">
                  <CiUser />
                </div>
                <p>Hello, {user.name}</p>
              </div>
            )}

            <div className="second_icon">
              <Link to="/" className="link">
                <CiHeart />
              </Link>
              <Link to="/cart" className="link">
                <IoBagCheckOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="navigate">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <CiLogout />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
