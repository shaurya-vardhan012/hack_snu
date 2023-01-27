import React from 'react';
import './Landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faFileClipboard, faIndustry } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-container">
        <div className="landing-heading">
            <h1>Choose your role </h1>
        </div>
        <div className="landing-main">
            <div className="landing-card">
                <FontAwesomeIcon icon={faIndustry} style={{fontSize:"90px",margin:"30px"}}/>
                <Link to='/manufacture' target='_blank'><button>Manufacture</button></Link>
            </div>
            <div className="landing-card">
                <FontAwesomeIcon icon={faFileClipboard} style={{fontSize:"90px",margin:"30px"}}/>
                <Link to='/distributor' target='_blank'><button>Distributor</button></Link>
            </div>
            <div className="landing-card">
                <FontAwesomeIcon icon={faUser} style={{fontSize:"90px",margin:"30px"}}/>
                <Link to='/customer' target='_blank'><button>Customer</button></Link>
            </div>
        </div>
    </div>
  );
}

export default Landing;
