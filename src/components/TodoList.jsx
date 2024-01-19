import React from "react";
import Todo from "./Todo";

function TodoList ({todos, setTodos, filteredTodos}) { //Gönderileni karşıla

    return(
      <div>
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                    text = {todo.text}
                    key = {todo.id}
                    todo = {todo}
                    todos = {todos}
                    setTodos={setTodos}
                     />))}

            
        </ul>
        </div>
        
      </div>
    )
}

export default TodoList