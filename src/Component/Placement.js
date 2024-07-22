import React, { useEffect, useState } from "react";
import "./Placement.css";

const Placement = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/job-description")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) =>
        console.error("Error fetching job descriptions:", error)
      );
  }, []);

  return (
    <div className="job-container">
      {tasks.map((task, index) => (
        <div key={index} className="job-card">
          <h2>{task.title}</h2>
          
          <p><h6>Description:</h6>{task.description}</p>
          
          <p><h6>Requirements:</h6>{task.requirements}</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQPmhiWThpnwVWPN3u2xYUXC1AirtZUZhhyO2Of_Yd50-ciw/viewform?usp=sf_link"
            className="apply-button"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default Placement;
