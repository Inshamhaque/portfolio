import React from "react";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 85 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Redis", level: 60 },
  ];

  const devOpsSkills = [
    { name: "Docker", level: 60 },
    { name: "Linux", level: 85 },
    { name: "AWS", level: 65 },
    { name: "CI/CD", level: 60 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {name}
        </span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-0">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Frontend Development
            </h3>
            {frontendSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Backend Development
            </h3>
            {backendSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              DevOps & Cloud
            </h3>
            {devOpsSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
