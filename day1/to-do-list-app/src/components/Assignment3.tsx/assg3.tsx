import React, { useContext, useState } from "react";
import TaskContext from "../context/context";
import MarkTaskAsDone from "./MarkTaskAsDone";
import RemoveTask from "./RemoveTask";
import { Navigate, useNavigate } from "react-router";

interface Task {
  text: string;
  done: boolean;
}

export default function Assg3() {
  // const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="todo-container">
      <h3 className="title">To-Do List</h3>

      <AddTask />

      <style>{`
    .todo-container {
      max-width: 500px;
      margin: 30px auto;
      padding: 20px;
      background-color: #f8f8f8;
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      font-family: "Arial", sans-serif;
    }

    .title {
      text-align: center;
      color: #333;
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .form {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .input-container {
      flex: 1;
    }

    .task-input {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.3s ease;
    }

    .task-input:focus {
      border-color: #4caf50;
    }

    .submit-button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 12px 18px;
      font-size: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .submit-button:hover {
      background-color: #45a049;
    }

    .task-list {
      margin-top: 20px;
    }

    .task-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 12px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .task-item:hover {
      transform: scale(1.02);
    }

    .task-text {
      color: #333;
      font-size: 1.1rem;
    }

     .task-text.completed {
      text-decoration: line-through;
      color: #888;
    }

    .remove-button {
      background-color: #e74c3c;
      border: none;
      color: white;
      font-size: 1.2rem;
      padding: 5px 12px;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .remove-button:hover {
      background-color: #c0392b;
    }

     .task-checkbox {
      margin-right: 10px;
    }

    .done {
      background-color: #f0f0f0;
    }
   
  `}</style>
    </div>
  );
}

function AddTask() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [taskText, setTaskText] = useState<string>(""); //use to store the task text

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskText.trim()) {
      console.log("Here i am inside the AddTask handle submit");
      setTasks([...tasks, { text: taskText, done: false }]);
      setTaskText("");
      alert("Task Added Successfully");
      navigate("/assignment-3/view-task");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-container">
        <input
          type="text"
          name="taskItem"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />
      </div>
      <button type="submit" className="submit-button">
        + Add Task
      </button>
    </form>
  );
}
