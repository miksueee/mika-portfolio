import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ["home", "about", "works"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveLink(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About Me", id: "about" },
    { href: "#works", label: "Works", id: "works" },
  ];

  const scrollToSection = (href: string, id: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-500">
      <div className="container mx-auto">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass-nav rounded-full px-6 py-3"
              : "bg-transparent py-4 px-2"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home", "home");
            }}
            className="glass-nav rounded-full px-5 py-2.5 font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight hover:scale-105 transition-transform duration-300"
          >
            Studio<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation - Glassmorphic Pill */}
          <div className="hidden md:flex items-center">
            <div className="glass-nav rounded-full px-2 py-1.5 flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href, link.id);
                  }}
                  className={`px-5 py-2 rounded-full font-sans text-sm tracking-wide transition-all duration-300 ${
                    activeLink === link.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-foreground/70 hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-4 glass-nav rounded-full hover:scale-110 transition-transform duration-300"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="glass-nav rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="glass-nav rounded-full"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-3 glass-nav rounded-2xl transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-64 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href, link.id);
                }}
                className={`px-4 py-3 rounded-xl font-sans text-base transition-all duration-300 ${
                  activeLink === link.id
                    ? "bg-background text-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-background/50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
