import React from 'react';
import { useHistory } from 'react-router-dom';

const MyComponent = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Programmatically navigate to a different route
    history.push('/another-route');
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleButtonClick}>Go to Another Route</button>
    </div>
  );
};

export default MyComponent;
