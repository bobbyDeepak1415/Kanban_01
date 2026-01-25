import React, { useState } from "react";

function Demo() {
  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const [newTask, setNewTask] = useState("");

  const [dragData, setDragData] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    const updatedStages = structuredClone(taskStages);

    const task = { name: newTask.trim(), stage: 0 };
    updatedStages[0].push(task);

    setTaskStages(updatedStages);
    setNewTask("");
  };
  const handleDrop = (stageIndex) => {
    if (!dragData) return;

    const updatedStages = taskStages.map((stage) => [...stage]);

    const { stageIndex: fromStage, taskIndex } = dragData;

    if (fromStage === stageIndex) return;

    const [movedTask] = updatedStages[fromStage].splice(taskIndex, 1);

    updatedStages[stageIndex].push(movedTask);

    setTaskStages(updatedStages);
    setDragData(null);
  };

  const handleDelete = (stageIndex, taskIndex) => {
    const updatedStages = structuredClone(taskStages);

    updatedStages[stageIndex].splice(taskIndex, 1);

    setTaskStages(updatedStages);
  };

  const moveTask = (stageIndex, taskIndex, direction) => {
    const updatedStages = structuredClone(taskStages);

    const movedTask = updatedStages[stageIndex][taskIndex];

    updatedStages[stageIndex + direction].push(movedTask);
    updatedStages[stageIndex].splice(taskIndex, 1);
    setTaskStages(updatedStages);
  };

  return (
    <div className="flex flex-col bg-slate-800 h-[100vh]">
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
              onDrop={() => handleDrop(stageIndex)}
              onDragOver={(e) => e.preventDefault()}
              className="items-center flex flex-col h-[80vh] border-black border-2 w-[20vw] m-auto"
              key={stageIndex}
            >
              <h1 className="my-2 border-b-2 text-white ">{stage}</h1>
              <ul>
                {taskStages[stageIndex].map((task, taskIndex) => {
                  return (
                    <li
                      className="flex gap-3"
                      draggable
                      onDragStart={() => setDragData({ stageIndex, taskIndex })}
                      key={taskIndex}
                    >
                      <span>{task.name}</span>
                      <span>
                        <button
                          onClick={() => moveTask(stageIndex, taskIndex, -1)}
                        >
                          ⬅️
                        </button>
                        <button
                          onClick={() => moveTask(stageIndex, taskIndex, 1)}
                        >
                          ➡️
                        </button>
                        <button
                          onClick={() => handleDelete(stageIndex, taskIndex)}
                        >
                          ❌
                        </button>
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
