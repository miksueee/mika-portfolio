import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import PortfolioCard from "./PortfolioCard";

type Category = "all" | "social" | "web" | "video" | "branding";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  categoryLabel: string;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Nature's Essence Brand",
    category: "branding",
    categoryLabel: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1364&auto=format&fit=crop",
    description: "Complete brand identity for an organic skincare line",
  },
  {
    id: 2,
    title: "Coffee Culture Campaign",
    category: "social",
    categoryLabel: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1374&auto=format&fit=crop",
    description: "Instagram campaign for artisan coffee brand",
  },
  {
    id: 3,
    title: "Fintech App Redesign",
    category: "web",
    categoryLabel: "Web/UI Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    description: "Modern UI/UX design for mobile banking app",
  },
  {
    id: 4,
    title: "Summer Collection Launch",
    category: "video",
    categoryLabel: "Short Vids/Reels",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1470&auto=format&fit=crop",
    description: "Motion graphics for fashion brand launch",
  },
  {
    id: 5,
    title: "Wellness Studio Identity",
    category: "branding",
    categoryLabel: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1470&auto=format&fit=crop",
    description: "Minimalist branding for yoga studio",
  },
  {
    id: 6,
    title: "Tech Startup Social Kit",
    category: "social",
    categoryLabel: "Social Media",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    description: "Social media templates and graphics package",
  },
  {
    id: 7,
    title: "E-commerce Platform",
    category: "web",
    categoryLabel: "Web/UI Design",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1470&auto=format&fit=crop",
    description: "Complete e-commerce website design",
  },
  {
    id: 8,
    title: "Product Showcase Reel",
    category: "video",
    categoryLabel: "Short Vids/Reels",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1400&auto=format&fit=crop",
    description: "Dynamic product reveal animation",
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Works" },
  { key: "social", label: "Social Media Visuals" },
  { key: "web", label: "Web Design/UI" },
  { key: "video", label: "Short Vids/Reels" },
  { key: "branding", label: "Branding" },
];

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category: Category) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 200);
  };

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

  return (
    <section id="works" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[10%] w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="reveal opacity-0 stagger-1 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Selected <span className="italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 font-sans text-muted-foreground max-w-2xl mx-auto">
            A curated collection of projects showcasing my expertise across different 
            design disciplines and creative challenges.
          </p>
        </div>

        {/* Category Filters */}
        <div className="reveal opacity-0 stagger-3 flex flex-wrap justify-center gap-3 mb-12">
          <div className="glass-nav rounded-full p-1.5 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant={activeCategory === cat.key ? "filterActive" : "filter"}
                size="sm"
                onClick={() => handleCategoryChange(cat.key)}
                className="text-sm"
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-300 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {filteredItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-sans">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorksSection;
