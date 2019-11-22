import React, { Component } from "react";
import { connect } from "react-redux";

export class Bucket extends Component {
  renderBucket() {
    return this.props.selectBucket === null ||
      this.props.selectBucket === "-1" ||
      this.props.selectBucket === "0" ? (
      <div>Hello</div>
    ) : (
      this.props.bucket.filter(
        bucketItem => bucketItem.num.toString() === this.props.selectBucket
      )[0].name
    );
  }
  render() {
    return <div className="bucket_style">Bucket: {this.renderBucket()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    bucket: state.bucket.slice(2),
    selectBucket: state.selectBucket
  };
};

export default connect(mapStateToProps)(Bucket);
