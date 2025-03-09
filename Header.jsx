import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="now">
        <h1>Car Rental System</h1>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
