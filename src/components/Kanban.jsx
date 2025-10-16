import React, { useState } from "react";

export default function Kanban() {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  //   const [taskStages, setTaskStages] = useState(()=>{
  //     try{
  //       const localSaved=localStorage.getItem("kanban-tasks")

  //       return localSaved ? JSON.parse(localSaved) :[]
  //     }catch{
  //       console.log("failed fetching data")
  //       return []
  //     }
  //   });

  //   useEffect(()=>{
  // try{
  //   localStorage.setItem("kanban-tasks",JSON.stringify(taskStages))
  // }catch{
  //   console.log("failed fetching data")
  //   return []
  // }
  //   },[taskStages])

  const [dragData, setDragData] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = { name: newTask.trim(), stage: 0 };

    const updatedStages = taskStages.map((arr) => [...arr]);
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

  const handleDelete = (stageIndex, taskIndex) => {
    const updatedStages = structuredClone(taskStages);

    updatedStages[stageIndex].splice(taskIndex, 1);
    setTaskStages(updatedStages);
  };

  const handleDragStart = (stageIndex, taskIndex) => {
    setDragData({ stageIndex, taskIndex });
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleDrop = (stageIndex) => {
    if (!dragData) return;

    const updatedStages = structuredClone(taskStages);

    const { stageIndex: fromStage, taskIndex } = dragData;

    if (fromStage === stageIndex) return;

    const [movedTask] = updatedStages[fromStage].splice(taskIndex, 1);

    updatedStages[stageIndex].push(movedTask);

    setTaskStages(updatedStages);

    setDragData(null);
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
          <button className="bg-slate-500 p-1 rounded-sm m-1 hover:scale-110 ease-in-out duration-150">
            Add Task
          </button>
        </form>
      </div>
      <div className="flex gap-2 justify-center items-center mt-4">
        {stages.map((stage, stageIndex) => {
          return (
            <div
              onDragOver={allowDrop}
              onDrop={() => handleDrop(stageIndex)}
              key={stageIndex}
              className="border-2 gap-2 h-[70vh] w-[20vw] m-3"
            >
              <h4 className="text-center text-2xl underline mb-2">{stage}</h4>
              <ul>
                {taskStages[stageIndex].map((task, taskIndex) => {
                  return (
                    <li
                      draggable
                      key={taskIndex}
                      onDragStart={() => handleDragStart(stageIndex, taskIndex)}
                    >
                      <div className="flex justify-center">
                        <span className="mr-2 text-lg">{task.name}</span>
                        <span className="flex justify-center">
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
