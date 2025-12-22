import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import PortfolioCard from "./PortfolioCard";
import BrandingThumbnail from "../assets/branding-thumbnail.jpg";
import SocialThumbnail from "../assets/social-thumbnail.jpg";
import PhotographyThumbnail from "../assets/photography/photography-thumbnail.jpg";

type Category = "all" | "photography" | "web" | "video" | "branding" | "social" | "marketing";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  categoryLabel: string;
  image: string;
  description: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "branding",
    categoryLabel: "Branding",
    image: BrandingThumbnail,
    description: "Complete brand identity for an organic skincare line",
    link: '/projects/branding'
  },
  {
    id: 2,
    title: "Social Media Campaign",
    category: "social",
    categoryLabel: "Social Media Visuals",
    image: SocialThumbnail,
    description: "Social media assets for a product launch",
    link: '/projects/social-media'
  },
  {
    id: 3,
    title: "Mobile Photography",
    category: "photography",
    categoryLabel: "Mobile Photography",
    image: PhotographyThumbnail,
    description: "mobile photography project for lifestyle blog",
    link: '/projects/photography'
  },
  {
    id: 4,
    title: "Web Design/UI",
    category: "web",
    categoryLabel: "Web Design/UI",
    image: SocialThumbnail,
    description: "Web Design for a tech startup",
    link: '/projects/web-design'
  },
  {
    id: 5,
    title: "Short Video Reel",
    category: "video",
    categoryLabel: "Short Vids/Reels",
    image: SocialThumbnail,
    description: "Short promotional video for social media",
    link: '/projects/video-reel'
  },
  {
    id: 6,
    title: "marketing Asset Design",
    category: "marketing",
    categoryLabel: "Marketing Assets",
    image: SocialThumbnail,
    description: "Marketing materials for a seasonal campaign",
    link: '/projects/marketing-assets'
  }

];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Works" },
  { key: "photography", label: "Mobile Photography" },
  { key: "web", label: "Web Design/UI" },
  { key: "social", label: "Social Media Visuals" },
  { key: "video", label: "Short Vids/Reels" },
  { key: "branding", label: "Branding" },
  { key: "marketing", label: "Marketing Assets" },
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 transition-all duration-300 ${
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
