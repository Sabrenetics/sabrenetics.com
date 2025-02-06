// src/pages/Library.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const navigate = useNavigate(); // useNavigate is a React hook and should be called directly within the component, not within a nested function.

  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Library</h1>
          </div>
          <h3>Notice</h3>
          <p>
            Scientific concepts discussed within this website may not be accurate. We are not a healthcare provider. We do not provide any medical support. We don't employee any qualified medical board practitioners. The information presented here is research and education to the best of our knowledge and abilities. We advise you to do your own research on any concepts discussed in this website. We don't condone repeating ideas presented in this website.
          </p>
          <br />
          <br />
          <h2>Resources</h2>
          <p>
            <a href="#!" onClick={() => navigate('/Terminologies')}>Terminologies</a>
          </p>
          <br />
          <br />
          <h2>Short Courses For Beginners</h2>
          <p>
            <a href="#!" onClick={() => navigate('/LearnCosmeticPiercingForBeginners')}>Learn Cosmetic Piercing for beginners</a>
          </p>
          <p>
            <a href="#!" onClick={() => navigate('/LearnECGForBeginners')}>Learn ECG for beginners</a>
          </p>
          <p>
            <a href="#!" onClick={() => navigate('/LearnRFIDForBeginners')}>Learn RFID for beginners</a>
          </p>
          <p>
            <a href="#!" onClick={() => navigate('/LearnNeruoscienceForBeginners')}>Learn Neruoscience for beginners</a>
          </p>
          <br />
          <br />
          <h2>Full Courses For Professionals</h2>
          <p>
            <a href="#!" onClick={() => navigate('/LearnCyberwareCourse')}>Learn Cyberware Course</a>
          </p>
          <p>
            <a href="#!" onClick={() => navigate('/LearnBookPublishingCourse')}>Learn Book Publishing Course</a>
          </p>
          <br />
          <br />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Library;
