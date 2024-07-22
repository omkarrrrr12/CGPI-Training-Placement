import React from "react";
import "./Objective.css";

const Objective = () => {
  return (
    <div className="objective-container">
      <h1>Our objective</h1>
      <div className="objective-row">
        <div className="objective-services">
        <i className="fas fa-file-code"></i>
          <h2>Comprehensive Skill Enhancement</h2>
        </div>

        <div className="objective-services">
          <i className="fas fa-cubes"></i>
          <h2>Industry Ready Projects and Internships</h2>
        </div>

        <div className="objective-services">
        <i className="fas fa-laptop-code"></i>
         <h2>High Job Placement Rate</h2>
        </div>

        <div className="objective-services">
        <i className="fas fa-briefcase"></i>
          <h2>Employer Satisfaction and Feedback</h2>
        </div>

        <div className="objective-services">
        <i class="fas fa-globe"></i>
          <h2>Robust Alumni Network Development</h2>
        </div>

        <div className="objective-services">
        <i className="fas fa-network-wired"></i>
          <h2>Advanced Technical Proficiency</h2>
        </div>
      </div>
    </div>
  );
};

export default Objective;
