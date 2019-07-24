import React from "react";
import "./App.css";
import Navigbar from "./components/layouts/Navigbar";
import Search from "./components/countries/Search";
import CountryList from "./components/countries/CountryList";
import uuid from "uuid";

class App extends React.Component {
  state = {
    countries: [
      {
        name: "India",
        capital: "New Delhi",
        flag: "https://restcountries.eu/data/ind.svg"
      },
      {
        name: "Afghanistan",
        capital: "Kabul",
        flag: "https://restcountries.eu/data/afg.svg"
      },
      {
        name: "Albania",
        capital: "Tirana",
        flag: "https://restcountries.eu/data/alb.svg"
      }
    ]
  };
  render() {
    return (
      <div>
        <Navigbar />
        <Search />
        <div className="container">
          <div className="row">
            <CountryList key={uuid.v1()} countryList={this.state.countries} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
