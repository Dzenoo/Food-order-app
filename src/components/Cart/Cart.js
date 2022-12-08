import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowActions } from "../../store/show-slice";
import { Link } from "react-router-dom";

import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);

  const hideCart = () => {
    dispatch(ShowActions.hide());
  };

  return (
    <div className="cart__backdrop">
      <div className="cart__container">
        <div
          style={{
            display: "flex",
            gap: "2em",
            alignItems: "center",
            color: "#303030",
          }}
        >
          <p onClick={hideCart}>X</p>
          <h1>Your Cart</h1>
        </div>

        <div className="item_container">
          {cartItem.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
            />
          ))}
        </div>

        <Link to={cartItem.length < 1 ? "/home" : "/checkout"}>
          {cartItem.length < 1 ? "Cart empty" : "Pay Online"}
        </Link>
      </div>
    </div>
  );
};

export default Cart;
