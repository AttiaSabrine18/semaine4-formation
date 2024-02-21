// Toggle.js
import React, { useState } from 'react';
import '../css/Toggle.css';

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={isActive ? 'active' : 'inactive'}
      onClick={toggleButton}
    >
      Toggle
      {isActive ? <img src="img/1.jpg" width="100px" /> : ''}   
    </button>
  );
}

export default Toggle;

