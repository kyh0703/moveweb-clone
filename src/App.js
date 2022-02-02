import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);

  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do ..." />
        <button>Add To Do</button>
      </form >
    </div>
  );
}

export default App;

// toDo = 6
// currentArray = [ 1, 2, 3, 4, 5]
// setToDos((currentArray) => [toDo, ...currentArray]);
// [6, 1, 2, 3, 4, 5]