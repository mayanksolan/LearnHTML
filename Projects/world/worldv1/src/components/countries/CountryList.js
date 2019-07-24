import React from "react";
import uuid from "uuid";
import CountryCard from "./CountryCard";

class CountryList extends React.Component {
  render() {
    const { countryList } = this.props;
    const countries = countryList.map(country => {
      console.log(country);
      return <CountryCard key={uuid.v1()} country={country} />;
    });
    return <div>{countries}</div>;
  }
}

export default CountryList;
