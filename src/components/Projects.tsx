import React from "react";
import { ExternalLink, Github } from "lucide-react";
import image from "../../assets/Image.webp";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Codecrux - AI-Powered CS Interview Prep SaaS",
      description:
        "An AI-driven coding interview prep platform utilizing OpenAI and LangChain.js for personalized learning.",
      image:
        "https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw",
      tags: ["Next.js", "OpenAI", "LangChain.js", "Tailwind CSS"],
      githubUrl: "https://github.com/Inshamhaque/codecrux",
      liveUrl: "https://codecrux.com",
    },
    {
      id: 2,
      title: "Uber Clone",
      description:
        "A ride-hailing platform implementing real-time ride-matching, driver assignment, and payment processing.",
      image: "https://source.unsplash.com/featured/?car,transportation",
      tags: ["React", "Node.js", "MongoDB", "Redis", "WebSockets"],
      githubUrl: "https://github.com/Inshamhaque/uber-clone",
      liveUrl: "https://uber-clone.com",
    },
    {
      id: 3,
      title: "Web3 Click-to-Earn SaaS",
      description:
        "A decentralized platform where YouTubers post thumbnails, and users earn cryptocurrency for clicking on them.",
      image: image,
      tags: ["Solidity", "Next.js", "Web3.js", "Ethereum"],
      githubUrl: "https://github.com/Inshamhaque/web3-click-to-earn",
      liveUrl: "https://web3-click.com",
    },
    {
      id: 4,
      title: "Bloggify - Blogging Platform",
      description:
        "A full-stack blogging platform with a powerful text editor and NLP-based topic tagging.",
      image: "https://source.unsplash.com/featured/?blog,writing",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/Inshamhaque/bloggify",
      liveUrl: "https://bloggify.com",
    },
    {
      id: 5,
      title: "Financeer - Finance Dashboard",
      description:
        "An intuitive finance dashboard with customizable layouts and revenue prediction",
      image: "https://source.unsplash.com/featured/?blog,writing",
      tags: ["React", "Recharts", "Tailwind CSS"],
      githubUrl: "https://github.com/Inshamhaque/bloggify",
      liveUrl: "https://bloggify.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-100 dark:bg-indigo-500 text-indigo-800 dark:text-indigo-100 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
