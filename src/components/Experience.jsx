import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCode, FaMobile, FaServer } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      company: "Dhanshree Constro Solutions",
      position: "Freelance Application Developer",
      period: "Nov 2023 - Feb 2024",
      description: [
        ],
      icon: <FaBuilding />
    }
    // You can add more experiences here in the future
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">Professional <span className="highlight">Experience</span></h2>
          <p className="section-subtitle">My journey in the tech industry</p>
        </motion.div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                x: isVisible ? 0 : (index % 2 === 0 ? -50 : 50) 
              }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {exp.icon}
                </div>
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-title">{exp.position}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <div className="timeline-skills">
                  <div className="skill-tag"><FaCode /> Web Development</div>
                  <div className="skill-tag"><FaMobile /> Android</div>
                  <div className="skill-tag"><FaServer /> API Integration</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;