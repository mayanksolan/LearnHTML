import { combineReducers } from "redux";

const bucketList = [
  {
    name: "One",
    todoList: ["Milk", "Eggs", "Pen"],
    checkedList: ["Bread", "Curd"]
  }
];

const todoListReducer = () => {
  return bucketList[0].todoList;
};

const checkedListReducer = () => {
  return bucketList[0].checkedList;
};

export default combineReducers({
  todoList: todoListReducer,
  checkedList: checkedListReducer
});
