import React, { Component } from "react";

export class Alert extends Component {
  render() {
    const { alert } = this.props;
    return (
      alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
      )
    );
  }
}

export default Alert;
