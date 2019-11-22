import { combineReducers } from "redux";

const initialState = {
  selectedBucket: null,
  bucket: [
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
  ]
};

const selectedBucketReducer = () => {
  return initialState.selectedBucket;
};

const bucketReducer = () => {
  return initialState.bucket;
};

const selectBucketReducer = (state = initialState, action) => {
  if (action.type === "BUCKET_SELECTED") {
    console.log("state=", state, "payload=", action.payload);
    return { ...state, selectedBucket: action.payload };
  } else {
    return state;
  }
};

const addNewTodoReducer = (state = initialState, action) => {
  if (action.type === "ADD_NEW_TODO") {
    //selectedBucket = action.payload;
    console.log("state=", state, "payload=", action.payload);
    return state;
  } else {
    return state;
  }
};

export default combineReducers({
  bucket: bucketReducer,
  selectBucket: selectBucketReducer,
  selectedBucket: selectedBucketReducer,
  addNewTodo: addNewTodoReducer
});
