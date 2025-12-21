import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
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

  const skills = [
    "Brand Identity",
    "UI/UX Design",
    "Social Media Graphics",
    "Motion Design",
    "Print Design",
    "Visual Strategy",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="reveal opacity-0 relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image with glass frame */}
              <div className="glass rounded-3xl p-3 relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop"
                    alt="Graphic Designer at work"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Floating accent cards */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 animate-float hidden md:block">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-xl px-6 py-4 hidden md:block">
                <p className="font-serif text-2xl text-primary font-semibold">5+</p>
                <p className="font-sans text-xs text-muted-foreground">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <p className="reveal opacity-0 text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
              About Me
            </p>

            <h2 className="reveal opacity-0 stagger-1 font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
              Passionate About
              <br />
              <span className="italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Visual Excellence</span>
            </h2>

            <div className="reveal opacity-0 stagger-2 space-y-6 text-muted-foreground font-sans leading-relaxed">
              <p>
                With over 5 years of experience in graphic design, I specialize in creating 
                visual identities that resonate with audiences and drive meaningful engagement.
              </p>
              <p>
                My approach combines strategic thinking with creative execution, ensuring every 
                design not only looks beautiful but also serves its intended purpose effectively. 
                From brand identities to digital experiences, I bring ideas to life with 
                meticulous attention to detail.
              </p>
            </div>

            {/* Skills */}
            <div className="reveal opacity-0 stagger-3 mt-10">
              <h3 className="font-serif text-xl text-foreground mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass-card text-foreground/80 font-sans text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 stagger-4 mt-12 grid grid-cols-3 gap-4">
              {[
                { number: "50+", label: "Projects" },
                { number: "30+", label: "Clients" },
                { number: "5+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                  <span className="font-serif text-2xl md:text-3xl text-primary font-semibold block">
                    {stat.number}
                  </span>
                  <p className="font-sans text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
