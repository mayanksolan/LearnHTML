import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <nav>
        <p>MovieBuff</p>
        <ul>
          <li>
            <Link to="/tv">TV</Link>
            {/* <ul>
            <li>
              <a href="">Popular TV shows</a>
            </li>
            <li>
              <a href="">Top rated TV shows</a>
            </li>
            <li>
              <a href="">On the air TV shows</a>
            </li>
            <li>
              <a href="">Airing today TV shows</a>
            </li>
          </ul> */}
          </li>
          <li>
            <Link to="/movies">Movies</Link>
            {/* <ul>
            <li>
              <a href="">Top rated movies</a>
            </li>
            <li>
              <a href="">Upcoming movies</a>
            </li>
            <li>
              <a href="">Now playing movies</a>
            </li>
            <li>
              <a href="">Popular movies</a>
            </li>
          </ul> */}
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
