import React, { useState } from "react";

export default function Kanban() {
  const stageNames = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [newTask, setNewTask] = useState("");

  const [stageTasks, setStageTasks] = useState([[], [], [], []]);

  return <div>Kanban</div>;
}
