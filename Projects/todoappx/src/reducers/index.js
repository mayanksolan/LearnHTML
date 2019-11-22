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
  },
  {
    num: 2,
    name: "Two",
    todoList: [
      { num: 1, item: "Pillow" },
      { num: 2, item: "Chair" },
      { num: 3, item: "Sofa" }
    ],
    checkedList: [
      { num: 1, item: "Mobile" },
      { num: 2, item: "Cover" }
    ]
  }
];
const selectedBucket = null;

const selectedBucketReducer = () => {
  return selectedBucket;
};

const bucketReducer = () => {
  return bucketList;
};

const selectBucketReducer = (selectedBucket = null, action) => {
  if (action.type === "BUCKET_SELECTED") {
    selectedBucket = action.payload;
    console.log("selectedBucket=" + selectedBucket);
    return selectedBucket;
  } else {
    return selectedBucket;
  }
};

export default combineReducers({
  bucket: bucketReducer,
  selectBucket: selectBucketReducer,
  selectedBucket: selectedBucketReducer
});
