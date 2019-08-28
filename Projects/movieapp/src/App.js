import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MainMovieList from "./components/MainMovieList";
import MovieDetail from "./components/MovieDetail";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainMovieList} />
          <Route
            exact
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
