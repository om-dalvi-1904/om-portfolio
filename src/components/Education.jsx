import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool, FaLaptopCode, FaBook } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const educationHistory = [
    {
      institution: "Pimpri Chinchwad College of Engineering",
      degree: "B. Tech. Electronics & Tele Communication",
      period: "Aug 2023 - Present",
      description: [
        "B.Tech in E&TC Engineering, focusing on software development.",
        "Engaged in web development and technical projects for practical learning."
      ],
      icon: <FaUniversity />
    },
    {
      institution: "M. I. T. Jr. College, Kothrud",
      degree: "Higher Secondary Education",
      period: "Aug 2021 - March 2023",
      description: [
        "Completed HSC with First Class (77%), specializing in Computer Science.",
        "Gained strong programming fundamentals and problem-solving skills."
      ],
      icon: <FaSchool />
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">My <span className="highlight">Education</span></h2>
          <p className="section-subtitle">Academic background and learning journey</p>
        </motion.div>

        <div className="education-timeline">
          {educationHistory.map((edu, index) => (
            <motion.div 
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="education-icon">
                {edu.icon}
              </div>
              <div className="education-content">
                <div className="education-period">{edu.period}</div>
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <ul className="education-description">
                  {edu.description.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
                {/* <div className="education-skills">
                  <div className="edu-skill-tag"><FaLaptopCode /> Programming</div>
                  <div className="edu-skill-tag"><FaBook /> Computer Science</div>
                  <div className="edu-skill-tag"><FaGraduationCap /> Engineering</div>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;