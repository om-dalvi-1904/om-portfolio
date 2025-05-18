import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { init } from '@emailjs/browser'

// Initialize EmailJS with your user ID
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    })
  }, [])

  return (
    <div className="app">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      {/* We'll add other sections later */}
    </div>
  )
}

export default App
