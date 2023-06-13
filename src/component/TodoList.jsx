import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  // Function to edit a task
  const editTask = (index) => {
    const newTask = prompt("Enter the updated task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask;
      setTasks(updatedTasks);
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="col-md-4 m-auto mt-5 pt-5 p-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="input-group-text btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul className="p-0">
        {tasks.map((task, index) => (
          <li className="d-flex align-items-center justify-content-between mt-4" key={index}>
            <span className="border p-2 shadow-sm">{task}</span>
            <div className="edit-delete">
              <button className="btn btn-primary mx-3" onClick={() => editTask(index)}>
                <i class="bi bi-pencil-square"></i>
              </button>
              <button className="btn btn-danger" onClick={() => deleteTask(index)}>
                <i class="bi bi-trash-fill"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
