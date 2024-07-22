import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TaskTable .css";
import Dashboard from "./Dashboard";

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    requirements: "",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/job-description");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async () => {
    try {
      await axios.post("http://localhost:8080/job-description", newTask);
      setNewTask({ title: "", description: "", requirements: "" });
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleUpdateTask = async (id) => {
    try {
      const updatedTask = tasks.find((task) => task.id === id);
      await axios.put(
        `http://localhost:8080/job-description/${id}`,
        updatedTask
      );
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/job-description/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="task-table-container">
      <Dashboard></Dashboard>
      <div className="table-container">
        <h1>Job Description Manager</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Requirements</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <input
                    type="text"
                    value={task.title}
                    onChange={(e) => {
                      const updatedTasks = tasks.map((t) =>
                        t.id === task.id ? { ...t, title: e.target.value } : t
                      );
                      setTasks(updatedTasks);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={task.description}
                    onChange={(e) => {
                      const updatedTasks = tasks.map((t) =>
                        t.id === task.id
                          ? { ...t, description: e.target.value }
                          : t
                      );
                      setTasks(updatedTasks);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={task.requirements}
                    onChange={(e) => {
                      const updatedTasks = tasks.map((t) =>
                        t.id === task.id
                          ? { ...t, requirements: e.target.value }
                          : t
                      );
                      setTasks(updatedTasks);
                    }}
                  />
                </td>
                <td>
                  <button onClick={() => handleUpdateTask(task.id)}>
                    Update
                  </button>
                  <button onClick={() => handleDeleteTask(task.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Title"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Description"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Requirements"
                  value={newTask.requirements}
                  onChange={(e) =>
                    setNewTask({ ...newTask, requirements: e.target.value })
                  }
                />
              </td>
              <td>
                <button onClick={handleAddTask}>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
