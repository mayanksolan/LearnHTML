import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/layout/Header";
import SearchBar from "./components/layout/SearchBar";
import MovieList from "./components/layout/MovieList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SearchBar />
        <MovieList />
      </div>
    </BrowserRouter>
  );
}

export default App;
