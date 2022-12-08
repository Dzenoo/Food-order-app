import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import "./CartItem.css";

const CartItem = (props) => {
  const { id, image, name, price, totalPrice, quantity } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.AddToCart({ id, name, price }));
  };

  const removeCartHandler = () => {
    dispatch(cartActions.RemoveFromCart(id));
  };

  return (
    <div className="cart__item">
      <img src={image} alt={name} />
      <div className="text">
        <h1>{name}</h1>
        <div className="flex">
          <span>
            ${price} x {quantity}
          </span>
          <div className="twoBtns">
            <button onClick={removeCartHandler}>-</button>
            <button onClick={addToCartHandler}>+</button>
          </div>
        </div>
        <div className="totalPrice">Total: ${totalPrice}</div>
      </div>
    </div>
  );
};

export default CartItem;
