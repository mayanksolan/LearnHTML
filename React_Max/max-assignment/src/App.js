import React from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends React.Component {
  state = {
    username: "Solan"
  };
  handleClick = e => {
    this.setState({
      username: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <UserInput changed={this.handleClick} username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
