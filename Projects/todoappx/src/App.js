import React from "react";
import "./App.css";
import Bucket from "./components/Bucket";
import TodoList from "./components/TodoList";
import CheckedList from "./components/CheckedList";

function App() {
  return (
    <div className="App">
      <h1>Hey There</h1>
      <Bucket />
      <TodoList />
      <CheckedList />
    </div>
  );
}

export default App;
