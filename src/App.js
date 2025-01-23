// src/App.js
import React from 'react';
import WaveGrid from './WaveGrid';

const App = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#282c34', height: '100vh', color: 'white' }}>
      <h1>Bouncing Wave Grid</h1>
      <WaveGrid rows={15} cols={20} />
      <p>Enjoy the dynamic wave pattern!</p>
    </div>
  );
};

export default App;