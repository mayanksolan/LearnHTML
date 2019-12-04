import axios from "axios";

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
