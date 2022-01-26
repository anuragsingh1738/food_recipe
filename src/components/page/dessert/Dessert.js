import React from "react";
import { DessertList } from "./DessertList";
import DessertItem from "./DessertItem";
import "../dessert/Dessert.css";

function Dessert() {
  return (
    <div className="dessert">
      <div className="dessertList">
        {DessertList.map((dessertItem, key) => {
          return (
            <DessertItem
              key={key}
              image={dessertItem.image}
              name={dessertItem.name}
              time={dessertItem.time}
              ingredients={dessertItem.ingredients}
              recipe={dessertItem.recipe}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dessert;