import React from "react";
import "./MyCard.css";
import { useNavigate } from "react-router-dom";

function MyCard() {
  const navigate = useNavigate();

  const handleOfflineTraining = () => {
    navigate('/offlinetraining');
  }

  const handleOnlineTraining = () => {
    navigate('/onlinetraining');
  }

  const handleInternship = () => {
    navigate('/internship');
  }

  const handleSoftware = () => {
    navigate('/softwaredevelopmentpage');
  }

  const handlePlacement = () => {
    navigate('/placement');
  }


  return (
    <div className="training-container">
      <div className="wavy-background">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"></path>
        </svg>
      </div>
      <h3>Training</h3>
      <div className="row">
        <div className="card">
          <div className="internship">
            <h2>Internship</h2>
            <p>
            Unlock your potential with our internships that provide hands-on experience in cutting-edge technologies. Gain real-world skills and insights that set you apart in the competitive IT industry. Join us to turn theoretical knowledge into practical expertise.
            </p>
            <button onClick={handleInternship}>Explore</button>
          </div>
        </div>
        <div className="card">
          <div className="online-training">
            <h2>Online Training</h2>
            <p>
            Experience the flexibility of online training with our comprehensive courses. Learn at your own pace, from anywhere, with access to the latest tools and resources. Stay ahead in the IT industry with our expertly designed online programs.
            </p>
            <button onClick={handleOnlineTraining}>Explore</button>
          </div>
        </div>
        <div className="card">
          <div className="offline-training">
            <h2>Offline Training</h2>
            <p>
            Master software development with our specialized courses that cover everything from foundational programming to advanced techniques. Whether you're a beginner or looking to refine your skills, our curriculum is tailored to help you succeed in the IT industry.
            </p>
            <button onClick={handleOfflineTraining}>Explore</button>
          </div>
        </div>
        <div className="card">
          <div className="online-training">
            <h2>Software Development</h2>
            <p>
            Master software development with our specialized courses that cover everything from foundational programming to advanced techniques. Whether you're a beginner or looking to refine your skills, our curriculum is tailored to help you succeed in the IT industry.
            </p>
            <button onClick={handleSoftware}>Explore</button>
          </div>
        </div>
        <div className="card">
          <div className="online-training">
            <h2>Courses</h2>
            <p>
            Our diverse range of courses cater to all levels of expertise, from beginners to advanced professionals. Stay updated with the latest trends and technologies in the IT sector. Our courses are designed to equip you with the knowledge and skills needed for a successful career.
            </p>
            <button onClick={handleOnlineTraining}>Explore</button>
          </div>
        </div>
        <div className="card">
          <div className="online-training">
            <h2>Placement</h2>
            <p>
            Kickstart your career with our dedicated placement services. We bridge the gap between education and employment by connecting you with top IT companies. Our comprehensive support ensures you're prepared to land your dream job and excel in the industry.
            </p>
            <button onClick={handlePlacement}>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
