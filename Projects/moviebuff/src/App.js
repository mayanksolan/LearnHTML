import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/layout/Header";
import SearchBar from "./components/layout/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
