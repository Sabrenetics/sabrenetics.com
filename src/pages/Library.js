// src/pages/Library.js

import React from 'react';

const Library = () => {
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
          <p>
            To the fullest extent of the law, neither the owner developers, authors, contributors, or employees here, assume any liability for any injury and/or damage to persons or property as a matter of products liability, negligence or otherwise, or from any use or operation of any methods, products, instructions, or ideas contained in the material herein.
          </p>
          <br />
          <b>Cyberware Catalogue</b>
          <br />
          The Cyberware catalogue is a community collaboration project to show the list of open source community projects revolving around cyberware and cyborgs as well as common, affordable chips, boards and technologies to use as well as companies of interest in the space.
          <br />
          This is a free service in order to help create a catalogue for organisations relating to biomedical engineering technologies, cyberware and cyborgs. We do not endorse any company on this list. This list was created in order to showcase the many open source community projects and companies of note in the cyberware and cyborg spaces.
          <br />
          If you have any suggestions for us to include, or remove any entries please contact us anytime at feedback@sabrenetics.com
          <br />
          You may access the Catalogue through here: <a href="https://docs.google.com/spreadsheets/d/1KDIBAYLK2JfpX8fHJy2xSZs9JTyisOBdLzTTMFEY8y4">here</a>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Library;
