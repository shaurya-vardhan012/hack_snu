import React from 'react';
import { Link } from 'react-router-dom';

const ThreeButton = () => {
  return (
    <div>
      <Link to='/analytic'><button>Analytics</button></Link>
    </div>
  );
}

export default ThreeButton;