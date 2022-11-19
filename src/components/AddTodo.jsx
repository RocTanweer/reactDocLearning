import React, { useState } from "react";

function AddTodo({ handleAddTask, id, setId }) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleAddButton() {
    const newTask = {
      id: id,
      title: taskTitle,
      done: false,
    };

    setId(++id);

    handleAddTask(newTask);
  }

  return (
    <>
      <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} type="text" placeholder="Add task" className="border-2 p-0.5 rounded-md mr-1" />
      <button onClick={handleAddButton} className="bg-purple-600 px-4 py-1 rounded-md text-white">
        Add
      </button>
    </>
  );
}

export default AddTodo;
