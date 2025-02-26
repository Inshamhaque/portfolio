import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 ">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Inshamul Haque
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
          Full Stack Developer | AI & Web3 Enthusiast
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Passionate about building{" "}
          <b>scalable, high-performance applications</b> using{" "}
          <b>MERN, Next.js, AI, and Web3</b>. Constantly exploring new
          technologies to push boundaries in software development.
        </p>

        {/* Highlighted Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Redis",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-indigo-100 dark:bg-indigo-500 text-indigo-800 dark:text-white text-sm font-medium px-3 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            View Work
          </a>
        </div>

        <div className="flex justify-center space-x-5">
          <a
            href="https://github.com/Inshamhaque"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/inshamul-haque"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
