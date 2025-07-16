import React from 'react';
import { GraduationCap, Shield, Brain, Users } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      period: "2020-2022",
      title: "A-Levels",
      description: "Foundation in Science and Mathematics",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      period: "2022-2025",
      title: "BSc (Hons) Cybersecurity & Ethical Hacking",
      description: "Coventry University - Currently completing degree with specialization in cybersecurity with AI, data analysis, and ethical hacking methodologies",
      icon: <Shield className="w-6 h-6" />
    },
    {
      period: "2025-Present",
      title: "Cyber Security with AI Research",
      description: "Exploring the intersection of artificial intelligence, data analysis, and cybersecurity",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a cybersecurity researcher passionate about protecting digital privacy and advancing 
            ethical AI practices. My journey spans from traditional security to cutting-edge AI applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">My Expertise</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Cybersecurity Research & Penetration Testing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Cybersecurity with AI & Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Data Analysis & Privacy-Preserving Technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Ethical Hacking & Vulnerability Assessment
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-purple-400" />
                  <span className="text-gray-300">Security First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-8 h-8 text-pink-400" />
                  <span className="text-gray-300">Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-indigo-400" />
                  <span className="text-gray-300">Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  <span className="text-gray-300">Learning</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">Educational Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-purple-500/30 last:border-l-0">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div className="bg-gradient-to-r from-gray-900/40 to-purple-900/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <span className="text-sm text-purple-400 font-medium">{item.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;