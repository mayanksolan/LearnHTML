import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  todoListRender() {
    return this.props.todoList.map(item => {
      return <div key={item.num}>{item.item}</div>;
    });
  }
  render() {
    return <div>{this.todoListRender()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect(mapStateToProps)(TodoList);
