// src/pages/CyberwareCatalogue.js

import React from 'react';

const CyberwareCatalogue = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Cyberware Catalogue</h1>
          </div>
          The Cyberware catalogue is a community collaboration project to show the list of open source community projects revolving around cyberware and cyborgs as well as common, affordable chips, boards and technologies to use as well as companies of interest in the space.
          <br />
          This is a free service in order to help create a catalogue for organisations relating to biomedical engineering technologies, cyberware and cyborgs. We do not endorse any company on this list. This list was created in order to showcase the many open source community projects and companies of note in the cyberware and cyborg spaces.
          <br />
          If you have any suggestions for us to include, or remove any entries please contact us anytime at feedback@sabrenetics.com
          <br />
          You may access the Catalogue through here: <a href="https://docs.google.com/spreadsheets/d/1KDIBAYLK2JfpX8fHJy2xSZs9JTyisOBdLzTTMFEY8y4">here</a>
          <br />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default CyberwareCatalogue;
