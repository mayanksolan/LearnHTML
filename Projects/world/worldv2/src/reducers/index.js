import { combineReducers } from "redux";

const initialState = {
  countries: [],
  selectCountry: []
};

const countries = (countries = [], action) => {
  if (action.type === "GET_DATA") {
    return [...countries, action.payload];
  }
  return countries;
};

const selectCountry = () => {};

export default combineReducers({
  countries: countries,
  selectCountry: selectCountry
});
