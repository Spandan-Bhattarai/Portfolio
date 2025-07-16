import React from 'react';
import { ExternalLink, Github, Shield, MessageSquare, User, Book } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Phishing Detection System",
      description: "Advanced NLP-based system that uses with machine learning to identify and prevent phishing attacks in real-time.",
      tech: ["Python", "NLP", "Machine Learning", "React", "Flask"],
      github: "#projects",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "ShadowTalk",
      description: "Secure pseudonymous video conferencing platform with end-to-end encryption and privacy-first design for sensitive communications.",
      tech: ["WebRTC", "Node.js", "Socket.io", "Cryptography", "React"],
      github: "https://github.com/Spandan-Bhattarai/Spandan-Bhattarai-ShadowTalk-Secure-Pseudonymous-Video-Conferencing",
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Personality Traits Tester",
      description: "Interactive psychological assessment tool built with modern web technologies to analyze personality traits and provide detailed insights.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Psychology APIs"],
      github: "https://github.com/Spandan-Bhattarai/Personality-Traits-Tester",
      icon: <User className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "BookParadime",
      description: "Modern book reading platform with social features, progress tracking, and personalized recommendations for book enthusiasts.",
      tech: ["Next.js", "MongoDB", "Authentication", "Tailwind CSS", "Node.js"],
      github: "https://github.com/Spandan-Bhattarai/cw1-Spandan-Bhattarai",
      icon: <Book className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Enumeration Scanner",
      description: "A Python-based GUI tool for automated subdomain and subdirectory enumeration.",
      tech: ["Flask", "Tkinter", "Enumeration", "Python"],
      github: "https://github.com/Spandan-Bhattarai/Web-Enumeration-Scanner",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Antivirus Scanner",
      description: "Python-based antivirus application that scans files for potential malware using cryptographic hashes and integrates with the VirusTotal API.",
      tech: ["Python", "Tkinter", "Hashlib", "VirusTotal APIs"],
      github: "https://github.com/Spandan-Bhattarai/Simple-Antivirus-Scanner",
      icon: <User className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest work in cybersecurity, AI, and web development. Each project represents 
            a unique challenge solved with innovative approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="flex items-center mb-4">
                <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-lg mr-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Spandan-Bhattarai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Github size={20} />
            <span>See More Projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;