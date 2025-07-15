import React from "react";
import image from "../../assets/Image.webp";
import { HoverEffect } from "./Card-hover-effect";

const Projects = () => {
  const projects = [
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
      githubUrl: "https://github.com/Inshamhaque/taskforge",
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
        "An intuitive finance dashboard with customizable layouts and revenue prediction.",
      image: "https://source.unsplash.com/featured/?finance,dashboard",
      tags: ["React", "Recharts", "Tailwind CSS"],
      githubUrl: "https://github.com/Dhruv-ZHCET/Finance_app",
      liveUrl: "https://financeer.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Proof Of Work
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <HoverEffect projects={projects} className="px-4" />
      </div>
    </section>
  );
};

export default Projects;
