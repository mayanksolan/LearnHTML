import React, { Component } from "react";
import { connect } from "react-redux";

class CheckedList extends Component {
  checkedListRender() {
    return this.props.bucket.map(bucketItem =>
      bucketItem.checkedList.map(item => (
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
    bucket: state.bucket
  };
};

export default connect(mapStateToProps)(CheckedList);
