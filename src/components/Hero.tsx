import React, { useState, useEffect } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const TypewriterEffect = ({ sentences }:any) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(currentSentence.substring(0, currentText.length - 1));
        
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      } else {
        setCurrentText(currentSentence.substring(0, currentText.length + 1));
        
        if (currentText.length === currentSentence.length) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? 50 : isPaused ? 2000 : Math.random() * 50 + 30);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentSentenceIndex, sentences]);

  return (
    <div className="h-16 flex items-center justify-center mb-6">
      <p className="text-md md:text-xl font-mono text-gray-700 dark:text-gray-300">
        {currentText}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
};

const Hero = () => {
  const sentences = [
    "I build & ship ideas faster than your API can 200 🚀",
    "Building cool sh*t at wasp speed 🐝⚡",
    "I ship side projects like it's a CI/CD pipeline",
    "I turn caffeine and code into full-stack magic ☕✨",
    "Ideas to production, before your merge conflict resolves.",
    "Crafting fast, clean, and slightly dangerous UIs 😎",
    "From bug to beta in record time 🧪➡️🚀"
  ];

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 ">
      <div className=" max-w-5xl mx-auto text-center">
        <p className=" text-indigo-600 dark:text-indigo-400 font-medium mb-2">
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
        
        {/* Typewriter Effect */}
        <TypewriterEffect sentences={sentences} />
        
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
        
      </div>
    </section>
  );
};

export default Hero;