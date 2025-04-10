import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">Digital Healthcare</div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  </nav>
);

export default Navbar;