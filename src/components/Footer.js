import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercolumn">
        <h3>Quick links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/History">History</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contactus">Contact us</Link></li>
        </ul>
      </div>
      <div className="footercolumn">
        <h3>Mission</h3>
        <p>
          "Sabrenetics is the world's first cyberware and cyborg clinic for research, standardisation, education, availability and support on Cyberware, Cyborgs and Transhumans."
        </p>
      </div>
      <div className="footercolumn">
        {/* Third column content goes here */}
      </div>
    </div>
  );
}

export default Footer;
