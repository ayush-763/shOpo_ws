import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { MdCurrencyExchange } from "react-icons/md";
import { CiPercent } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import HomeProduct from "./Homeproduct";
import "./Home.css";
const Home = ({ detail, view, close, setClose, addToCart }) => {
  const [homeProduct] = useState(HomeProduct);
  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closeBtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="product-box">
                  <div className="img-box">
                    <img
                      src={curElm.productImg}
                      alt={curElm.productName}
                      height="300px"
                    ></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.productCat}</h4>
                    <h2>{curElm.productName}</h2>
                    <p>
                      A screen everyone will love: Whether your family is
                      streaming or video chatting
                    </p>
                    <h3>Rs. {curElm.productPrice}</h3>
                    <button>Add to Cart</button>
                  </div>
                </div>
              );
            })}
            <div className="productBox"></div>
          </div>
        </div>
      ) : null}
      <div className="hero">
        <div className="container">
          <div className="detail">
            <h2>The Best Notebook Collection 2023</h2>
            <Link to="/product" className="link">
              Shop Now
              <FaArrowRight />
            </Link>
          </div>
          <div className="img-box">
            <img src="./img/tab1.png" alt="tab" />
          </div>
        </div>
      </div>
      <div className="headings">
        <h1>Products</h1>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="./img/MBL (1).png" alt="mobile" width="120px" />
            </div>
            <div className="detail">
              <p>23 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/smartwatch.png" alt="smartwatch" width="120px" />
            </div>
            <div className="detail">
              <p>57 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/pc.png" alt="pc" width="120px" />
            </div>
            <div className="detail">
              <p>45 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/headphone.png" alt="headphone" width="120px" />
            </div>
            <div className="detail">
              <p>35 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="headings">
        <h1>Features</h1>
      </div>
      <div className="features">
        <div className="container">
          <div className="box">
            <div className="icon">
              <p>
                <FiTruck />
              </p>
            </div>
            <div className="detail">
              <h3>FREE DELIVERY</h3>
              <p>Orders above Rs 500</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <p>
                <MdCurrencyExchange />
              </p>
            </div>
            <div className="detail">
              <h3>RETURN AND REFUND</h3>
              <p>Moneyback Guarantee</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <p>
                <CiPercent />
              </p>
            </div>
            <div className="detail">
              <h3>MEMBER DISCOUNT</h3>
              <p>On every order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <p>
                <TfiHeadphoneAlt />
              </p>
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>24x7 Customer support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="headings">
        <h1>Newly Launched</h1>
      </div>
      <div className="newlyLaunched">
        <div className="container">
          {homeProduct.map((curElm) => {
            return (
              <>
                <div className="box" key={curElm.id}>
                  <div className="img-box">
                    <img
                      src={curElm.productImg}
                      alt={curElm.productName}
                      // width="200px"
                      height="250px"
                    ></img>
                    <div className="icon">
                      <li onClick={() => view(curElm)}>
                        <BsEye />
                      </li>
                      <li>
                        <CiHeart />
                      </li>
                      <li onClick={() => addToCart(curElm)}>
                        <IoBagCheckOutline />
                      </li>
                    </div>
                  </div>

                  <div className="detail">
                    <p>{curElm.productCat}</p>
                    <h3>{curElm.productName}</h3>
                    <h4>Rs. {curElm.productPrice}</h4>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>Latest Added Technology</h4>
            <h3>Apple Watch 10th Gen 2023</h3>
            <p>Rs. 25,000</p>
            <Link to="/product" className="link">
              Shop Now <FaArrowRight />
            </Link>
          </div>
          <div className="img-box">
            <img src="./img/appleWatch.png" alt="appleWatch" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
