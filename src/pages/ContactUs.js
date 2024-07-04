// src/pages/ContactUs.js

import React from 'react';
import GoogleMapsForm from '../components/GoogleMapsForm';
import ContactUsForm from '../components/backend/ContactUsForm';

const ContactUs = () => {
  return (
    <div>
      <div className="main">
        <div className="column1"></div>
        <div className="column2">
          <div style={{ textAlign: 'center' }}>
            <h1>Contact Us</h1>
          </div>
          <br />
          <h3>Contact Us Form</h3>
          <ContactUsForm />
          <br />
          <div>
            <h3>Trading Hours (Australian Standard Eastern Time UTC+10)</h3>
            <ul>
              <li><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</li>
              <li><strong>Saturday:</strong> CLOSED</li>
              <li><strong>Sunday:</strong> CLOSED</li>
            </ul>
            <h3>Address (on appointment)</h3>
            <p>B1/13-21 Mandible St<br />Alexandria NSW 2015, Australia</p>
            <h3>Email</h3>
            <p><a href="mailto:support@sabrenetics.com">support@sabrenetics.com</a></p>
            <GoogleMapsForm />
          </div>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default ContactUs;
