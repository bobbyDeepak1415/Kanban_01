import React, { useState } from "react";

export default function Kanban() {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const handleAddTask = (e) => {
e.preventDefault()
    if (!newTask.trim()) return;

    const task = { name: newTask.trim(), stage: 0 };

    const updatedStages = taskStages.map((arr) => [...arr]);
    updatedStages[0].push(task);
    setTaskStages(updatedStages);
    setNewTask("");
  };

  return (
    <div className="bg-slate-400 h-[100vh]">
      <div className="form_layout">
        <h2 className="text-3xl text-center">Kanban Board</h2>
        <form
          className="flex items-center justify-center mt-2"
          onSubmit={handleAddTask}
        >
          <input
            className="border-black border"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button className="bg-slate-500 p-1 rounded-sm m-1 hover:scale-110 ease-in-out duration-150 transform transition-transform">Add Task</button>
        </form>
      </div>
      <div className="flex gap-2 justify-center items-center mt-4">
        {stages.map((stage, stageIndex) => {
          return (
            <div key={stageIndex} className="border-2 gap-2 h-[70vh] w-[20vw] m-3">
              <h4 className="text-center text-2xl underline">{stage}</h4>
              <ul>
                {taskStages[stageIndex].map((task, taskIndex) => {
                  return (
                    <li key={taskIndex}>
                      <div>
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
  );
}
