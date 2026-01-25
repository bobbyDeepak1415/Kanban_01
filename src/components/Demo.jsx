import React, { useState } from "react";

function Demo() {
  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask=()=>{
    
  }

  return (
    <div className="flex flex-col bg-slate-400 h-[100vh]">
      <div className="flex justify-center">
        <form className="my-10">
          <input value={newTask} onChange={(e)=>setNewTask(e.target.value)}></input>
          <button onClick={handleAddTask}>AddTask</button>
        </form>
      </div>
      <div className="flex">
        {stages.map((stage, stageIndex) => {
          return (
            <div
              className="border-black border-2 h-[80vh] w-[20vw] m-auto flex flex-col items-center"
              key={stageIndex}
            >
              <h1>{stage}</h1>

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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Demo;
