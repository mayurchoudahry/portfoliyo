import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className="bg-background text-black min-h-screen">
      {/* Navbar overlay */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-24 px-6 py-16 max-w-screen-xl mx-auto bg-background">
        <h1 className="text-4xl font-extrabold mb-8">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
              variants={textVariants}
              className="text-lg leading-relaxed"
            >
              I’m Mayur Choudhary, a passionate full-stack developer focused on building innovative solutions. I specialize in web development using modern technologies like React, Node.js, and Tailwind CSS. My goal is to merge creativity with technical expertise to create seamless, user-friendly applications.
            </motion.p>

            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
              variants={textVariants}
              className="text-lg leading-relaxed"
            >
              In addition to my work, I enjoy exploring photography, playing sports, and creating videos to express my creativity. This portfolio showcases my work and the projects I’ve been passionate about.
            </motion.p>
          </div>

          {/* Right Section - Image with Motion */}
          <div className="space-y-6">
            <motion.div
              className="overflow-hidden flex justify-center items-center relative"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
            >
              <motion.div
                style={{ background: 'linear-gradient(306deg, hsl(340, 100%, 50%), hsl(10, 100%, 50%))' }}
                className="absolute top-0 left-0 right-0 bottom-0 clip-path-custom"
              />
              <motion.div
                className="font-extrabold text-6xl text-center text-white bg-gradient-to-r from-purple-600 to-pink-500 p-8 rounded-lg"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.8 }}
                variants={cardVariants}
              >
                🧑‍💻
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Project Cards Section */}
        <motion.div className="mt-16 grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          {projects.map(({ imageUrl, link, title }, i) => (
            <Card key={i} i={i} imageUrl={imageUrl} link={link} title={title} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const textVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
}

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: 'spring', bounce: 0.4, duration: 0.8 },
  },
}

const projects = [
  {
    imageUrl: 'https://example.com/project1.jpg', // Replace with your image URL
    link: 'https://your-portfolio.com/project1', // Replace with the project link
    title: 'Project 1',
  },
  {
    imageUrl: 'https://example.com/project2.jpg', // Replace with your image URL
    link: 'https://your-portfolio.com/project2', // Replace with the project link
    title: 'Project 2',
  },
  {
    imageUrl: 'https://example.com/project3.jpg', // Replace with your image URL
    link: 'https://your-portfolio.com/project3', // Replace with the project link
    title: 'Project 3',
  },
]

const Card = ({ imageUrl, link, title, i }) => {
  const background = `#eae9ed`

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </a>
        <div className="mt-4 text-center text-xl font-bold">{title}</div>
      </motion.div>
    </motion.div>
  )
}

const cardContainer = {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  paddingTop: 20,
}

const splash = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: 'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',
    background: 'linear-gradient(306deg, hsl(200, 100%, 50%), hsl(50, 100%, 50%))', // Replace red with blue or another color
  }
  
  

  const card = {
    fontSize: 164,
    width: '100%',
    height: 430,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    background: '#f5f5f5', // White background
    boxShadow:
      '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)',
    transformOrigin: '10% 60%',
  }
  
  

export default About
