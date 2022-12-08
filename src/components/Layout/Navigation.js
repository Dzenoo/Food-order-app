import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ShowActions } from "../../store/show-slice";
import "./Navigation.css";
import logo from "../../assets/logo.png";

const Navigation = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(ShowActions.show());
  };

  return (
    <div className="header">
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="menu">
        <li>
          <Link to="/home"> Home</Link>
        </li>

        <li>
          <a href="#categories"> Categories</a>
        </li>
      </ul>
      <div className="cart">
        <div className="sp">{totalQuantity}</div>
        <AiOutlineShoppingCart onClick={showCart} />
      </div>
    </div>
  );
};

export default Navigation;
