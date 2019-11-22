import React, { Component } from "react";
import { connect } from "react-redux";

export class Bucket extends Component {
  renderBucket() {
    //console.log(this.props.bucket, this.props.selectedBucket);
    return this.props.selectedBucket === null ||
      this.props.selectedBucket === "-1" ||
      this.props.selectedBucket === "0" ? (
      <div></div>
    ) : (
      this.props.bucket.filter(
        bucketItem => bucketItem.num.toString() === this.props.selectedBucket
      )[0].name
    );
  }
  render() {
    return <div className="bucket_style">Bucket: {this.renderBucket()}</div>;
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    bucket: state.bucket.slice(2),
    selectedBucket: state.selectedBucket
  };
};

export default connect(mapStateToProps)(Bucket);
