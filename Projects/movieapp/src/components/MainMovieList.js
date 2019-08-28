import React, { Component, Fragment } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

class MainMovieList extends Component {
  state = {
    term: "",
    movieId: "",
    movieData: ""
  };
  onSearchSubmit = term => {
    this.setState({ term: term }, () => {
      console.log(this.state);
    });
  };
  movieApiCall() {
    let apikey = "9866420e";
    axios
      .get(`http://www.omdbapi.com/?i=${this.state.movieId}&apikey=${apikey}`)
      .then(res => {
        console.log(res.data);
        this.setState(
          {
            movieData: res.data
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
  onSubmitButton = imdbID => {
    console.log(imdbID);
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
