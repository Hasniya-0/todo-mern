import { useEffect, useState } from "react";
import api from "./api";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const loadTodos = async () => {
    const res = await api.get("/");
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async () => {
    if (!text.trim()) return;
    await api.post("/", { text });
    setText("");
    loadTodos();
  };

  const toggleTodo = async (id) => {
    await api.put(`/${id}`);
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await api.delete(`/${id}`);
    loadTodos();
  };

  const completed = todos.filter(t => t.completed).length;
  const percent = todos.length
    ? Math.round((completed / todos.length) * 100)
    : 0;

  return (
    <div className="app">
      <h1>🌸 Todo Charm</h1>

      <div className="input">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add something nice..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="progress">
        <span>{percent}% completed</span>
        <div className="bar">
          <div className="fill" style={{ width: `${percent}%` }} />
        </div>
      </div>

      {todos.map(todo => (
        <div
          key={todo._id}
          className={`todo ${todo.completed ? "done" : ""}`}
        >
          <span onClick={() => toggleTodo(todo._id)}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo._id)}>🗑</button>
        </div>
      ))}
    </div>
  );
}

export default App;
