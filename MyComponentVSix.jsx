import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Programmatically navigate to a different route
    navigate('/another-route');
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleButtonClick}>Go to Another Route</button>
    </div>
  );
};

export default MyComponent;
