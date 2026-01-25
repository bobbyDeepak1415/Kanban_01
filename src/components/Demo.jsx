import React, { useState } from "react";

function Demo() {
  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  const [newTask, setNewTask] = useState("");

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
            // onClick={handleAddTask}
          >
            AddTask
          </button>
        </form>
      </div>
      <div className="flex"></div>
    </div>
  );
}

export default Demo;
