import React from "react";
import { RiFacebookFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./img/Logo.png" alt="logo"></img>
            </div>
            <div className="detail">
              <p>shOpo a world-class electronic shopping getway</p>
              <div className="icon">
                <li>
                  <RiFacebookFill />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <SlSocialTwitter />
                </li>
                <li>
                  <RiLinkedinBoxFill />
                </li>
              </div>
            </div>
          </div>
          <div className="account">
            <h3>My account</h3>
            <ul>
              <li>Account</li>
              <li>My orders</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
