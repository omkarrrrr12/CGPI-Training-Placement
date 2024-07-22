import React from "react";
import "./Home.css";
import img from "../Images/Home/Home.jpg";

function Home() {
  return (
      <div className="homepage-container">
        <div className="homepage-image">
          <img src={img} alt="Home" />
          <div className="homepage-text">
            <h1>Evaluate your skills,</h1>
            <h1>with CGPI</h1>
            <p>
            Our best training in both basic and advanced software courses makes you shine in the IT industry. We reinforce every candidate who craves to modernize themselves with the latest technology updates. Undoubtedly, Getin Technologies helps them find the right trail to reach their IT dreams.
            </p>
          </div>
        </div>
      </div>
  );
}

export default Home;
