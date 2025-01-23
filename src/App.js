import React from 'react';
import WaveGrid from './WaveGrid';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Bouncing Wave Grid</h1>
      <WaveGrid rows={15} cols={20} />
      <footer>
        <p>Enjoy the wave!</p>
      </footer>
    </div>
  );
};

export default App;