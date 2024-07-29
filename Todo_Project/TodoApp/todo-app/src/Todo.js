import { useState } from "react";
import "./styles.css";
function Todo() {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState("");

  function generateId() {
    return Math.floor(Math.random() * 1000);
  }

  function handleSubmit() {
    settodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setinput("");
  }

  function removeTodo(id) {
    settodos((todos) => todos.filter((t) => t.id !== id));
  }
  return (
    <>
      <div className="container">
        <h1>Todo Application</h1>
        <input
          type="text"
          value={input}
          onChange={(ele) => setinput(ele.target.value)}
          placeholder="New Todo!"
        />
        <button onClick={handleSubmit}>+</button>
        <ul className="todos-list">
          {todos.map(({ text, id }) => {
            return (
              <li key={id} className="todo">
                <span>{text}</span>
                <button className="close" onClick={() => removeTodo(id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
