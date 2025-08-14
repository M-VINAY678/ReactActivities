import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue(""); 
    }
  };
  return (
    <div >
      <h2>To-Do-App</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}
