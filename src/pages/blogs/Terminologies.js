// src/pages/blogs/Terminologies.js

import React, { useState, useEffect } from "react";
import Papa from 'papaparse';

const Terminologies = () => {
  const [terms, setTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('All');

  useEffect(() => {
    fetch('/Terminologies.csv')
      .then(response => response.text())
      .then(data => {
        const parsedData = Papa.parse(data, { header: true, dynamicTyping: true }).data;
        setTerms(parsedData);
        setFilteredTerms(parsedData); // Set initial filtered terms
      })
      .catch(error => {
        console.error('Error fetching or parsing CSV file:', error);
      });
  }, []);

  const handleLetterChange = (letter) => {
    setSelectedLetter(letter);
    if (letter === 'All') {
      setFilteredTerms(terms);
    } else {
      setFilteredTerms(terms.filter(term => term.Letter === letter));
    }
  };

  return (
    <div>
      <div className='main'>
        <div className="column1">
          <h2>LETTERS</h2>
          <ul>
            <li onClick={() => handleLetterChange('All')}>All</li>
            <li onClick={() => handleLetterChange('A')}>A</li>
            <li onClick={() => handleLetterChange('B')}>B</li>
            <li onClick={() => handleLetterChange('C')}>C</li>
            <li onClick={() => handleLetterChange('D')}>D</li>
            <li onClick={() => handleLetterChange('E')}>E</li>
            <li onClick={() => handleLetterChange('F')}>F</li>
            <li onClick={() => handleLetterChange('G')}>G</li>
            <li onClick={() => handleLetterChange('H')}>H</li>
            <li onClick={() => handleLetterChange('I')}>I</li>
            <li onClick={() => handleLetterChange('J')}>J</li>
            <li onClick={() => handleLetterChange('K')}>K</li>
            <li onClick={() => handleLetterChange('L')}>L</li>
            <li onClick={() => handleLetterChange('M')}>M</li>
            <li onClick={() => handleLetterChange('N')}>N</li>
            <li onClick={() => handleLetterChange('O')}>O</li>
            <li onClick={() => handleLetterChange('P')}>P</li>
            <li onClick={() => handleLetterChange('Q')}>Q</li>
            <li onClick={() => handleLetterChange('R')}>R</li>
            <li onClick={() => handleLetterChange('S')}>S</li>
            <li onClick={() => handleLetterChange('T')}>T</li>
            <li onClick={() => handleLetterChange('U')}>U</li>
            <li onClick={() => handleLetterChange('V')}>V</li>
            <li onClick={() => handleLetterChange('W')}>W</li>
            <li onClick={() => handleLetterChange('X')}>X</li>
            <li onClick={() => handleLetterChange('Y')}>Y</li>
            <li onClick={() => handleLetterChange('Z')}>Z</li>
          </ul>
        </div>
        <div className="column2">
          <h1>{selectedLetter === 'All' ? 'All Terms' : selectedLetter}</h1>
          <ul>
            {filteredTerms.map((term, index) => (
              <li key={index}>
                <strong>{term.Terminology}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Terminologies;
