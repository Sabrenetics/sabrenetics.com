// src/pages/blogs/LearnCyberwareCourse.js

import React from 'react';

const LearnCyberwareCourse = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Learn Cyberware Course</h1>
          </div>
          <p>
            # TABLE OF CONTENTS
            <ul>
              <li><a href="#requirements">1. Requirements</a></li>
              <li><a href="#entry">2. Entry</a></li>
              <li><a href="#knowledge">3. Knowledge</a></li>
              <li><a href="#hardware">4. Hardware</a></li>
              <li><a href="#curriculum">5. Curriculum</a></li>
            </ul>
          </p>
          <p id="requirements">
            # REQUIREMENTS
            <br />
            The following items and knowledge are required to successfully pass this course.
          </p>
          <p id="entry">
            # ENTRY
            <br />
            This is a free, self paced, online course for anyone who is interested in learning about Biomedical engineering, cybernetics, 
            cyberware and cyborgs.
          </p>
          <p id="knowledge">
            ## KNOWLEDGE
            <ul>
              <li>Calculus Mathematics 1</li>
              <li>Basic programming skills</li>
              <li>High school chemistry</li>
              <li>High school physics</li>
              <li>High school biology</li>
            </ul>
          </p>
          <p id="hardware">
            ## HARDWARE
            <ul>
              <li>Arduino Uno R3</li>
              <li>Breadboard</li>
              <li>Basic semiconductor starter kit; including jumper wires, LEDs, diodes, batteries, switches, transistors, ICs, etc.</li>
              <li>Soldering starter kit; including solder iron, solder, flux, etc.</li>
              <li>Pack of Electrode pads/caps + saline fluid</li>
              <li>Access to at least an Intel i3 5th generation computer or equivalent with internet access</li>
            </ul>
          </p>
          <p id="curriculum">
            # CURRICULUM
            <ol>
              <li>Maths elementary (equivalent for ages 9 - 13)</li>
              <li>Maths for ages (equivalent for ages 13 - 18)</li>
              <li>Maths for ages (equivalent for ages 18 - 21)</li>
              <li>Physics for ages (equivalent for ages 13 - 18)</li>
              <li>Chemistry for ages (equivalent for ages 13 - 18)</li>
              <li>Biology for ages (equivalent for ages 13 - 18)</li>
              <li>Electrical Engineering</li>
              <li>Biomedical Engineering</li>
              <li>Neuroscience & EEG</li>
              <li>RFID Standards & Protocols</li>
              <li>Piercings & Implants</li>
              <li>Bodyhacking & Cyberware</li>
              <li>3D Printing & Modelling</li>
              <li>Cybernetics</li>
              <li>Cyberware</li>
              <li>Cyborgs</li>
              <li>Science * Philosophy</li>
              <li>Future trends & designs</li>
            </ol>
          </p>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default LearnCyberwareCourse;
