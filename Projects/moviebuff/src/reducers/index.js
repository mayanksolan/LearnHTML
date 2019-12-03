import { combineReducers } from "redux";

const initialState = {
  searchText: null,
  itemsRequested: false,
  topRated: null
};

const stateReducer = () => {
  return initialState;
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_REQUESTED":
      return { ...state, itemsRequested: true };
    case "DATA_RECEIVED":
      // console.log(action.payload);
      return { ...state, itemsRequested: false, topRated: action.payload };
    default:
      return state;
  }
};

const setSearchTextReducer = (state = initialState, action) => {
  if (action.type === "SET_SEARCH_TEXT") {
    const newState = { ...state, searchText: action.payload };
    return newState;
  } else {
    return state;
  }
};

export default combineReducers({
  state: stateReducer,
  setSearchText: setSearchTextReducer,
  fetchData: fetchDataReducer
});
