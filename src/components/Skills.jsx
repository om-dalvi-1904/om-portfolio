import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaFire, 
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiVercel, 
  SiRender, 
  SiVite, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiBootstrap
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript />, level: 85 },
        { name: "Vite", icon: <SiVite />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 80 },
        { name: "Express", icon: <SiExpress />, level: 75 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "Firebase", icon: <FaFire />, level: 80 },
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "Vercel", icon: <SiVercel />, level: 90 },
        { name: "Render", icon: <SiRender />, level: 80 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="category-title">{category.title}</h3>
              <motion.div 
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-card"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(13, 27, 42, 0.3)"
                    }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-level-container">
                      <div 
                        className="skill-level" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;