import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Spandan
            </span>
            <span className="text-white"> 👋</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            <span className="text-purple-400">Cybersecurity Researcher</span> | 
            <span className="text-pink-400"> AI Enthusiast</span> | 
            <span className="text-indigo-400"> Ethical Hacker</span>
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Final-year BSc (Hons) Cybersecurity & Ethical Hacking student specializing in AI and data analysis, 
            based in Kathmandu, Nepal, passionate about securing digital futures.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/Spandan-Bhattarai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/spandan-bhattarai-113209180/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:info@spandanb.com.np"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;