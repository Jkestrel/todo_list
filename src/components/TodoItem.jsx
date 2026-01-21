import { useState } from "react";

function Todo({ item, index, todo, addTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(item.text);

  function deleteTodo() {
    const newTodo = todo.filter((_, i) => i !== index);
    addTodo(newTodo);
  }

  function toggleComplete() {
    const newTodo = [...todo];
    newTodo[index].completed = !newTodo[index].completed;
    addTodo(newTodo);
  }

  function saveEdit() {
    const newTodo = [...todo];
    newTodo[index].text = editText;
    addTodo(newTodo);
    setIsEdit(false);
  }

  return (
    <div className="itemCenter">
    <div className="itemClass">
      {isEdit ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={toggleComplete}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {item.text}
          </span>
        <div>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={deleteTodo}>Delete</button>
        </div>
        </>
      )}
    </div>
    </div>
  );
}

export default Todo;
