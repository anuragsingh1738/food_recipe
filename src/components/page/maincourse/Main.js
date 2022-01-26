import React from "react";
import { MainList } from "./MainList";
import MainItem from "./MainItem";
import "../maincourse/Main.css";

function Main() {
  return (
    <div className="main">
      <div className="mainList">
        {MainList.map((mainItem, key) => {
          return (
            <MainItem
              key={key}
              image={mainItem.image}
              name={mainItem.name}
              time={mainItem.time}
              ingredients={mainItem.ingredients}
              recipe={mainItem.recipe}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;