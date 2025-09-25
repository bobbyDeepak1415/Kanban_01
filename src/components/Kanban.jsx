import React, { useState } from "react";

export default function Kanban() {
  const [newTask, setNewTask] = useState("");

  const stages = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [taskStages, setTaskStages] = useState([[], [], [], []]);

  
  return (
    <div className="kanban">
      <div className="form_layout">
        <form onSubmit={handleAddTask}></form>
      </div>
     
    </div>
  );
}
