import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Courses</Link></li>
        <li><Link to="/classwork">Classwork</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/registration">Registration</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
