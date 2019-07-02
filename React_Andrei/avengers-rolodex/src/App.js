import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      avengers: [
        {
          name: "Iron Man",
          id: "a1"
        },
        {
          name: "Captain America",
          id: "a2"
        },
        {
          name: "Hulk",
          id: "a3"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.avengers.map(avenger => (
          <h1 key={avenger.id}>{avenger.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
