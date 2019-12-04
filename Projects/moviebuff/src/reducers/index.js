import { combineReducers } from "redux";

const initialState = {
  searchText: null,
  topRated: null
};

const stateReducer = () => {
  return initialState;
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
    case "SET_SEARCH_MOVIE_RESULTS":
      return { ...state, topRated: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

// const setSearchTextReducer = (state = initialState, action) => {
//   if (action.type === "SET_SEARCH_TEXT") {
//     const newState = { ...state, searchText: action.payload };
//     return newState;
//   } else {
//     return state;
//   }
// };

export default combineReducers({
  state: stateReducer,
  //setSearchText: setSearchTextReducer,
  fetchData: fetchDataReducer
  //,setSearchMovieResults: setSearchMovieResultsReducer
});
