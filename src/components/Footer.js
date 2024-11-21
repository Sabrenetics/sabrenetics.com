// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercolumn">
        <h3>Quick links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/History">History</Link></li>
          <li><Link to="/events">Events</Link></li> */}
          <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          <li><Link to="/PurchaseAndRefundPolicy">Purchase and Refund Policy</Link></li>
          <li><Link to="/termsandconditions">Terms and Conditions</Link></li>
          <li><Link to="/contactus">Contact us</Link></li>
        </ul>
      </div>
      <div className="footercolumn">
        <h3>Mission</h3>
        <p>
          "Sabrenetics is a open source community for learning all about science!"
        </p>
      </div>
      <div className="footercolumn">
        {/* Third column content goes here */}
      </div>
    </div>
  );
}

export default Footer;
