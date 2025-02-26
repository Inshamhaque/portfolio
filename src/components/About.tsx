import React from "react";
import { Code, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="text-lg text-gray-700 dark:text-gray-300 mb-12 px-4 sm:px-0">
          <p className="mb-6">
            I'm a Full Stack Developer specializing in the MERN stack and
            Next.js, with a deep interest in <b>Machine Learning and Web3</b>. I
            love building scalable applications and optimizing system
            performance.
          </p>
          <p>
            My journey in tech started with competitive programming and software
            development during college. Over time, I've expanded into
            <b>
              {" "}
              AI-driven applications, blockchain technologies, and system
              design.{" "}
            </b>
            I'm passionate about{" "}
            <b>
              writing efficient code, solving real-world problems, and
              continuously learning new technologies
            </b>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-indigo-600 dark:text-indigo-400 mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Skilled in <b>full-stack development</b>, focusing on scalable
              backend systems, real-time applications, and AI-powered solutions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-indigo-600 dark:text-indigo-400 mb-4">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Experience
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Developed and contributed to multiple{" "}
              <b>
                SaaS applications, AI-powered platforms, and decentralized Web3
                projects
              </b>
              .
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-indigo-600 dark:text-indigo-400 mb-4">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Education
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <b>Bachelor's in Computer Engineering</b> from Aligarh Muslim
              University, with a strong foundation in{" "}
              <b>Algorithms, Systems Design, and Machine Learning</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
