import React, { useEffect, useState, useCallback } from 'react';
import './WaveGrid.css';

const WaveGrid = ({ rows, cols }) => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const initialGrid = Array.from({ length: rows }, () => Array(cols).fill('#ffffff'));
    setGrid(initialGrid);
    const interval = setInterval(() => {
      updateGrid();
    }, 500); // Change the wave every 500ms

    return () => clearInterval(interval);
  }, [rows, cols]);

  const updateGrid = useCallback(() => {
    setGrid((prevGrid) => 
      prevGrid.map((row, rowIndex) => 
        row.map((cell, colIndex) => {
          const waveValue = Math.sin((rowIndex + colIndex + Date.now() / 1000) * 0.5);
          const color = waveValue > 0 ? `rgba(0, 255, 0, ${waveValue})` : `rgba(255, 0, 0, ${-waveValue})`;
          return color;
        })
      )
    );
  }, []);

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <div key={colIndex} className="cell" style={{ backgroundColor: color }} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WaveGrid;