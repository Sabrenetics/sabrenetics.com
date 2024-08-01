// src/pages/Events.js

import React from 'react';

const Events = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Events</h1>
          </div>
          <br />
          <h3>All Events</h3>
          <p>
            Our Events are hosted locally in Sydney, Australia but are accessible through Google Meets on the day.
          </p>
          <br />
          <h3>Cybernetics, Cyberware and Cyborgs Discussion group</h3>
          <p><strong>Event:</strong> Cybernetics, Cyberware and Cyborgs meetups discussion group</p>
          <p><strong>Date:</strong> Every 4th Saturday of the month</p>
          <p><strong>Time:</strong> 12:00 pm to 1:00 pm AEDT</p>
          <p><strong>Cost:</strong> Free</p>
          <p><strong>Address:</strong> Albion Place Hotel, 531 George St, Sydney, 2000, NSW, Australia</p>
          <p>
            <strong>Online link:</strong> Please advise beforehand by contacting{' '}
            <a href="mailto:support@sabrenetics.com">support@sabrenetics.com</a> or through Meetups link above before joining for us to be notified to start the Google Meet link for remote participants:
            <a href="https://meet.google.com/nwr-gkzd-eju" target="_blank" rel="noopener noreferrer">
              https://meet.google.com/nwr-gkzd-eju
            </a>
          </p>
          <p><strong>Audience:</strong> Anyone is welcome from students, to professionals, to hobbyists and more, there's something for everyone. Come join us for food and drinks.</p>
          <p>
            <strong>About:</strong> We're the Cybernetics, Cyberware, Cyborgs and transhuman discussion group. We aim to gather a community to discuss all things from the convergence of medicine, technology, engineering and philosophy. Our goal is to create scientific discourse in order to empower others along the biomedical engineering journey. We discuss all things biomedical engineering. Come join us as we host, participate and discuss in all things;
          </p>
          <ul>
            <li>Biomedical engineering & healthcare</li>
            <li>Science and Philosophy</li>
            <li>Cyberware, Prosthetics, Brain-Computer interfaces and more</li>
            <li>Cyborgs, Trans/Post-humanism</li>
            <li>Rights, Standards, and Laws</li>
            <li>Commercial and private ventures</li>
            <li>Careers and networking session</li>
            <li>Open source, volunteer, community projects of interest</li>
          </ul>
          <br />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Events;
