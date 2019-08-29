import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MainMovieList from "./components/MainMovieList";
import MovieDetail from "./components/MovieDetail";

class App extends React.Component {
  render() {
    //console.log(window.location.href);
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainMovieList} />
          <Route exact path="/movie/:imdbId" component={MovieDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
