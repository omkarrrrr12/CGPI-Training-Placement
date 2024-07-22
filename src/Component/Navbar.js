import React from 'react';
import logo from '../Images/Cgpi.png'; 
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate('/addjob');
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" onClick={handleAdmin} />
      </div>
    </nav>
  );
};

export default Navbar;
