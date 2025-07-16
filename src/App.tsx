import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;