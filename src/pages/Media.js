// src/pages/Media.js

import React from 'react';
import logo_without_text from '../assets/graphics/logos/Logo_without_text.png';
import logo_default from '../assets/graphics/logos/Logo_PNG_RGB.png';
import logo_white from '../assets/graphics/logos/Logo_White_PNG.png';
import logo_black from '../assets/graphics/logos/Logo_Black_PNG.png';

const Media = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Media</h1>
          </div>
          <br />
          <h3>Free promotional images</h3>
          <p>
            View our marketing and graphics designs and logos below. Feel free to use them for your own journalism and marketing provided you recognizer copyright belongs to Sabrenetics.
            <br />
            <b>Colour theme</b>
            <br />
            Green: #8CC63F
            <br />
            Black/Grey: #404041
            <br />
            White: #FFFFFF
          </p>
          <br />
          <img src={logo_without_text} alt="Logo without text" className="logo" />
          <a href ="https://drive.google.com/file/d/1YdU_AO8AOTZQ_flLk_NKpaIYDtRXdkoh/view">Logo Without text</a>
          <br />
          <img src={logo_default} alt="Standard logo" className="logo" />
          <a href ="https://drive.google.com/file/d/1_XT62x9vEEOlGVB1IBbMkKQbJUSuWqsy/view">Standard logo</a>
          <br />
          <img src={logo_white} alt="White logo" className="logo" />
          <a href ="https://drive.google.com/file/d/1AtYcSfQ0KFxyWEP4C6qq1BdgZmLIxqf0/view">White logo</a>
          <br />
          <img src={logo_black} alt="Black logo" className="logo" />
          <a href ="https://drive.google.com/file/d/1ISjfLcF1_sOZfshNOy0JQw4fLX9fppVe/view">Black logo</a>
          <br />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Media;
