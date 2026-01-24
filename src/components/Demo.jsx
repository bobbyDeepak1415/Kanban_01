import { useEffect, useRef, useState } from "react";

const Demo = () => {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  return (
    <div className="bg-teal-300 h-[100vh]"> 
      <div className="flex justify-center h-[15vh]">
        <form className="m-auto">
          <input></input>
          <button className="bg-blue-500">Add Item</button>
        </form>
      </div>

      <div className=" flex items-center justify-center">
        {stages.map((stage, stageIndex) => {
          return (
            <div
              className="bg-slate-500 border-black border-2 margin-auto m-auto h-[70vh] w-[20vw] flex"
              key={stageIndex}
            >
              <h1 className="mx-auto mt-2 text-lg border-b-2 border-black w-fit" >{stage}</h1>

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
