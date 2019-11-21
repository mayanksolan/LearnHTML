import React, { Component } from "react";
import { connect } from "react-redux";

export class Bucket extends Component {
  renderBucket() {
    return this.props.bucket.map(item => item.name);
  }
  render() {
    return <div className="bucket_style">Bucket: {this.renderBucket()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    bucket: state.bucket.slice(2)
  };
};

export default connect(mapStateToProps)(Bucket);
