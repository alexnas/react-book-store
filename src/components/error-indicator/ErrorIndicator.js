import React from 'react';

import './ErrorIndicator.css';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <span className='boom'>BOOM!</span>
      <span>Something has gone wrong!</span>
      <span>And we have sent you SuperHelpMan!</span>
    </div>
  );
};

export default ErrorIndicator;
