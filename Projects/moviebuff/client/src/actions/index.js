import axios from "axios";
import setAuthToken from "../../src/utils/setAuthToken";

export const setSearchText = searchText => {
  return {
    type: "SET_SEARCH_TEXT",
    payload: searchText
  };
};

export const fetchInitialData = () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=71e765571755f062e48dd627663cb94b&language=en-US&page=1";
  return {
    type: "DATA_RECEIVED",
    payload: new Promise((resolve, reject) => {
      axios.get(url).then(response => resolve(response.data.results));
    })
  };
};

export const setSearchMovieResults = searchMovieData => {
  return {
    type: "SET_SEARCH_MOVIE_RESULTS",
    payload: searchMovieData
  };
};

//load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: "USER_LOADED",
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: "AUTH_ERROR"
    });
  }
};

//Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = { header: { "Content-Type": "application/json" } };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    //const errors = error.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }
    dispatch({
      type: "REGISTER_FAIL"
    });
  }
};
