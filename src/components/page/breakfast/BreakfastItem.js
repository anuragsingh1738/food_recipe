import React from "react";


function BreakfastItem({ image, name, time, ingredients, recipe }) {
  return (
    <div className="breakfastItem">


      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Time: {time} Min </p>
      <p> <b>Ingredients:</b><br/>{ingredients}</p>
      <p> <b>Steps:</b><br/> { recipe } </p>
      
    </div>
  );
}

export default BreakfastItem;