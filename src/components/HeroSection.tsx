import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowDown, Sparkles, Palette, PenTool } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToWorks = () => {
    document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Creative design background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-[15%] w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        
        {/* Floating glass cards */}
        <div className="absolute top-[20%] right-[10%] glass-card rounded-2xl p-4 animate-float-rotate hidden lg:block" style={{ animationDelay: "0.5s" }}>
          <Palette className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute bottom-[25%] left-[8%] glass-card rounded-2xl p-4 animate-float hidden lg:block" style={{ animationDelay: "1.5s" }}>
          <PenTool className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-[35%] left-[15%] glass-card rounded-xl p-3 animate-float-rotate hidden lg:block" style={{ animationDelay: "2.5s" }}>
          <Sparkles className="w-6 h-6 text-accent" />
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-[15%] left-[25%] w-4 h-4 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "0.3s" }} />
        <div className="absolute top-[60%] right-[20%] w-6 h-6 bg-accent/50 rounded-full animate-float" style={{ animationDelay: "1.2s" }} />
        <div className="absolute bottom-[15%] left-[30%] w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "2.1s" }} />
        
        {/* Line decorations */}
        <div className="absolute top-[40%] right-[5%] w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rotate-45 animate-shimmer" />
        <div className="absolute bottom-[40%] left-[5%] w-32 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent -rotate-12 animate-shimmer" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass Content Card */}
          <div className="glass rounded-3xl p-8 md:p-12 lg:p-16">
            {/* Tagline */}
            <p className="reveal opacity-0 text-primary font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6">
              Graphic Designer & Visual Artist
            </p>

            {/* Main Heading */}
            <h1 className="reveal opacity-0 stagger-1 font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
              Crafting Visual
              <br />
              <span className="italic text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stories</span>
            </h1>

            {/* Subtitle */}
            <p className="reveal opacity-0 stagger-2 font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Transforming ideas into compelling visual experiences through thoughtful design, 
              creative branding, and captivating digital content.
            </p>

            {/* CTA Buttons */}
            <div className="reveal opacity-0 stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" onClick={scrollToWorks}>
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                className="backdrop-blur-sm"
              >
                About Me
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2 animate-bounce">
            <span className="text-foreground/70 text-xs tracking-widest uppercase font-sans">Scroll</span>
            <ArrowDown className="w-4 h-4 text-foreground/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
