import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-300">
            &copy; {currentYear} Inshamul Haque. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-300 mt-4 md:mt-0 flex items-center">
            Made with{" "}
            <Heart size={16} className="mx-1 text-red-500 dark:text-red-400" />{" "}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
