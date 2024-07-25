import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Images/Cgpi.png'; 
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleAdmin = () => {
    navigate('/addjob');
  };

  const handleRegister = () => {
    navigate('/contact');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" onClick={handleAdmin} />
      </div>
      <div className="navbar-buttons">
        <button onClick={handleRegister} className="register-button">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
