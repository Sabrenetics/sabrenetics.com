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
            Scientific concepts discussed within this website may not be accurate. We are not a healthcare provider. We do not provide any medical support. We don't employ any qualified medical board practitioners. The information presented here is for research and educational purposes to the best of our knowledge and abilities. We advise you to do your own research on any concepts discussed on this website. We don't condone repeating ideas presented on this website.
          </p>
          <br />
          <br />
          <h3>The Sabrenetics Library</h3>
          <p>
            Sabrenetics is the first established organization in history dedicated to teaching science and philosophy on cybernetics, cyberware, and cyborgs. We offer a collection of free resources for both beginners and professionals. Our resources are designed to help those interested in learning more about cyberware, cyborgs, and cybernetics.
          </p>
          <br />
          <br />
          <h2>Resources</h2>
          <p>
            <a href="#!" onClick={() => navigate('/Terminologies')}>Terminologies</a>
          </p>
          <p>
            Free book: <a href="https://docs.google.com/spreadsheets/d/1KDIBAYLK2JfpX8fHJy2xSZs9JTyisOBdLzTTMFEY8y4">Cyborg Alphabet</a>
          </p>
          <br />
          <br />
          <h2>Short Courses For Beginners</h2>
          <p>
            <a href="#!" onClick={() => navigate('/LearnCompanionAIForBeginners')}>Learn Companion AI for Beginners</a>
          </p>
          <p>
            <a href="#!" onClick={() => navigate('/LearnCosmeticPiercingForBeginners')}>Learn Cosmetic Piercing for Beginners</a>
          </p>
          <p>
            <a href="#!" onClick={() => navigate('/LearnECGForBeginners')}>Learn ECG for Beginners</a>
          </p>
          <p>
            <a href="#!" onClick={() => navigate('/LearnNeuroscienceForBeginners')}>Learn Neuroscience for Beginners</a>
          </p>
          <p>
            <a href="#!" onClick={() => navigate('/LearnProgrammingForBeginners')}>Learn Programming for Beginners</a>
          </p>
          <p>
            <a href="#!" onClick={() => navigate('/LearnRFIDForBeginners')}>Learn RFID for Beginners</a>
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
