import React, { Component } from "react";
import { connect } from "react-redux";

class CheckedList extends Component {
  checkedListRender() {
    return this.props.selectedBucket === null ||
      this.props.selectedBucket === "-1" ||
      this.props.selectedBucket === "0" ? (
      <div></div>
    ) : (
      this.props.bucket
        .filter(
          bucketItem => bucketItem.num.toString() === this.props.selectedBucket
        )[0]
        .checkedList.map(item => (
          <div className="checked_item_style" key={item.num}>
            {item.item}
          </div>
        ))
    );
  }
  render() {
    return <div className="checked_style">{this.checkedListRender()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    bucket: state.bucket.slice(2),
    selectedBucket: state.selectedBucket
  };
};

export default connect(mapStateToProps)(CheckedList);
