import { combineReducers } from "redux";

const initialState = {
  searchText: null
};

const stateReducer = () => {
  return initialState;
};

const setSearchTextReducer = (state = initialState, action) => {
  if (action.type === "SET_SEARCH_TEXT") {
    console.log(action.payload);
    return state;
  } else {
    return state;
  }
};

export default combineReducers({
  state: stateReducer,
  setSearchText: setSearchTextReducer
});
