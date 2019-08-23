import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="App">React App</div>
      </Fragment>
    );
  }
}

export default App;
