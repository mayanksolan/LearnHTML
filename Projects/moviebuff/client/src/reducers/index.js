import { combineReducers } from "redux";

const initialState = {
  token: localStorage.getItem("token"),
  searchText: null,
  topRated: null,
  isAuthenticated: null,
  user: null,
  hello: ""
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
    case "SET_SEARCH_MOVIE_RESULTS":
      return { ...state, topRated: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case "REGISTER_FAIL":
    case "AUTH_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default combineReducers({
  fetchData: fetchDataReducer
});
