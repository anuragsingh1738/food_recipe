import React from "react";

function DessertItem({ image, name, time, ingredients, recipe }) {
  return (
    <div className="dessertItem">
        

      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Time: {time} Min </p>
      <p> <b>Ingredients:</b><br/>{ingredients}</p>
      <p> <b>Steps:</b><br/> { recipe } </p>
      
    </div>
    
  );
}

export default DessertItem;