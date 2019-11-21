import React, { Component } from "react";
import { connect } from "react-redux";

class CheckedList extends Component {
  checkedListRender() {
    return this.props.checkedList.map(item => {
      return <div key={item.num}>{item.item}</div>;
    });
  }
  render() {
    return <div>{this.checkedListRender()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    checkedList: state.checkedList
  };
};

export default connect(mapStateToProps)(CheckedList);
