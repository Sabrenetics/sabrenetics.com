import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ authToken, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/'); // Navigate to home page after logout
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="/assets/graphics/logos/Logo_PNG_RGB.png" alt="Sabrenetics logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        {/* <li><Link to="/events">Events</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/library">Library</Link></li> */}
        <li><Link to="/contactus">Contact us</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {!authToken ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/logout" onClick={handleLogoutClick}>Logout</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
