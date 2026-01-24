import { useEffect, useRef, useState } from "react";

const Demo = () => {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!newTask.trim()) return;

    const task = { name: newTask.trim(), stage: 0 };

    const updatedStages = taskStages.map((arr) => [...arr]);

    updatedStages[0].push(task);

    setTaskStages(updatedStages);
    setNewTask("");
  };

  return (
    <div className="bg-teal-300 h-[100vh]">
      <div className="flex justify-center h-[15vh]">
        <form className="m-auto" onSubmit={handleAddTask}>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button className="bg-blue-500">Add Item</button>
        </form>
      </div>

      <div className=" flex items-center justify-center">
        {stages.map((stage, stageIndex) => {
          return (
            <div
              className="bg-slate-500 border-black border-2 margin-auto m-auto h-[70vh] w-[20vw] flex flex-col"
              key={stageIndex}
            >
              <h1 className="inline-block mx-auto mt-2 text-lg border-b-2 border-black">
                {stage}
              </h1>

              <ul>
                {taskStages[stageIndex].map((task, id) => {
                  return (
                    <li className="m-auto" key={id}>
                      {task.name}
                      <button>⬅️</button>
                      <button>➡️</button>
                      <button>❌</button>
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
