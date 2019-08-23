import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <MovieList />
        <div className="App">React App</div>
      </Fragment>
    );
  }
}

export default App;
