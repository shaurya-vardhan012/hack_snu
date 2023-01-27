import React from 'react';
import './Landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faFileClipboard, faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';

const Landing = () => {
  return (
    <div className="landing-container">
        <div className="landing-heading">
            <h1>Choose your role </h1>
        </div>
        <div className="landing-main">
            <div className="landing-card">
                <FontAwesomeIcon icon={faIndustry} style={{fontSize:"90px",margin:"30px"}}/>
                <button>Manufacture</button>
            </div>
            <div className="landing-card">
                <FontAwesomeIcon icon={faFileClipboard} style={{fontSize:"90px",margin:"30px"}}/>
                <button>Distributor</button>
            </div>
            <div className="landing-card">
                <FontAwesomeIcon icon={faUser} style={{fontSize:"90px",margin:"30px"}}/>
                <button>Customer</button>
            </div>
        </div>
    </div>
  );
}

export default Landing;
