import React, { useState } from "react";

function Task({ id, title, done, handleDeleteTask, handleChangeTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  function handleSaveButton() {
    handleChangeTask(id, "title", newTitle);
    setIsEdit(false);
  }

  return (
    <li key={id} className="flex space-x-2 mt-2">
      <label>
        <input type="checkbox" checked={done} onChange={(e) => handleChangeTask(id, "done", e.target.checked)} />
        {isEdit ? <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="border-2 p-0.5 rounded-md mr-1" /> : title}
      </label>

      {isEdit ? (
        <button className="bg-blue-500 text-white px-2 rounded-md" onClick={handleSaveButton}>
          Save
        </button>
      ) : (
        <button className="bg-slate-400 text-white px-2  rounded-md" onClick={() => setIsEdit(true)}>
          Edit
        </button>
      )}
      <button className="bg-pink-600 text-white px-2  rounded-md" onClick={() => handleDeleteTask(id)}>
        Delete
      </button>
    </li>
  );
}

export default Task;
