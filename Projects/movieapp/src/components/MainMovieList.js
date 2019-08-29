import React, { Component, Fragment } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import "./styles/MovieList.css";

class MainMovieList extends Component {
  state = {
    term: "",
    movieId: ""
  };
  onSearchSubmit = term => {
    this.setState({ term: term }, () => {
      console.log(this.state);
    });
  };
  onSubmitButton = imdbID => {
    //console.log(imdbID);
    this.setState(
      {
        movieId: imdbID
      },
      () => {
        console.log(this.state);
        this.movieApiCall();
      }
    );
  };
  render() {
    return (
      <Fragment>
        <SearchBar runMeOnSubmit={this.onSearchSubmit} />
        <MovieList
          term={this.state.term}
          onSubmitButton={this.onSubmitButton}
        />
      </Fragment>
    );
  }
}

export default MainMovieList;
