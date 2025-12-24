import { useState, useEffect } from "react";
import { X, ArrowLeft, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Background from "../../assets/page-1.png";
import skin from "../../assets/socialmedia/skincare.jpg";
import skin1 from "../../assets/socialmedia/skincare1.jpg";
import skin2 from "../../assets/socialmedia/skincare2.jpg";
import skin3 from "../../assets/socialmedia/skincareaura.jpg";
import skinvid from "../../assets/socialmedia/vidskin.mp4";
import food from "../../assets/socialmedia/food.jpg";
import food1 from "../../assets/socialmedia/food2.jpg";
import food2 from "../../assets/socialmedia/food3.jpg";
import food3 from "../../assets/socialmedia/food4.jpg";
import food4 from "../../assets/socialmedia/food5.jpg";
import food5 from "../../assets/socialmedia/food6.jpg";
import paper from "../../assets/socialmedia/sirio.jpg";
import paper1 from "../../assets/socialmedia/paper.jpg";
import paper2 from "../../assets/socialmedia/paper2.jpg";
import paper3 from "../../assets/socialmedia/paper3.jpg";
import paper4 from "../../assets/socialmedia/paper4.jpg";
import paper5 from "../../assets/socialmedia/paper1.jpg";
import paper6 from "../../assets/socialmedia/paper5.jpg";
import paper7 from "../../assets/socialmedia/paper6.jpg";
import paper8 from "../../assets/socialmedia/paper7.jpg";
import paper9 from "../../assets/socialmedia/paper8.jpg";
import paper10 from "../../assets/socialmedia/paper9.jpg";
import paper11 from "../../assets/socialmedia/paper10.jpg";
import fedri from "../../assets/socialmedia/fedri.jpg";
import fedri1 from "../../assets/socialmedia/fedri1.jpg";
import green from "../../assets/socialmedia/gogreen.jpg";
import green1 from "../../assets/socialmedia/gogreen1.jpg";
import green2 from "../../assets/socialmedia/gogreen2.jpg";
import green3 from "../../assets/socialmedia/gogreen3.jpg";
import green4 from "../../assets/socialmedia/gogreenrock.jpg";
import solar from "../../assets/socialmedia/solar.png";
import solar1 from "../../assets/socialmedia/solar1.png";
import solar2 from "../../assets/socialmedia/solarprod.png";
import solar3 from "../../assets/socialmedia/solarprod1.jpg";



type MediaType = "image" | "gif" | "video";
type Orientation = "portrait" | "square" | "landscape" | "wide" | "tall" | "horizontal";

interface MediaItem {
  id: number;
  type: MediaType;
  url: string;
  orientation: Orientation;
  alt?: string;
  caption?: string;
}

interface ProjectData {
  title: string;
  category: string;
  description: string;
  tags?: string[];
  media: MediaItem[];
  backgroundImage?: string;
}

const projectData: ProjectData = {
  title: "Creative Social Graphics",
  category: "Marketing Assets",
  description: "Visual-focused social media designs and poster-style graphics. The works explore layout, color, and composition without being tied to a single theme or campaign.",
  tags: ["Marketing Assets", "UI/UX", "Responsive Design", "Frontend Development"],
  backgroundImage: Background, 
  media: [
    {
      id: 1,
      type: "image",
      url: skin,
      orientation: "square",
      caption: "Skincare product",
    },
    {
      id: 2,
       type: "image",
      url: skin1,
      orientation: "square",
      caption: "Skincare product",
    },
    {
      id: 3,
        type: "image",
      url: skin2,
      orientation: "square",
      caption: "Skincare product",
    },
    {
      id: 4,
      type: "video",
      url: skinvid,
      orientation: "portrait",
      caption: "Simple skincare vid",
    },
    {
      id: 5,
       type: "image",
      url: skin3,
      orientation: "square",
      caption: "Skincare product",
    },
    {
      id: 6,
       type: "image",
      url: food,
      orientation: "square",
      caption: "Skincare product",
    },
      {
      id: 7,
       type: "image",
      url: food2,
      orientation: "square",
      caption: "Skincare product",
    },
      {
      id: 8,
       type: "image",
      url: food3,
      orientation: "square",
      caption: "Skincare product",
    },

      {
      id: 9,
       type: "image",
      url: food4,
      orientation: "square",
      caption: "Skincare product",
    },

     {
      id: 10,
       type: "image",
      url: food5,
      orientation: "square",
      caption: "Skincare product",
    },

    {
      id: 11,
       type: "image",
      url: food1,
      orientation: "square",
      caption: "Skincare product",
    },

    {
      id: 12,
       type: "image",
      url: paper,
      orientation: "landscape",
      caption: "Paper product",
    },

    {
      id: 13,
       type: "image",
      url: paper1,
      orientation: "square",
      caption: "Paper product",
    },

      {
      id: 14,
       type: "image",
      url: paper2,
      orientation: "square",
      caption: "Paper product",
    },

       {
      id: 15,
       type: "image",
      url: paper3,
      orientation: "square",
      caption: "Paper product",
    },

      {
      id: 16,
       type: "image",
      url: paper4,
      orientation: "square",
      caption: "Paper product",
    },

     {
      id: 17,
       type: "image",
      url: paper5,
      orientation: "portrait",
      caption: "Paper product",
    },

      {
      id: 18,
       type: "image",
      url: paper6,
      orientation: "square",
      caption: "Paper product",
    },
      {
      id: 19,
       type: "image",
      url: paper7,
      orientation: "square",
      caption: "Paper product",
    },

      {
      id: 20,
       type: "image",
      url: paper8,
      orientation: "square",
      caption: "Paper product",
    },

    {
      id: 21,
       type: "image",
      url: paper9,
      orientation: "square",
      caption: "Paper product",
    },

     {
      id: 22,
       type: "image",
      url: paper10,
      orientation: "square",
      caption: "Paper product",
    },

    {
      id: 23,
       type: "image",
      url: paper11,
      orientation: "square",
      caption: "Paper product",
    },
     {
      id: 24,
       type: "image",
      url: fedri,
      orientation: "landscape",
      caption: "Paper product",
    },
    {
      id: 25,
       type: "image",
      url: green1,
      orientation: "square",
      caption: "Paper product",
    },
    {
      id: 26,
       type: "image",
      url: green2,
      orientation: "square",
      caption: "Paper product",
    },
    {
      id: 28,
       type: "image",
      url: green4,
      orientation: "square",
      caption: "Paper product",
    },
     {
      id: 29,
       type: "image",
      url: green,
      orientation: "square",
      caption: "Paper product",
    },
     {
      id: 30,
       type: "image",
      url: green3,
      orientation: "square",
      caption: "Paper product",
    },
     {
      id: 31,
       type: "image",
      url: fedri1,
      orientation: "landscape",
      caption: "Paper product",
    },
    {
      id: 32,
       type: "image",
      url: solar,
      orientation: "landscape",
      caption: "Paper product",
    },
    {
      id: 33,
       type: "image",
      url: solar1,
      orientation: "landscape",
      caption: "Paper product",
    },
    {
      id: 34,
       type: "image",
      url: solar2,
      orientation: "square",
      caption: "Paper product",
    },
    {
      id: 35,
       type: "image",
      url: solar3,
      orientation: "square",
      caption: "Paper product",
    }
  ],
};

const SocialMediaProjectDetails = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxMedia, setLightboxMedia] = useState<MediaItem | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const openLightbox = (media: MediaItem) => {
    setLightboxMedia(media);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxMedia(null);
  };

  const goBack = () => {
    window.close();
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  };

  const getMediaClassName = (orientation: Orientation): string => {
    switch (orientation) {
      case "portrait":
        return "md:col-span-1 md:row-span-2"; // 1 column, 2 rows tall
      case "square":
        return "md:col-span-1 md:row-span-1"; // 1 column, 1 row
      case "landscape":
        return "md:col-span-2 md:row-span-1"; // 2 columns wide, 1 row
      case "wide":
        return "md:col-span-3 md:row-span-1"; // 3 columns wide, 1 row
      case "tall":
        return "md:col-span-1 md:row-span-3"; // 1 column, 3 rows tall
      case "horizontal":
        return "md:col-span-2 md:row-span-2"; // 2 columns wide, 2 rows tall (1080px × 1350px ratio)
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const renderMedia = (media: MediaItem, isLightbox: boolean = false) => {
  const className = isLightbox
    ? "w-full h-full object-cover"
    : "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105";

  if (media.type === "video") {
    return (
      <video
        src={media.url}
        className={className}
        autoPlay
        loop
        muted
        playsInline
        controls={isLightbox}
      />
    );
  }

  return (
    <img
      src={media.url}
      alt={media.alt || media.caption || projectData.title}
      className={className}
    />
  );
};

  return (
    <div className="min-h-screen bg-background relative">
      {/* Full Page Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: projectData.backgroundImage 
            ? `url(${projectData.backgroundImage})` 
            : `url(${projectData.media[0].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Sticky Navbar */}
      <nav className={`fixed top-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-500 relative`}>
        <div className="container mx-auto">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "glass-nav rounded-full px-6 py-3" : "glass-nav rounded-full px-6 py-3"
          }`}>
            {/* Back Button */}
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-sans text-sm">Back to Portfolio</span>
            </button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="glass-nav rounded-full hover:scale-110 transition-transform duration-300"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Banner with Glassmorphic Effect */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-12 z-10">
        {/* Decorative Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
        </div>

        {/* Glassmorphic Content Card */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-6 md:p-8 backdrop-blur-xl">
              <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
                {projectData.category}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up stagger-1">
                {projectData.title}
              </h1>
              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up stagger-2">
                {projectData.description}
              </p>

              {/* Tags */}
              {projectData.tags && projectData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 animate-fade-up stagger-3">
                  {projectData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-sans bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-4">
            {projectData.media.map((media) => (
              <div
                key={media.id}
                className={`group relative overflow-hidden rounded-lg bg-muted cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${getMediaClassName(
                  media.orientation
                )}`}
                onClick={() => openLightbox(media)}
              >
                {renderMedia(media)}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {media.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-sans text-sm">
                        {media.caption}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && lightboxMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10 hover:scale-110 transition-transform duration-300"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-7xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {renderMedia(lightboxMedia, true)}
            </div>

            {lightboxMedia.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-sans text-center">
                  {lightboxMedia.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaProjectDetails;