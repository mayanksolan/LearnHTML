import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    paraText: ""
  };

  onChangeHandler = e => {
    this.setState({
      paraText: e.target.value
    });
  };

  onClickDeleter = index => {
    const chars = this.state.paraText.split("");
    chars.splice(index, 1);
    const newText = chars.join("");
    this.setState({
      paraText: newText
    });
  };

  render() {
    const paraLength = this.state.paraText.length;

    const chars = this.state.paraText.split("").map((char, index) => {
      return (
        <CharComponent
          char={char}
          id={index}
          click={() => this.onClickDeleter(index)}
        />
      );
    });

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input
          type="text"
          onChange={e => this.onChangeHandler(e)}
          value={this.state.paraText}
        />
        <p>{paraLength}</p>
        <ValidationComponent paraLength={paraLength} />
        {chars}
      </div>
    );
  }
}

export default App;
