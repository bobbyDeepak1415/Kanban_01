import React, { useState } from "react";

export default function Kanban() {
  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [newTask, setNewTask] = useState("");

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const updatedStages = [...taskStages];

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

  const handleDelete=(stageIndex,taskIndex)=>{
    const updatedStages=[...taskStages]

    updatedStages[stageIndex].splice(taskIndex,1)
    setTaskStages(updatedStages)



  }

  return (
    <div className="kanban">
      <div className="form_layout">
        <form onSubmit={handleAddTask}>
          <div className="form">
            <input
              value={newTask}
              className="form_input"
              onChange={(e) => setNewTask(e.target.value)}
            ></input>
            <button className="addTask_btn">Add Task</button>
          </div>
        </form>
      </div>

      <div className="containers_layout">
        {stages.map((stage, stageIndex) => {
          return (
            <div className="container" key={stageIndex}>
              <h4>{stage}</h4>
              <ul className="task_list">
                {taskStages[stageIndex].map((task, taskIndex) => {
                  return (
                    <li key={taskIndex}>
                      <span>{task.name}</span>
                      <span>
                        <button
                          className="back_btn"
                          onClick={moveTask(stageIndex, taskIndex, -1)}
                          className="back_btn"
                        >
                          ◀
                        </button>
                        <button
                          className="forward_btn"
                          onClick={moveTask(stageIndex, taskIndex, 1)}
                          className="forward_btn"
                        >
                          ▶
                        </button>
                        <button onClick={handleDelete(stageIndex,taskIndex)} className="delete_btn">X</button>
                      </span>
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
