import { combineReducers } from "redux";

const initialState = {
  searchText: null,
  topRated: null,
  register: {
    name: "",
    email: "",
    password: "",
    password2: ""
  },
  login: { email: "", password: "" }
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
    case "SET_SEARCH_MOVIE_RESULTS":
      return { ...state, topRated: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "SET_REGISTER_DATA":
      return { ...state, register: action.payload };
    case "SET_LOGIN_DATA":
      return { ...state, login: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  fetchData: fetchDataReducer
});
