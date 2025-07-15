import React, { useEffect, useState } from "react";

const GithubContributions = () => {
  const [contributionCount, setContributionCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Inshamhaque/events/public");
        const events = await response.json();

        if (Array.isArray(events)) {
          // Basic estimation: filter PushEvents in the past year
          const lastYear = new Date();
          lastYear.setFullYear(lastYear.getFullYear() - 1);

          const count = events.filter(
            (event) =>
              event.type === "PushEvent" &&
              new Date(event.created_at) > lastYear
          ).length;

          setContributionCount(count); // This is just from recent public push events, not exact
        }
      } catch (error) {
        console.error("Failed to fetch GitHub events:", error);
      }
    };

    fetchContributions();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          GitHub Contributions
        </h2>
        <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>

        {/* {contributionCount !== null && (
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            <span className="font-semibold">{contributionCount}</span> public commits (recently)
          </p>
        )} */}
 
        <div className="overflow-auto rounded-lg ">
          <img
            src="https://ghchart.rshah.org/indigo/Inshamhaque"
            alt="GitHub contributions chart"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default GithubContributions;
