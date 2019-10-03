import React, { Component } from "react";

export default class UserOutput extends Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.username}</p>
        <p>Welcome to the Club</p>
      </div>
    );
  }
}
