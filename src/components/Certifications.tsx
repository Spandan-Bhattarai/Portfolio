import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: "Fortinet NSE 1",
      issuer: "Fortinet",
      description: "Network Security Essentials certification covering fundamental security concepts and Fortinet technologies.",
      status: "Completed",
      link: "https://drive.google.com/file/d/1lLEtO74po3MEIWlbWWcrfllpL3aN5v1Z/view",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Security Blue Team: Junior Analyst",
      issuer: "Security Blue Team",
      description: "Comprehensive training in security operations, incident response, and threat analysis.",
      status: "Completed",
      link: "https://drive.google.com/file/d/1vtAsSQ6cVRvuPX838qLhM1g5inU713kP/view",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Python Programming",
      issuer: "DataCamp",
      description: "Advanced Python programming skills with focus on data analysis and machine learning applications.",
      status: "Completed",
      link: "https://www.datacamp.com/statement-of-accomplishment/course/a487a59faf623aee368e9cc75430e10ba0bf6e74?raw=1",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Associate Data Scientist",
      issuer: "DataCamp",
      description: "Core data science concepts including statistics, data visualization, and machine learning basics.",
      status: "Ongoing",
      link: "#",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Security Operation Center Course",
      issuer: "LetsDefend",
      description: "Comprehensive training focused on security operations, including threat detection, incident response, and SOC workflows",
      status: "Completed",
      link: "https://app.letsdefend.io/my-rewards/detail/22f9be41-5c50-463f-9e6c-cdc4821493a7",
      color: "from-yellow-500 to-orange-500"
    }, {
      name: "ISO/IEC 27001 Information Security Associate",
      issuer: "SkillFront",
      description: "Foundational course on information security management systems aligned with ISO/IEC 27001 standards, emphasizing risk management and compliance.",
      status: "Completed",
      link: "https://www.skillfront.com/Badges/66669034965884",
      color: "from-amber-500 to-orange-500"
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements that validate
            my expertise in cybersecurity and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`bg-gradient-to-r ${cert.color} p-3 rounded-lg mr-4`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    >
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {cert.name}
                      </h3>
                    </a>
                    <p className="text-purple-400 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`flex items-center space-x-2 ${cert.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                    <CheckCircle size={16} />
                    <span className="text-sm font-medium">{cert.status}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${cert.status === 'Completed'
                    ? 'bg-green-600/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                  {cert.status}
                </span>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/spandan-bhattarai-113209180/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Award size={20} />
            <span>See All Certifications on LinkedIn</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;