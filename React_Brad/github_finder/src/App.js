import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    const name = "Mayank Solan";
    return (
      <div className="App">
        <h1>Hello {name}</h1>
      </div>
    );
  }
}

export default App;
