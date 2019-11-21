import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import CheckedList from "./components/CheckedList";

function App() {
  return (
    <div className="App">
      <h1>Hey There</h1>
      <TodoList />
      <CheckedList />
    </div>
  );
}

export default App;
