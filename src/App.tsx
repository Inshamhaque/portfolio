import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import FadeIn from "./components/FadeIn";
import GithubContributions from "./components/GithubContributions";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-black transition-colors duration-300">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <FadeIn><Hero /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><About /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><GithubContributions/></FadeIn>
        
        <FadeIn><Contact /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}


export default App;
