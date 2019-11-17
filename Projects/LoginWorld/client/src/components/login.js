import React, { Component } from "react";

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
      </div>
    );
  }
}
