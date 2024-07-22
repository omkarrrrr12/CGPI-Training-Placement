import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddJob.css";
import Dashboard from "./Dashboard";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const navigate = useNavigate();

  const createJobDesc = async (e) => {
    e.preventDefault();
    const jobDescription = { title, description, requirements };

    console.log("Sending job description:", jobDescription); 

    try {
      const response = await axios.post(
        "http://localhost:8080/job-description",
        jobDescription
      );
      console.log("Response data:", response.data); //
      navigate("/");
    } catch (error) {
      console.error("There was an error creating the job!", error);
    }
  };

  return (
    <div className="task-table-container">
        <Dashboard></Dashboard>
      <div className="task-container">
        <h2 className="text-center">Add Job</h2>
        <form onSubmit={createJobDesc}>
          <div className="form-group">
            <label> Title: </label>
            <input
              placeholder="Title"
              name="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Description: </label>
            <input
              placeholder="Description"
              name="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Requirements: </label>
            <input
              placeholder="Requirements"
              name="requirements"
              className="form-control"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </div>

          <button className="btn btn-success" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
