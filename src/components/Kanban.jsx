import React, { useState } from "react";

export default function Kanban() {
  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [newTask, setNewTask] = useState("");

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const handleAddTask = (e) => {
    e.preventDefault()
    if (!newTask.trim()) return;

    const task = { name: newTask.trim(), stage: 0 };

    const updatedStages = [...taskStages];
    updatedStages[0].push(task);
    setTaskStages(updatedStages);
    setNewTask("");
  };

  return (
    <div className="kanban">
      <div className="form_layout">
        <form onSubmit={handleAddTask}>
          <div className="form">
            <input
              className="form_input"
              onChange={(e) => setNewTask(e.target.value)}
            ></input>
            <button className="addTask_btn">Add Task</button>
          </div>
        </form>
      </div>

      <div className="containers_layout">
        {taskStages.map((stage, index) => {
          return (
            <div className="container">
              <h4>{stage}</h4>
              <ul>
                {taskStages[index].map((task, taskIndex) => {
                  return (
                    <li key={taskIndex}>
                      <span>{task.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
