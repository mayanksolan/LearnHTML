const getData = countries => {
  return {
    type: "GET_DATA",
    payload: {
      countries: countries
    }
  };
};
