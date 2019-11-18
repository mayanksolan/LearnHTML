import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form id="loginForm">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button>
          <Link to="/register">Sign Up</Link>
        </button>
      </div>
    );
  }
}
