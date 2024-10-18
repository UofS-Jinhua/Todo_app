import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input type="text" />
      <button type="submit">Add</button>
    </div>
  );
}
