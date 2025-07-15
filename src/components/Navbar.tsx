import React, { useState, useEffect } from "react";
import { motion, Transition } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import {
  Github,
  Code2,
  Linkedin,
  User,
  Home,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const transition: Transition<any> = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  displayItem,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  displayItem?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -2,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-xs text-black dark:text-white px-3 py-1 rounded-md transition-colors duration-200 flex items-center justify-center"
      >
        {displayItem || item}
      </motion.div>

      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6"
      whileHover={{
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.nav>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: React.ComponentProps<"a">) => {
  return (
    // @ts-ignore
    <motion.a
      {...rest}
      className="text-neutral-700 text-xs dark:text-neutral-200 hover:text-black block px-2 py-1 rounded-md transition-colors duration-200"
      whileHover={{
        scale: 1.02,
        x: 5,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: <Home />, href: "#home", text: "Home" },
    { name: <User />, href: "#about", text: "About" },
    { name: <Code2 />, href: "#projects", text: "Projects" },
    { name: <Github />, href: "https://www.github.com/Inshamhaque", text: "Github" },
    { name: <Linkedin />, href: "https://www.linkedin.com/in/inshamul-haque", text: "LinkedIn" },
    { name: <X />, href: "#contact", text: "X" },
  ];

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-200 dark:bg-gray-900/80 backdrop-blur-md dark:shadow-gray-800 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex justify-center items-center">
        <div className="hidden md:flex items-center space-x-4">
          <Menu setActive={setActive}>
            {navLinks.map((link) => (
              <a href={link.href} key={link.text} className="no-underline">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item={link.text}
                  displayItem={link.name}
                >
                  <div className="flex flex-col text-sm">
                    <HoveredLink>{link.text}</HoveredLink>
                  </div>
                </MenuItem>
              </a>
            ))}
          </Menu>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

const X = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 50 50"
          fill="currentColor"
        >
          <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 50 50"
          fill="white"
        >
          <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z" />
        </svg>
      )}
    </>
  );
};

export default Navbar;
