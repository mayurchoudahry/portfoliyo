import React, { useEffect, useState } from 'react';

const Transition = ({ targetPage }) => {
  const [progress, setProgress] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Increment loading progress
    const updateProgress = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30); // Adjust speed

    return () => clearInterval(updateProgress);
  }, []);

  useEffect(() => {
    // Update cursor position
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 text-white">
      {/* Target Page Text */}
      <h1 className="text-6xl font-bold absolute">{targetPage.replace('/', '') || 'Home'}</h1>

      {/* Cursor Percentage */}
      <div
        className="absolute text-lg font-bold"
        style={{
          top: cursorPosition.y + 15,
          left: cursorPosition.x + 15,
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Transition;
