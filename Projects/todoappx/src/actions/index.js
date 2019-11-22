//action creator
export const selectBucket = num => {
  return {
    type: "BUCKET_SELECTED",
    payload: num
  };
};

export const addNewTodo = todoText => {
  return {
    type: "ADD_NEW_TODO",
    payload: todoText
  };
};
