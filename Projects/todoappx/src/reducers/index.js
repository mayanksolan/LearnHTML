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

// const selectedBucketReducer = () => {
//   return initialState.selectedBucket;
// };

const bucketReducer = () => {
  return initialState.bucket;
};

const selectBucketReducer = (state = initialState, action) => {
  if (action.type === "BUCKET_SELECTED") {
    //console.log("state=", state, "payload=", action.payload);
    //console.log(state, action);
    return { ...state, selectedBucket: action.payload };
  } else {
    return state;
  }
};

const addNewTodoReducer = (state = initialState, action) => {
  if (action.type === "ADD_NEW_TODO") {
    const newTodo = {
      num: state.bucket[action.payload.bucketNum + 1].todoList.length + 1,
      item: action.payload.todoText
    };
    return {
      ...state,
      bucket: [
        ...state.bucket,
        state.bucket[action.payload.bucketNum + 1].todoList.push(newTodo)
      ]
    };
  } else {
    return state;
  }
};

const checkedTodoReducer = (state = initialState, action) => {
  if (action.type === "CHECKED_TODO") {
    const newTodoList = [
      ...state.bucket[action.payload.bucketNum + 1].todoList
    ];
    const yesNewTodoList = newTodoList.filter(
      todoItem => todoItem.item !== action.payload.sendTodoText
    );
    const newCheckedList = [
      ...state.bucket[action.payload.bucketNum + 1].checkedList
    ];
    const yesNewCheckedList = [
      ...newCheckedList,
      {
        num: state.bucket[action.payload.bucketNum + 1].checkedList.length + 1,
        item: action.payload.sendTodoText
      }
    ];
    const newState = { ...state };
    newState.bucket[action.payload.bucketNum + 1].todoList = yesNewTodoList;
    newState.bucket[
      action.payload.bucketNum + 1
    ].checkedList = yesNewCheckedList;
    return newState;
  } else {
    return state;
  }
};

const changeBucketNameReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_BUCKET_NAME") {
    return state;
  } else {
    return state;
  }
};

export default combineReducers({
  bucket: bucketReducer,
  selectBucket: selectBucketReducer,
  //selectedBucket: selectedBucketReducer,
  addNewTodo: addNewTodoReducer,
  checkedTodo: checkedTodoReducer,
  changeBucketName: changeBucketNameReducer
});
