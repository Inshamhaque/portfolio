import React from "react";

const Skills = () => {
  const frontendSkills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redis",
  ];

  const devOpsSkills = ["Docker", "Linux", "AWS", "CI/CD"];

  const SkillBadge = ({ name }: { name: string }) => (
    <span className="inline-block bg-indigo-100 dark:bg-indigo-500 text-indigo-800 dark:text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform">
      {name}
    </span>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-0">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              DevOps & Cloud
            </h3>
            <div className="flex flex-wrap gap-3">
              {devOpsSkills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
