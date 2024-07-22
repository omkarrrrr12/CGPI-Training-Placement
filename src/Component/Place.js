import React ,{useEffect}from 'react';
import './Place.css';
import placement from '../Images/Placement.jpg';
import { useNavigate } from 'react-router-dom';

const Place = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/jobportal')
  
  }
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="placements-page">
      <div className="placements-content">
        <h1><u>Placements</u></h1>
        <p>CGPI Software Private Limited, a leading provider of innovative IT solutions, has established a remarkable track record in student placements at prestigious companies across the globe.</p>

        <img src={placement} alt="Placement" className="placement-image" />

        <p>Our cutting-edge software and experienced team of placement specialists have enabled us to forge strong relationships with top industry leaders, creating exceptional opportunities for our students.</p>

        <p>Our rigorous selection process ensures that only the most promising candidates are presented to potential employers. We meticulously assess students' academic credentials, technical skills, communication abilities, and leadership potential.</p>

        <p>Our personalized approach involves tailored resume and cover letter writing, mock interviews, and industry-specific training to prepare students for the competitive job market.</p>

        

        <p>Our commitment to our students extends beyond placement. We provide ongoing support and guidance throughout their professional journeys, ensuring their continued success in the ever-evolving technology landscape.</p>

        <p>Our alumni network serves as a valuable resource for networking, mentorship, and career advancement opportunities.</p>

        <button className="explore-button" onClick={handleClick}>Explore</button>

        <p>By partnering with CGPI Software Private Limited, students gain access to a world-class placement platform that connects them with their dream careers at renowned companies.</p>

        <p>Our unwavering dedication to excellence and our proven track record of success make us the preferred choice for students seeking a competitive edge in the competitive job market.</p>
      </div>
    </div>
  );
};

export default Place;