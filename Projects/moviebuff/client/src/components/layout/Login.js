import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form className="container">
          <div>
            <h1>Login</h1>
            {/* <p>Please fill in this form to create an account.</p> */}

            <label>
              <b>Email</b>
              <input
                type="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                required
              />
            </label>

            <label>
              <b>Password</b>
              <input
                type="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                required
              />
            </label>

            <button type="submit" className="registerbtn">
              Login
            </button>
          </div>

          <div className="container-signin">
            <p>
              New User? <Link to="/register">Register</Link>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
