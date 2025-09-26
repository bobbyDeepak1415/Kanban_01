import React, { useState } from "react";

export default function Kanban() {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const handleAdddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const updatedStages = taskStages.map((arr) => [...arr]);
    const task = { name: newTask.trim(), stage: 0 };
    updatedStages[0].push(task);

    setTaskStages(updatedStages);
    setNewTask("");
  };

  const moveTask = (stageIndex, taskIndex, direction) => {
    const updatedStages = [...taskStages];
    const taskToMove = updatedStages[stageIndex][taskIndex];

    updatedStages[stageIndex].splice(taskIndex, 1);
    updatedStages[stageIndex + direction].push(taskToMove);

    setTaskStages(updatedStages);
  };

  return (
    <div className="kanban">
      <div className="form_layout">
        <form onSubmit={handleAdddTask}>
          <div className="form">
            <input
              className="task_input"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            ></input>
            <button className="addTask_btn">Add Task</button>
          </div>
        </form>
      </div>
      <div className="containers">
        {stages.map((stage, stageIndex) => {
          return (
            <div className="container" key={stageIndex}>
              <h4>{stage}</h4>
              <ul>
                {taskStages[stageIndex].map((task, taskIndex) => {
                  return (
                    <li key={taskIndex}>
                      <div>
                        <span>{task.name}</span>
                        <span>
                          <button
                            disabled={stageIndex === 0}
                            onClick={() => moveTask(stageIndex, taskIndex, -1)}
                          >
                            ←
                          </button>
                          <button
                            disabled={stageIndex === 3}
                            onClick={() => moveTask(stageIndex, taskIndex, 1)}
                          >
                            →
                          </button>
                          <button>X</button>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      Kanban
    </div>
  );
}
