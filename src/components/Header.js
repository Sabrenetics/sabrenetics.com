import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/graphics/logos/Logo_PNG_RGB.png';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoImage} alt="Sabrenetics logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contactus">Contact us</Link></li>
      </ul>
    </div>
  );
}

export default Header;
