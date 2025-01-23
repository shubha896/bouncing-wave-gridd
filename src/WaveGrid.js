// src/WaveGrid.js
import React, { useEffect, useState, useCallback } from 'react';
import './WaveGrid.css'; // Create a CSS file for styling

const WaveGrid = ({ rows, cols }) => {
  const [grid, setGrid] = useState([]);
  const [time, setTime] = useState(0);

  // Update the time every 100 milliseconds for smoother animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 0.1); // Increment time by 0.1 for smoother transitions
    }, 100); // Update every 100 milliseconds

    return () => clearInterval(interval);
  }, []);

  const updateGrid = useCallback(() => {
    const newGrid = Array.from({ length: rows }, (_, rowIndex) => 
      Array.from({ length: cols }, (_, colIndex) => {
        // Create a wave pattern based on row and column indices and the time
        const waveValue = Math.sin((rowIndex + colIndex) * 0.5 + time) * 0.5 + 0.5; // Adjust the wave calculation
        return Math.floor(waveValue * 255); // Scale to 0-255
      })
    );
    setGrid(newGrid);
  }, [rows, cols, time]);

  useEffect(() => {
    updateGrid();
  }, [updateGrid]);

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              style={{ backgroundColor: `rgb(0, 255, 0))` }} // Change colors dynamically
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WaveGrid;