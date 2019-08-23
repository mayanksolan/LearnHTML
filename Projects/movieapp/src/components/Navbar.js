import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navTitle">
        <h2>Movies Hub</h2>
      </div>
      <div className="navLinks">
        <a href="#" className="navLi">
          Popular Movies
        </a>
        <a href="#" className="navLi">
          Latest Movies
        </a>
      </div>
    </div>
  );
}

export default Navbar;
