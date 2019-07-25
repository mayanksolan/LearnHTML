import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import uuid from "uuid";
import axios from "axios";

import Navigbar from "./components/layouts/Navigbar";
import Search from "./components/countries/Search";
import CountryList from "./components/countries/CountryList";
import CountryDetail from "./components/countries/CountryDetail";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectCountries: []
    };
  }
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        this.setState({
          countries: response.data,
          selectCountries: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onSearchSubmit = term => {
    console.log(term, term.length);
    if (term.length < 1) {
      this.setState({ selectCountries: this.state.countries });
    } else {
      const newArray = this.state.countries.filter(country => {
        return country.name.toLowerCase().includes(term.toLowerCase())
          ? country
          : null;
      });
      console.log(newArray);
      this.setState({
        selectCountries: newArray
      });
    }
  };
  onButtonClick = () => {
    this.setState({ selectCountries: this.state.countries });
  };

  render() {
    return (
      <Router>
        <div>
          <Navigbar />

          <div className="container">
            <Search runMeOnSubmit={this.onSearchSubmit} />
            {this.state.selectCountries.length !==
              this.state.countries.length && (
              <Button
                variant="dark"
                block
                style={{ marginBottom: "2rem" }}
                onClick={this.onButtonClick}
              >
                Show All Countires
              </Button>
            )}
            <CountryList
              key={uuid.v1()}
              countryList={
                this.state.selectCountries.length < this.state.countries.length
                  ? this.state.selectCountries
                  : this.state.countries
              }
            />
          </div>
          <Switch>
            <Route exact path="/country/:name" component={CountryDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
