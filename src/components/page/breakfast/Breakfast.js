import React from "react";
import { BreakfastList } from "./BreakfastList";
import BreakfastItem from "./BreakfastItem";
import "../breakfast/Breakfast.css";

function Breakfast() {
  return (
    <div className="breakfast">
      <div className="breakfastList">
        {BreakfastList.map((breakfastItem, key) => {
          return (
            <BreakfastItem
              key={key}
              image={breakfastItem.image}
              name={breakfastItem.name}
              time={breakfastItem.time}
              ingredients={breakfastItem.ingredients}
              recipe={breakfastItem.recipe}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Breakfast;