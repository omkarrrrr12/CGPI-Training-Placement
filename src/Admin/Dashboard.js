import React from "react";
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const history = useNavigate();

    const handleAddJobClick = () => {
        history('/addjob');
    };

    const handleManageJobClick = () => {
        history('/tasktable');
    };

    const handleHome = () => {
      history('/');
    }

    const handleJobPortal = () => {
      history('/jobportal');
    }

  return (
    <div className="dashboard-container">
      <button className="dashboard-button" onClick={handleAddJobClick}>Add Job</button>
      <button className="dashboard-button" onClick={handleManageJobClick}>Manage Job</button>
      <button className="dashboard-button" onClick={handleHome}>Home</button>
      <button className="dashboard-button" onClick={handleJobPortal}>Job Portal</button>
    </div>
  );
};

export default Dashboard;
