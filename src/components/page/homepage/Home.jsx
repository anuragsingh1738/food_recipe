import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../Media/pizza.jpeg";
import "../homepage/homepage.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
      <h1> Pizza Recipe </h1>
      <p> LEARN TO MAKE TASTE PIZZA</p>
      <Link to="/breakfast">
        <button> Read Recipe </button>
      </Link>
    </div>
  </div>
  );
}

export default Home;