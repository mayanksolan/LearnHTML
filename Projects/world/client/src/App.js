import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import countriesApi from "../src/api/countriesApi";

class App extends React.Component {
  state = { countriesData: [] };
  getData = async term => {
    const response = await countriesApi.get();
    this.setState({ countriesData: response.data });
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          App
          <form getData={this.getData}>
            <button>Click Me</button>
          </form>
        </div>
      </Router>
    );
  }
}

export default App;
