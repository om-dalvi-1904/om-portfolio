import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js'; // Use the original Typed.js library instead
import profileImage from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const typedElementRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (typedElementRef.current) {
      typedRef.current = new Typed(typedElementRef.current, {
        strings: [
          "MERN Stack Developer",
          "Freelance Web Application Developer",
          "React Specialist",
          "Junior Software Engineer",
          "Project-Based Developer"
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        if (typedRef.current) {
          typedRef.current.destroy();
        }
      };
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          data-aos="fade-right"
        >
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Om Dalvi</span>
          </h1>
          <div className="hero-typed-container">
            <span ref={typedElementRef} className="hero-typed"></span>
          </div>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
            Passionate about creating beautiful, responsive, and user-friendly web applications with modern technologies.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
            <motion.button 
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </motion.button>
            <motion.button 
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="image-wrapper">
            <motion.img 
              src={profileImage} 
              alt="Profile" 
              className="hero-image"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
            <div className="image-backdrop"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;