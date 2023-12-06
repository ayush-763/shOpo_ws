import React, { useState } from "react";
import Nav from "./Nav.js";
import Rout from "./Rout.js";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer.js";
import ProductDetail from "./ProductDetail.js";
const App = () => {
  //add to cart
  const [cart, setCart] = useState([]);

  //product detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //filter product
  const [product, setProduct] = useState(ProductDetail);
  const searchBtn = (product) => {
    const change = ProductDetail.filter((x) => {
      return x.productCat === product;
    });
    setProduct(change);
  };
  //product detail

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  //addToCart

  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Product is added to cart");
    }
  };
  console.log(cart);
  return (
    <>
      <BrowserRouter>
        <Nav searchBtn={searchBtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
