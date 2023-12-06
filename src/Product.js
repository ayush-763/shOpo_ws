import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

import ProductDetail from "./ProductDetail";
import "./Product.css";
const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addToCart,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const filterProduct = (product) => {
    const update = ProductDetail.filter((x) => {
      return x.productCat === product;
    });
    setProduct(update);
  };
  const allProducts = () => {
    setProduct(ProductDetail);
  };
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

      <div className="products">
        <h2>#Products</h2>
        <p>Home . Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => allProducts()}>All Products</li>
                <li onClick={() => filterProduct("Phones")}>Phones</li>
                <li onClick={() => filterProduct("Tabs")}>Tabs</li>
                <li onClick={() => filterProduct("Smartwatch")}>Smartwatch</li>
                <li onClick={() => filterProduct("Powerbank")}>Powerbank</li>
              </ul>
            </div>
          </div>
          <div className="productBox">
            <div className="contant">
              {product.map((curElm) => {
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
                          {isAuthenticated ? (
                            <li onClick={() => addToCart(curElm)}>
                              <IoBagCheckOutline />
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <IoBagCheckOutline />
                            </li>
                          )}
                          <li onClick={() => view(curElm)}>
                            <BsEye />
                          </li>
                          <li>
                            <CiHeart />
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
        </div>
      </div>
    </>
  );
};

export default Product;
