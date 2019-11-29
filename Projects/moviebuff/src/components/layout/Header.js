import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <p>MovieBuff</p>
      <ul>
        <li>
          <a href="#">TV</a>
          <ul>
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
          </ul>
        </li>
        <li>
          <a href="#">Movies</a>
          <ul>
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
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/register">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
