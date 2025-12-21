import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

const PortfolioCard = ({ item, index }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl glass cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[var(--shadow-lg)]"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden rounded-xl m-2">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110 brightness-75" : "scale-100 brightness-100"
          }`}
        />
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-2 rounded-xl bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-primary-foreground/80 font-sans text-xs tracking-[0.2em] uppercase mb-2">
          {item.categoryLabel}
        </span>
        <h3 className="font-serif text-xl text-primary-foreground font-semibold mb-2">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-primary-foreground/70 mb-4">
          {item.description}
        </p>
        <div className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 group/link">
          <span className="font-sans text-sm">View Project</span>
          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Category Badge (always visible) */}
      <div
        className={`absolute top-5 left-5 transition-all duration-300 ${
          isHovered ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        <span className="px-4 py-1.5 glass-card text-foreground font-sans text-xs rounded-full">
          {item.categoryLabel}
        </span>
      </div>
    </div>
  );
};

export default PortfolioCard;
