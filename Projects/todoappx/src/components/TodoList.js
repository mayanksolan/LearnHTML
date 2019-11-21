import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  todoListRender() {
    return this.props.todoList.map((item, index) => {
      return <div key={index}>{item}</div>;
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
