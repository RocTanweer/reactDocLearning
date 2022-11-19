import React from "react";
import Task from "./Task.jsx";

function TaskList({ tasks, handleDeleteTask, handleChangeTask }) {
  return (
    <ul>
      {tasks.map((task) => {
        const { id, title, done } = task;
        return <Task key={id} id={id} title={title} done={done} handleDeleteTask={handleDeleteTask} handleChangeTask={handleChangeTask} />;
      })}
    </ul>
  );
}

export default TaskList;
