import React from "react";
import uuid from "uuid";
import CountryCard from "./CountryCard";

class CountryList extends React.Component {
  render() {
    const { countryList } = this.props;
    return (
      <div style={countryStyle}>
        {countryList.map(country => (
          <CountryCard key={uuid.v1()} country={country} />
        ))}
      </div>
    );
  }
}

const countryStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "2rem"
};

export default CountryList;
