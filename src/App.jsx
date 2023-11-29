import React from 'react';
import HomePage from './pages/HomePage';

// App component: The root component of the application
const App = () => {
  return (
    // Setting the div to take the full width and height of the viewport
    <div className="w-full h-full m-0 p-0">
      {/* HomePage component is included here as the main content of the app */}
      <HomePage />
    </div>
  );
};

export default App;
