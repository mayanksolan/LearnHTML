import React, { Fragment } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

class App extends React.Component {
  state = {
    movieList: []
  };
  onSearchSubmit = term => {
    let apikey = "9866420e";
    axios
      .get(`http://www.omdbapi.com/?s=${term}&apikey=${apikey}`)
      .then(res => {
        console.log(res.data.Search);
        this.setState({
          movieList: res.data.Search
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidUpdate() {
    this.onSearchSubmit();
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <SearchBar runMeOnSubmit={this.onSearchSubmit} />
        <MovieList movieList={this.state.movieList} />
        <div className="App">React App</div>
      </Fragment>
    );
  }
}

export default App;
