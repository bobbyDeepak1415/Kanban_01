import { useState } from "react";

const Demo = () => {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const [dragData, setDragData] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const updatedStages = taskStages.map((taskStage) => [...taskStage]);

    const task = { name: newTask.trim(), stage: 0 };

    updatedStages[0].push(task);
    setTaskStages(updatedStages);

    setNewTask("");
  };

  const handleDelete = (stageIndex, taskIndex) => {
    const updatedStages = taskStages.map((taskStage) => [...taskStage]);

    updatedStages[stageIndex].splice(taskIndex, 1);
    setTaskStages(updatedStages);
  };

  const moveTask = (stageIndex, taskIndex, direction) => {
    const updatedStages = taskStages.map((taskStage) => [...taskStage]);
    const taskToMove = updatedStages[stageIndex][taskIndex];

    updatedStages[stageIndex + direction].push(taskToMove);
    updatedStages[stageIndex].splice(taskIndex, 1);

    setTaskStages(updatedStages);
  };

  const handleDrop = (stageIndex) => {
    if (!dragData) return;

    const { stageIndex: fromStage, taskIndex } = dragData;

    const updatedStages = structuredClone(taskStages);

    if (fromStage === stageIndex) return;

    const [movedTask] = updatedStages[fromStage].splice(taskIndex, 1);

    updatedStages[stageIndex].push(movedTask);
    setTaskStages(updatedStages);
    setDragData(null);
  };

  return (
    <div className="bg-teal-300 h-[100vh]">
      <div className="flex justify-center h-[15vh]">
        <form className="m-auto" onSubmit={handleAddTask}>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button className="bg-blue-500" type="submit">
            Add Item
          </button>
        </form>
      </div>

      <div className=" flex items-center justify-center">
        {stages.map((stage, stageIndex) => {
          return (
            <div
            onDragOver={(e)=>e.preventDefault()}
            
              onDrop={() => handleDrop(stageIndex)}
              className="bg-slate-500 border-black border-2 margin-auto m-auto h-[70vh] w-[20vw] flex flex-col"
              key={stageIndex}
            >
              <h1 className="inline-block mx-auto mt-2 text-lg border-b-2 border-black">
                {stage}
              </h1>

              <ul>
                {taskStages[stageIndex].map((task, taskIndex) => {
                  return (
                    <li
                      onDragStart={() => setDragData({stageIndex,taskIndex})}
                      draggable
                      key={taskIndex}
                    >
                      <div className="flex justify-center gap-2 text-lg">
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
};

export default Demo;
