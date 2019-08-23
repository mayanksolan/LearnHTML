import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navTitle">
        <h3>Movies Hub</h3>
      </div>
      <div className="navLinks">
        <ul>
          <li>Popular Movies</li>
          <li>Latest Movies</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
