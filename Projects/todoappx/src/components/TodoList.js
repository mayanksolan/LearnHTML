import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  todoListRender() {
    return this.props.selectBucket === null ||
      this.props.selectBucket === "-1" ||
      this.props.selectBucket === "0" ? (
      <div>Hello</div>
    ) : (
      this.props.bucket
        .filter(
          bucketItem => bucketItem.num.toString() === this.props.selectBucket
        )[0]
        .todoList.map(item => (
          <div className="todo_item_style" key={item.num}>
            <span>
              <input type="checkbox"></input>
            </span>
            {item.item}
          </div>
        ))
    );
  }
  onChangeHandler = () => {};

  render() {
    //console.log(this.props);
    return (
      <div>
        <div className="todo_style">{this.todoListRender()}</div>
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
  //console.log(state);
  return {
    bucket: state.bucket.slice(2),
    selectBucket: state.selectBucket
  };
};

export default connect(mapStateToProps)(TodoList);
