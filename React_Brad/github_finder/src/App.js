import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  componentDidMount() {
    axios.get("https://api.github.com/users");
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
