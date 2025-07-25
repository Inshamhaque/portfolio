import React from "react";
import image from "../../assets/Image.webp";
import { HoverEffect } from "./Card-hover-effect";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VisuoAI",
      description:
        "An AI-driven animation generation and editing platform using Manim and Remotion",
      image:
        "https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw",
      tags: ["Next.js", "OpenAI", "Remotion", "Manim",""],
      githubUrl: "https://github.com/Inshamhaque/visuoai",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Bloggify - Blogging Platform",
      description:
        "A full-stack Developer Blogging portfolio platform",
      image: "https://source.unsplash.com/featured/?blog,writing",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS","Github oAuth"],
      githubUrl: "https://github.com/Inshamhaque/bloggify",
      liveUrl: "https://bloggify-azure.vercel.app",
    },
    {
      id: 3,
      title: "Taskforge",
      description:
        "A decentralized platform where YouTubers post thumbnails, and users earn cryptocurrency for clicking on them.",
      image: image,
      tags: [ "Next.js", "Web3.js", "Solana Wallet Adapters","Tailwind CSS"],
      githubUrl: "https://github.com/Inshamhaque/taskforge",
      liveUrl: "https://web3-click.com",
    },
    {
      id: 4,
      title: "Uber Clone",
      description:
        "A ride-hailing platform implementing real-time ride-matching, driver assignment, and payment processing.",
      image: "https://source.unsplash.com/featured/?car,transportation",
      tags: ["React", "Node.js", "MongoDB", "Redis", "WebSockets"],
      githubUrl: "https://github.com/Inshamhaque/uber-clone",
      liveUrl: "https://uber-clone.com",
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
