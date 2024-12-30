import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null); // Track hovered link
    const [isClicked, setIsClicked] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const [pageName, setPageName] = useState("");
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();

    const currentPath = window.location.pathname;

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleClick = (page) => {
        if (`/${page.toLowerCase()}` === currentPath) {
            return;
        }

        setIsClicked(true);
        setPageName(page);

        let progress = 0;
        const interval = setInterval(() => {
            progress += 2;
            setPercentage(progress);

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    navigate(`/${page.toLowerCase()}`);
                    setIsClicked(false);
                    setPercentage(0);
                    setPageName("");
                }, 500);
            }
        }, 20);
    };

    return (
        <div className="w-full h-screen flex items-center justify-center overflow-hidden">
            <div 
                className="relative w-full h-32 font-serif flex items-center justify-between p-0"
            >
                {/* Gate effect expanding only when a link is hovered */}
                <div
                    className={`absolute inset-0 bg-black z-10 transition-all`} 
                    style={{
                        transform: hoveredLink ? 'scaleY(1)' : 'scaleY(0)', // Expand on link hover
                        transformOrigin: 'center',
                        position: 'absolute',
                        height: '100%',
                        transitionDuration: '1.5s',
                    }}
                ></div>

                {/* Page name when clicked */}
                {isClicked && (
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl z-50">
                        {`Going to ${pageName}`}
                    </div>
                )}

                {/* Loading percentage near cursor */}
                {isClicked && (
                    <div 
                        className="fixed text-white text-lg z-50 pointer-events-none"
                        style={{
                            left: cursorPosition.x + 20,
                            top: cursorPosition.y + 20,
                        }}
                    >
                        {percentage}%
                    </div>
                )}

                {/* Navigation links */}
                <nav className="relative z-20 w-full flex justify-between p-0">
                    {['About', 'Projects', 'Home', 'Contact'].map((page) => (
                        <Link
                            key={page}
                            to="#"
                            className={`px-4 ${hoveredLink ? 'text-white' : 'text-black'} transition-colors duration-300`}
                            onClick={() => handleClick(page)}
                            onMouseEnter={() => setHoveredLink(true)} // Set hover when link is hovered
                            onMouseLeave={() => setHoveredLink(false)} // Reset hover when link is no longer hovered
                        >
                            {page}
                        </Link>
                    ))}
                    <span className={`px-4 ${hoveredLink ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                        2002
                    </span>
                </nav>
            </div>

            {/* Full screen black bar slide up effect */}
            {isClicked && (
                <div
                    className="absolute inset-0 bg-black z-20"
                    style={{
                        transform: isClicked ? 'scaleY(1)' : 'scaleY(0)',
                        transitionDuration: '1.5s',
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        transformOrigin: 'top',
                    }}
                ></div>
            )}
        </div>
    );
};

export default Navbar;
