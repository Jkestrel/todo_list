import { useState } from "react";
import Todo from "./TodoItem";

function ToDoList() {
  const [todo, addTodo] = useState([]);
  const [todoText, setTodo] = useState("");

  function handleClick() {
    todoText && addTodo([...todo, { text: todoText, completed: false }]);
    setTodo("");
  }

  return (
    <>
      <div className="itemCenter">
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button onClick={handleClick}>Add Todo</button>
      </div>

      {todo.map((item, index) => (
        <Todo
          key={index}
          item={item}
          index={index}
          todo={todo}
          addTodo={addTodo}
        />
      ))}
    </>
  );
}

export default ToDoList;
