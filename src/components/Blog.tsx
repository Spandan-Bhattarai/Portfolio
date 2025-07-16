import React from 'react';
import { BookOpen, ExternalLink, Calendar, Eye } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      title: "Linux Fundamental - HTB Academy",
      excerpt: "A beginner-friendly guide covering essential Linux concepts, command-line basics, and foundational system operations.",
      date: "2023-08-08",
      readTime: "17 min read",
      category: "Linux Basics",
      url: "https://spandanbhattarai.medium.com/linux-fundamental-ea74b956bc"
    },
    {
      title: "Nmap Live Host Discovery -TryHackme walkthrough",
      excerpt: "This blog discusses the importance of efficiently targeting a network and introduces the use of Nmap, a network scanning tool…",
      date: "2023-08-04",
      readTime: "11 min read",
      category: "Network Security",
      url: "https://spandanbhattarai.medium.com/nmap-nmap-live-host-discovery-tryhackme-writeup-7b8e052f84e4"
    },
    {
      title: "A dive into Mimikatz, it's creation and it's use in hacking exploits",
      excerpt: "Delpy decided to create a proof of concept called MimiKatz to demonstrate the attack he had warned Microsoft about… “Because you don’t want to fix it, I’ll show it to the world to make people aware of it,” Delpy said.",
      date: "2023-06-10",
      readTime: "4 min read",
      category: "Malware Analysis",
      url: "https://spandanbhattarai.medium.com/it-all-started-with-the-discovery-of-a-security-flaw-in-microsofts-authentication-system-37ee922665a6"
    },
    {
      "title": "Why AES-256 Remains the Cornerstone of Modern Cryptography",
      "excerpt": "AES-256 continues to be a robust and trusted encryption standard, providing critical security in an era of increasingly sophisticated cyber threats.",
      "date": "2025-06-06",
      "readTime": "11 min read",
      "category": "Cryptography / Cybersecurity",
      "url": "https://medium.com/@spandanbhattarai/why-aes-256-remains-the-cornerstone-of-modern-cryptography-92a097ea4c72"
    }    ,
    {
      title: "Ethical Decision making in Autonomous vehicles",
      excerpt: "Autonomous vehicles (AVs) are being developed to address the risk of human error…Weve seen the emergence of several ethical issues surrounding autonomous cars and trucks…",
      date: "2023-05-06",
      readTime: "5 min read",
      category: "Ethics / Autonomous Vehicles",
      url: "https://spandanbhattarai.medium.com/ethical-decision-making-in-autonomous-vehicles-28c88ddab9c5"
    },
    {
      title: "Mr. Robot CTF — Try Hack Me walkthrough",
      excerpt: "A hands-on walkthrough of the Mr. Robot CTF on TryHackMe, covering port scanning, base64 decoding, reverse shells, privilege escalation, and root access.",
      date: "2024-10-09",
      readTime: "7 min read",
      category: "CTF Walkthrough",
      url: "https://spandanbhattarai.medium.com/mr-robot-ctf-thm-3a72095a7dfb"
    }

  ];

  const categoryColors = {
    "Linux Basics": "from-green-500 to-emerald-500",
    "Network Security": "from-blue-500 to-cyan-500",
    "Malware Analysis": "from-red-500 to-pink-500",
    "Cryptography / Cybersecurity": "from-purple-500 to-indigo-500",
    "CTF Walkthrough": "from-purple-500 to-indigo-500",
    "Ethics / Autonomous Vehicles": "from-amber-500 to-yellow-500"
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Insights, tutorials, and research findings from my work in cybersecurity,
            AI, and privacy technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[article.category as keyof typeof categoryColors]
                  } text-white`}>
                  {article.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 mb-3 line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <span>{article.readTime}</span>
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
              >
                <BookOpen size={16} />
                <span>Read Article</span>
                <ExternalLink size={14} />
              </a>

              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://spandanbhattarai.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <BookOpen size={20} />
            <span>Read More on Medium</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;