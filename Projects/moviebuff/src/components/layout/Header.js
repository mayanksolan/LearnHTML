import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerBar">
      <div className="headerTitle">MovieBuff</div>
      <div className="headerList">
        <ul>
          <li>
            <a href="#!">Top Rated Movies</a>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/register">Login</Link>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="dropbtn">
          Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
