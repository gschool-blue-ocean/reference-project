import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter.jsx";
import c from "./App.module.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);

  return (
    <main>
      <h2>Tasks</h2>
      <div className={c.tasks}>
        {tasks.map(({ id, description }) => (
          <span className="task" key={id}>
            {description}
          </span>
        ))}
      </div>
      <h2>Counter</h2>
      <Counter />
    </main>
  );
};

export default App;
