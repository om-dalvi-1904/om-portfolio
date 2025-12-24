import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';

// Import your project images here
// Example: import project1Image from '../assets/project1.jpg';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Arogya Mitra",
      description: " Built a Vite + React-based clone of a Hospital Information System (HIS). The app generates a QR-coded card that allows public access to medical history in emergencies, while doctors can update patient data securely.",
      image: project1, // Replace with your actual image
      technologies: ["React", "Framer Motion", "Vite", "JWT"],
      githubLink: "https://github.com/om-dalvi-1904/arogya-mitra",
      liveLink: "https://arogya-mitra.vercel.app/"
    },
    {
      title: "Weather Dashboard",
      description: "Developed a frontend weather dashboard using APIs to show real-time data like precipitation, wind direction, and dynamic UI colors for better user experience",
      image: project2, // Replace with your actual image
      technologies: ["Open Weather", "Vite", "Tailwind"],
      githubLink: "https://github.com/yourusername/ecommerce-app",
      liveLink: "https://atmos-alert.vercel.app"
    },
    {
      title: "MERN Expense Tracker",
      description: "MERN Expense Tracker is a full-stack app using MongoDB, Express.js, React, and Node.js to let users track and categorize expenses in real time, showcasing CRUD operations and clean UI handling.",
      image: project3, // Replace with your actual image
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      githubLink: "https://github.com/om-dalvi-1904/mern-expense-tracker",
      liveLink: ""
    },
    {
      title: "Plant Analysis Tool",
      description: "Plant Analysis Tool is a web app using the Gemini API to analyze plant health. Users upload an image to get quick insights on diseases, health status, and care tips.",
      image: project4, // Replace with your actual image
      technologies: ["Express", "EJS", "Gemini API",],
      githubLink: "https://github.com/om-dalvi-1904/plant-analysis-tool",
      liveLink: ""
    },
    {
      title: "Data Spark",
      description: "Data Spark is an AI-powered PDF chat assistant that lets users upload educational documents and ask questions in a conversational interface. It delivers accurate, context-aware answers using the content of the uploaded document.",
      image: project5,
      technologies: ["React", "Gemini API", "RAG", "Python", "ChromaDB", "FastAPI"],
      githubLink: "https://github.com/om-dalvi-1904/data-spark",
      liveLink: ""
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">My <span className="highlight">Projects</span></h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;