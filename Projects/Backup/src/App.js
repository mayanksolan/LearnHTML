import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

class App extends React.Component {
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
      <BrowserRouter>
        <Switch>
          <Fragment>
            <Navbar />
            <SearchBar runMeOnSubmit={this.onSearchSubmit} />
            <MovieList
              term={this.state.term}
              onSubmitButton={this.onSubmitButton}
            />
          </Fragment>
          <Route
            path="/movie/:imdbId"
            render={props => (
              <MovieDetail {...props} movieData={this.state.movieData} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
