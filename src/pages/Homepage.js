// src/pages/Homepage.js

import React from 'react';

const Homepage = () => {
    return (
        <div>
            <div className="main">
                <div className="column1">
                    {/* Content for left column (column1) */}
                </div>
                <div className="column2">
                    <div style={{ textAlign: 'center' }}>
                        <h1>SABRENETICS</h1>
                    </div>
                    <br />
                    <p>
                    "Sabrenetics is the world's first cyberware and cyborg clinic for research, standardisation, education, availability and support on Cyberware, Cyborgs and Transhumans."
                    </p>
                </div>
                <div className="column3">
                    {/* Content for right column (column3) */}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
