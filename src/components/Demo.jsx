import React, { useState } from "react";

function Demo() {
  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    const updatedStages = structuredClone(taskStages);

    const task = { name: newTask.trim(), stage: 0 };
    updatedStages[0].push(task);

    setTaskStages(updatedStages);
    setNewTask("");
  };

  return (
    <div className="flex flex-col bg-slate-400 h-[100vh]">
      <div className="flex justify-center">
        <form className="my-10">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button
            className="bg-teal-300 ml-1 p-1 rounded-md"
            onClick={handleAddTask}
          >
            AddTask
          </button>
        </form>
      </div>
      <div className="flex">
        {stages.map((stage, stageIndex) => {
          return (
            <div
              className="items-center flex flex-col h-[80vh] border-black border-2 w-[20vw] m-auto"
              key={stageIndex}
            >
              <h1 className="my-2 border-b-2 border-black">{stage}</h1>
              <ul>
                {taskStages[stageIndex].map((task, taskIndex) => {
                  return (
                    <li key={taskIndex}>
                      <span>{task.name}</span>
                      <span>
                        <button>⬅️</button>
                        <button>➡️</button>
                        <button>❌</button>
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

export default Demo;

// "https://jsonplaceholder.typicode.com/comments",
