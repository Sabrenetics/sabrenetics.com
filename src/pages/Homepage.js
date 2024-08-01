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
                    Our goal is to create a open-source community on using Technology with Medicine to help others.
                    We talk about things like using 3D printers to print prosthetic arms, movement aids, or using transdermal implants
                    for sensing and diagnosis. 
                    We have free articles, books, code base repositories and events on Biomedical Engineering sciences and philosophies
                    that you're welcome to contribute to anytime!
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
