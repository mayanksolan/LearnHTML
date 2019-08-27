import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

class App extends React.Component {
  state = {
    term: ""
  };
  onSearchSubmit = term => {
    this.setState({ term: term }, () => {
      console.log(this.state);
    });
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <SearchBar runMeOnSubmit={this.onSearchSubmit} />
        <MovieList term={this.state.term} />
        <div className="App"></div>
      </Fragment>
    );
  }
}

export default App;
