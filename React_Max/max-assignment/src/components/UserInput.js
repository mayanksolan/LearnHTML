import React, { Component } from "react";

export default class UserInput extends Component {
  render() {
    const style = { border: "2px dotted blue" };
    return (
      <div>
        <input
          style={style}
          type="text"
          onChange={this.props.changed}
          value={this.props.username}
        />
      </div>
    );
  }
}
