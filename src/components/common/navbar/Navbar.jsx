import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <Link to="/home" className="navbar-item">Home</Link>
      <Link to="/about" className="navbar-item">About</Link>
      <Link to="/breakfast" className="navbar-item">Breakfast</Link>
      <Link to="/maincourse" className="navbar-item">Main Course</Link>
      <Link to="/dessert" className="navbar-item">Dessert</Link>
      <Link to="/review" className="navbar-item">Review</Link>
  </section>
  )

}

export default Navbar;