import React from "react";

import "./FoodItem.css";
import Card from "../Ui/Card";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const FoodItem = (props) => {
  const dispatch = useDispatch();
  const { id, image, name, description, price } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.AddToCart({ id, image, name, price }));
  };

  return (
    <Card>
      <div className="item">
        <img src={image} alt={name} />
        <div className="content_text">
          <h1>{name}</h1>
          <p>{description}</p>
          <span style={{ fontSize: "24px", marginBottom: "20px" }}>
            ${price}
          </span>
        </div>
        <button className="btn">
          <BsFillCartPlusFill onClick={addToCartHandler} />
        </button>
      </div>
    </Card>
  );
};

export default FoodItem;
