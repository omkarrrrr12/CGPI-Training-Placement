import React from "react";
import "./Careers.css";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();
  
  const handleJobPortal = () => {
        navigate('/jobportal')
  }
  return (
    <div className="careers">
      <h1>Careers</h1>
      <p>
      Embark on a successful career with our comprehensive training programs, designed to enhance your skills in both basic and advanced software courses. At Getin Technologies, we empower every candidate to stay updated with the latest technological advancements. Our dedicated support ensures you follow the right path to achieve your IT dreams.
      </p>
      <button onClick={handleJobPortal}>Job Portal</button>
    </div>
  );
};

export default Careers;
