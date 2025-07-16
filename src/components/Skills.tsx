import React from 'react';
import { Code, Database, Shield, Cpu, Globe, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90, color: "from-yellow-400 to-green-400" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-400" },
        { name: "C", level: 80, color: "from-blue-400 to-purple-400" },
        { name: "PHP", level: 75, color: "from-purple-400 to-pink-400" },
        { name: "Bash", level: 85, color: "from-green-400 to-teal-400" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React", level: 75, color: "from-cyan-400 to-blue-400" },
        { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-cyan-400" },
        { name: "Node.js", level: 80, color: "from-green-400 to-lime-400" },
        { name: "Flask", level: 85, color: "from-red-400 to-pink-400" }
      ]
    },
    {
      title: "Cybersecurity Tools",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Burp Suite", level: 85, color: "from-orange-400 to-red-400" },
        { name: "Nessus", level: 75, color: "from-purple-400 to-pink-400" },
        { name: "Metasploit", level: 60, color: "from-red-400 to-purple-400" },
        { name: "Wireshark", level: 85, color: "from-blue-400 to-teal-400" },
        { name: "Nmap", level: 90, color: "from-green-400 to-blue-400" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "Machine Learning", level: 45, color: "from-purple-400 to-pink-400" },
        { name: "NLP", level: 70, color: "from-indigo-400 to-purple-400" },
        { name: "Numpy", level: 75, color: "from-orange-400 to-red-400" },
        { name: "BERT", level: 80, color: "from-blue-400 to-indigo-400" },
        { name: "Pandas", level: 75, color: "from-green-400 to-teal-400" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 85, color: "from-blue-400 to-cyan-400" },
        { name: "Git", level: 95, color: "from-orange-400 to-red-400" },
        { name: "MongoDB", level: 60, color: "from-green-400 to-lime-400" },
        { name: "MySQL", level: 85, color: "from-blue-400 to-purple-400" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", level: 95, color: "from-purple-400 to-pink-400" },
        { name: "Ethical Judgment", level: 90, color: "from-green-400 to-teal-400" },
        { name: "Communication", level: 85, color: "from-blue-400 to-purple-400" },
        { name: "Team Leadership", level: 80, color: "from-indigo-400 to-purple-400" },
        { name: "Research", level: 90, color: "from-pink-400 to-red-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and competencies across 
            cybersecurity, software development, and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;