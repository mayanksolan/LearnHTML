import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/layout/Header";
import SearchBar from "./components/layout/SearchBar";
import MovieList from "./components/layout/MovieList";
import Register from "./components/layout/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Fragment>
                <SearchBar />
                <MovieList />
              </Fragment>
            )}
          />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
