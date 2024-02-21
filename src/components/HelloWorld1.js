// HelloWorld1.js
import React, { useState } from 'react';
const HelloWorld1 = () => {
  const [message, setMessage] = useState("Hello, React!");
  const changeMessage = () => {
    setMessage("Welcome to React World!");
  };
  const resetMessage = () => {
    setMessage("Hello, React!");
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={changeMessage}>Change Message</button>
      <button onClick={resetMessage}>Reset Message</button>

    </div>
  );
}

export default HelloWorld1;
