import React from "react";


function MainItem({ image, name, time, ingredients, recipe }) {
  return (
    <div className="mainItem">


      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Time: {time} Min </p>
      <p> <b>Ingredients:</b><br/>{ingredients}</p>
      <p> <b>Steps:</b><br/> { recipe } </p>
      
    </div>
  );
}

export default MainItem;