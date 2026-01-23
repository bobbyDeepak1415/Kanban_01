import { useEffect, useRef, useState } from "react";

const Demo = () => {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  return (
    <div>
      <div className="flex justify-center">
        <form>
          <input></input>
          <button>Add Item</button>
        </form>
      </div>

      <div className="bg-slate-500 flex items-center justify-center">
        {stages.map((stage, stageIndex) => {
          return (
            <div
              className="border-black border-2 margin-auto m-auto h-[70vh]"
              key={stageIndex}
            >
              <h1>{stage}</h1>

              <ul>
                {taskStages[stageIndex].map((taskStage, id) => {
                  return (
                    <li key={id}>
                      {taskStage}
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
