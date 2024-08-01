// src/pages/blogs/Terminologies.js

import React from "react";
import Papa from 'papaparse';

const Terminologies = () => {
  const [terms, setTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [selectedTerms, setSelectedTerms] = useState('All');

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
    setSelectedTerms(letter);
    if (letter === 'All') {
      setFilteredProducts(terms);
    } else {
      setFilteredProducts(terms.filter(product => product.letter === letter));
    }
  };

  return (
    <div>
      <div className='main'>
        <div className="column1">
        <h2>LETTERS</h2>
          <ul>
            <li onClick={() => handleLetterChange('A')}>A</li>
            <li onClick={() => handleLetterChange('B')}>B</li>
            <li onClick={() => handleLetterChange('C')}>C</li>
          </ul>
        </div>
        <div className="column2">
          <h1>{selectedLetter === 'All' ? 'All Books' : selectedLetter}</h1>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Terminologies;
