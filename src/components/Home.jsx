import React, { useState } from 'react';
import backgroundImage from '../assets/image.png'; // Correct image path

const LandingPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="landing-page w-full h-screen bg-black overflow-hidden relative">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Abstract Geometric Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50"></div>

      {/* Header Section */}
      <div className="w-full h-14 flex justify-between p-7 font-lugrasimo z-20 text-white relative">
        <h2 className="text-gradient">webdeveloper</h2>
        <h2 className="text-gradient">mayurchoudhary</h2>
        <h2 className="text-gradient">2002</h2>
      </div>

      {/* Main Title */}
      <div className="w-full h-72 font-lugrasimo flex justify-center items-center text-8xl p-8 z-20 text-white relative">
        <span className="text-gradient">Mayur Choudhary</span>
      </div>

      {/* Navigation Section */}
      <div className="relative w-full h-32 font-serif flex items-center justify-between p-0 z-20">
        {/* The two expanding divs for the "gate" effect */}
        <div
          className={`absolute left-0 w-full bg-black transition-all duration-500 ease-in-out ${
            hovered ? 'h-1/2 top-0' : 'h-0 top-1/2'
          }`}
        ></div>
        <div
          className={`absolute left-0 w-full bg-black transition-all duration-500 ease-in-out ${
            hovered ? 'h-1/2 bottom-0' : 'h-0 bottom-1/2'
          }`}
        ></div>

        {/* Navigation links */}
        <a
          href="#"
          className={`relative z-20 px-4 text-gradient ${hovered ? 'text-white' : 'text-gray-300'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          About
        </a>
        <a
          href="#"
          className={`relative z-20 px-4 text-gradient ${hovered ? 'text-white' : 'text-gray-300'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Projects
        </a>
        <a
          href="#"
          className={`relative z-20 px-4 text-gradient ${hovered ? 'text-white' : 'text-gray-300'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Works
        </a>
        <a
          href="#"
          className={`relative z-20 px-4 text-gradient ${hovered ? 'text-white' : 'text-gray-300'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Contact
        </a>
        {/* Span for year */}
        <span className={`relative z-20 px-4 text-gradient ${hovered ? 'text-white' : 'text-gray-300'}`}>2002</span>
      </div>
    </div>
  );
};

export default LandingPage;
