import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./todosData"

function App() {
    const todoComponent = todosData.map(todo => <ToDoItem key={todo.id} todo={todo} />)
    return (
        <div className="todo-list">
            {todoComponent}
        </div>        
    )
}

export default App;