import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {todosData:todosData}
    }
    render() {
        const todoComponent = this.state.todosData.map(todo => <ToDoItem key={todo.id} todo={todo} />)
        return (
            <div className="todo-list">
                {todoComponent}
            </div>        
        )
    }    
}

export default App;