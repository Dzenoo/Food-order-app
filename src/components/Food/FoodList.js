import React from "react";

import "./FoodList.css";

import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <ul className="item_list">
      {props.data.map((item) => (
        <FoodItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </ul>
  );
};

export default FoodList;
