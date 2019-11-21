import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  todoListRender() {
    return this.props.bucket.map(bucketItem =>
      bucketItem.todoList.map(item => (
        <div className="todo_item_style" key={item.num}>
          {item.item}
        </div>
      ))
    );
  }
  onChangeHandler = () => {};
  render() {
    return (
      <div className="todo_style">
        <div>{this.todoListRender()}</div>
        <form id="add_text_style">
          <input
            type="text"
            className="newtodo_style"
            value=""
            placeholder="Add a new Todo"
            onChange={this.onChangeHandler}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bucket: state.bucket
  };
};

export default connect(mapStateToProps)(TodoList);
