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
      icons: [<FaReact />, <SiJavascript />, <SiVite />, <SiTailwindcss />]
    },
    {
      title: "Backend",
      icons: [<FaNodeJs />, <SiExpress />, <SiMongodb />, <FaFire />, <FaDatabase />]
    },
    {
      title: "Tools & Deployment",
      icons: [<FaGitAlt />, <SiVercel />, <SiRender />]
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

        <motion.div 
          className="skills-categories-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="category-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="category-icons">
                {category.icons.map((icon, iconIndex) => (
                  <motion.div 
                    key={iconIndex} 
                    className="icon-wrapper"
                    whileHover={{ 
                      scale: 1.2,
                      color: "var(--accent-color)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;