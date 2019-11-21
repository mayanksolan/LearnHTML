import { combineReducers } from "redux";

const bucketList = [
  {
    name: "One",
    todoList: [
      { num: 1, item: "Milk" },
      { num: 2, item: "Eggs" },
      { num: 3, item: "Pen" }
    ],
    checkedList: [
      { num: 1, item: "Bread" },
      { num: 2, item: "Curd" }
    ]
  }
];

const bucketReducer = () => {
  return bucketList;
};

export default combineReducers({
  bucket: bucketReducer
});
