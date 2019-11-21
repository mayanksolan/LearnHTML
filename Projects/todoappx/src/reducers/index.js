import { combineReducers } from "redux";

const bucketList = [
  {
    num: -1,
    name: "Create New Bucket or Select Existing Bucket",
    todoList: [],
    checkedList: []
  },
  {
    num: 0,
    name: "Create New Bucket",
    todoList: [],
    checkedList: []
  },
  {
    num: 1,
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

const selectedBucketReducer = (selectedBucket = null, action) => {
  if (action.type === "BUCKET_SELECTED") {
    return action.payload;
  } else {
    return selectedBucket;
  }
};

export default combineReducers({
  bucket: bucketReducer,
  selectedBucket: selectedBucketReducer
});
