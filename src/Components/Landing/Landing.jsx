import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className="landing-container">
        <div className="landing-heading">
            <h1>Choose your role </h1>
        </div>
        <div className="landing-main">
            <div className="landing-card">
                <button>Manufacture</button>
            </div>
            <div className="landing-card">
                <button>Distributor</button>
            </div>
            <div className="landing-card">
                <button>Customer</button>
            </div>
        </div>
    </div>
  );
}

export default Landing;
