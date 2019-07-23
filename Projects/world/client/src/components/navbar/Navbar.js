import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <h1>World</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" className="navbarli">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="navbarli">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/" className="navbarli">
                Cities
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
