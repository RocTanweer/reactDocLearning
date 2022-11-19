import React, { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TaskList from "./TaskList.jsx";

const initialTasks = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);
  const [id, setId] = useState(initialTasks.length);

  function handleAddTask(task) {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  }

  function handleDeleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleChangeTask(id, prop, val) {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, [prop]: val };
      } else {
        return task;
      }
    });
    setTasks(newTask);
  }

  return (
    <>
      <AddTodo handleAddTask={handleAddTask} id={id} setId={setId} />
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} handleChangeTask={handleChangeTask} />
    </>
  );
}

export default TaskApp;
