import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else if (prefersDark) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <Helmet>
        <title>Studio | Graphic Design Portfolio</title>
        <meta
          name="description"
          content="Creative graphic designer specializing in branding, UI/UX design, social media visuals, and motion graphics. View my portfolio of visual storytelling."
        />
        <meta name="keywords" content="graphic design, branding, UI design, web design, social media graphics, motion design, portfolio" />
        <meta property="og:title" content="Studio | Graphic Design Portfolio" />
        <meta property="og:description" content="Transforming ideas into compelling visual experiences through thoughtful design and creative branding." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <HeroSection />
          <AboutSection />
          <WorksSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
