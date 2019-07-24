import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          App
        </div>
      </Router>
    );
  }
}

export default App;
