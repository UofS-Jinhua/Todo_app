import { useState } from "react";
import Item from "./Item";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(todos);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit" onClick={() => setTodos([...todos, todo])}>
          Add
        </button>
      </form>

      {todos.map((todo, index) => (
        <h3 key={index}>
          {" "}
          {index} - {todo}
        </h3>
      ))}
    </div>
  );
}
