import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  //increase quantity
  const incQty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };

  //decrease quantity
  const decQty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  //remove product
  const removeProduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  //total Price
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.productPrice,
    0
  );

  return (
    <>
      <div className="cartContainer">
        {cart.length === 0 && (
          <div className="emptyCart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to="../product" className="link">
              Shop Now
            </Link>
          </div>
        )}
        <div className="contant">
          {cart.map((curElm) => {
            return (
              <div className="cart_item" key={curElm.id}>
                <div className="img-box">
                  <img
                    src={curElm.productImg}
                    alt={curElm.productName}
                    height="200px"
                  />
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{curElm.productCat}</h4>
                    <h3>{curElm.productName}</h3>
                    <p>Rs {curElm.productPrice}</p>
                    <div className="qty">
                      <button className="incqty" onClick={() => incQty(curElm)}>
                        +
                      </button>
                      <input type="text" value={curElm.qty} />
                      <button className="decqty" onClick={() => decQty(curElm)}>
                        -
                      </button>
                    </div>

                    <h4 className="subtotal">
                      subtotal: Rs {curElm.productPrice * curElm.qty}
                    </h4>
                  </div>
                  <div className="close">
                    <button onClick={() => removeProduct(curElm)}>
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className="totalPrice">Total: Rs {totalPrice}</h2>
            <button className="checkout">Checkout</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
