import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Typed from 'typed.js';
import profileImage from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const typedElementRef = useRef(null);
  const typedRef = useRef(null);
  const imageRef = useRef(null);
  
  // Motion values for image tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center (normalized from -1 to 1)
      const moveX = (e.clientX - centerX) / (rect.width / 2);
      const moveY = (e.clientY - centerY) / (rect.height / 2);
      
      // Update motion values with some damping
      x.set(moveX * 30);
      y.set(moveY * 30);
    }
  };

  const handleMouseLeave = () => {
    // Reset to center position with animation
    x.set(0);
    y.set(0);
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
              whileHover={{ scale: 1.05, boxShadow: "0 7px 20px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </motion.button>
            <motion.button 
              className="secondary-button"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(249, 115, 22, 0.1)",
                borderColor: "var(--accent-color)"
              }}
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
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={imageRef}
        >
          <motion.div 
            className="image-wrapper"
            style={{ rotateX, rotateY }}
          >
            <motion.img 
              src={profileImage} 
              alt="Profile" 
              className="hero-image"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            />
            <div className="image-backdrop"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;