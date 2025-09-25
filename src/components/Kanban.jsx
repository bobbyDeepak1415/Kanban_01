import React, { useState } from "react";

export default function Kanban() {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const handleAddTask = (e) => {
    e.preventDefault();
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
              className="task_input"
              onChange={(e) => setNewTask(e.target.value)}
            ></input>
            <button type="submit" className="addTask_btn">
              AddTask
            </button>
          </div>
        </form>
      </div>
      <div className="containers_layout">
        <div className="containers">
          {taskStages.map((stage, index) => {
            return (
              <div className="container" key={index}>
                <h4>{stage}</h4>
                <ul className="tasklist">
                  {taskStages[index].map((task, taskIndex) => {
                    return (
                      <li className="taskItem" key={taskIndex}>
                        <div className="task_Content">
                          <span>{task.name}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
