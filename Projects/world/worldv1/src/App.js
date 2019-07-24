import React from "react";
import "./App.css";
import Navigbar from "./components/layouts/Navigbar";
import Search from "./components/countries/Search";
import CountryList from "./components/countries/CountryList";
import uuid from "uuid";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log(response.data);
        this.setState({ countries: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navigbar />
        <div className="container">
          <Search />
          <CountryList key={uuid.v1()} countryList={this.state.countries} />
        </div>
      </div>
    );
  }
}

export default App;

//
