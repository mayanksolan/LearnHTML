import React, { Component } from "react";
import { connect } from "react-redux";

class CheckedList extends Component {
  checkedListRender() {
    return this.props.selectBucket === null ||
      this.props.selectBucket === "-1" ||
      this.props.selectBucket === "0" ? (
      <div>Hello</div>
    ) : (
      this.props.bucket
        .filter(
          bucketItem => bucketItem.num.toString() === this.props.selectBucket
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
    selectBucket: state.selectBucket
  };
};

export default connect(mapStateToProps)(CheckedList);
