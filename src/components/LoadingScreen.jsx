import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ setLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setLoadingComplete(true);  // Notify that loading is complete
          return prev;
        }
      });
    }, 30); // Adjust the speed here (ms)

    return () => clearInterval(interval);
  }, [setLoadingComplete]);

  return (
    <div className="loading-screen">
      <motion.div
        className="progress-bar"
        style={{ width: `${progress}%` }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="cursor-bar"
        style={{
          left: `calc(${progress}% - 10px)`, // Moves the cursor bar with progress
        }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default LoadingScreen;
