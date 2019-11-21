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
    bucket: state.bucket
  };
};

export default connect(mapStateToProps)(Bucket);
