import React, { useState } from "react";

export default function Kanban() {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const [dragData, setDragData] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = { name: newTask.trim(), stage: 0 };

    const updatedStages = structuredClone(taskStages);

    updatedStages[0].push(task);
    setTaskStages(updatedStages);
    setNewTask("");
  };

  const moveTask = (stageIndex, taskIndex, direction) => {
    const updatedStages = taskStages.map((arr) => [...arr]);

    const taskToMove = updatedStages[stageIndex][taskIndex];

    updatedStages[stageIndex].splice(taskIndex, 1);
    updatedStages[stageIndex + direction].push(taskToMove);
    setTaskStages(updatedStages);
  };

  const handleDelete = (stageIndex, taskIndex) => {
    const updatedStages = [...taskStages];
    updatedStages[stageIndex].splice(taskIndex, 1);
    setTaskStages(updatedStages);
  };

  return (
    <div className="bg-gray-400 h-screen w-screen">
      <div className="form_layout">
        <form
          className="flex items-center justify-center"
          onSubmit={handleAddTask}
        >
          <input
            className="border-2 border-black"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          ></input>
          <button className="bg-slate-700 p-1 rounded-sm m-1 transition duration-150 transform ease-in-out hover:scale-105">
            Add Task
          </button>
        </form>
      </div>
      <div className="flex justify-center m-auto">
        {stages.map((stage, stageIndex) => {
          return (
            <div
              className="justify-center border-2 h-[70vh] w-[20vw] m-3"
              key={stageIndex}
            >
              <h4 className="text-center font-bold text-lg underline underline-offset-4">
                {stage}
              </h4>
              <ul>
                {taskStages[stageIndex].map((task, taskIndex) => {
                  return (
                    <li key={taskIndex}>
                      <div className="flex justify-center">
                        <span>{task.name}</span>
                        <span className="flex">
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
                          <button
                            onClick={() => handleDelete(stageIndex, taskIndex)}
                          >
                            X
                          </button>
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
    </div>
  );
}
