import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "./components/SEO";
import OrganicNavbar from "./components/OrganicNavbar";
import { useOrganicPage } from "./hooks/useOrganicPage";
import "./LandingPage.css";
import {
  Play,
  Mic,
  FileText,
  Clock,
  ExternalLink,
  Heart,
  Search,
  Headphones,
  Video,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* INTERNAL COMPONENTS                                                        */
/* -------------------------------------------------------------------------- */

const MediaCard = ({
  type,
  title,
  author,
  duration,
  image,
  category,
}) => {
  const getTypeIcon = () => {
    switch (type) {
      case "Video":
        return <Video size={16} />;
      case "Podcast":
        return <Mic size={16} />;
      case "Article":
        return <FileText size={16} />;
      default:
        return <Play size={16} />;
    }
  };

  const getTypeStyle = () => {
    switch (type) {
      case "Video":
        return { background: 'var(--color-accent-100)', color: 'var(--color-accent-700)' };
      case "Podcast":
        return { background: 'var(--color-accent-2-100)', color: 'var(--color-accent-2-800)' };
      case "Article":
        return { background: 'var(--color-accent-100)', color: 'var(--color-accent-700)' };
      default:
        return { background: 'var(--color-neutral-200)', color: 'var(--color-neutral-700)' };
    }
  };

  return (
    <div data-reveal="" className="organic-feature-card organic-card rounded-[24px] overflow-hidden group flex flex-col h-full cursor-pointer" style={{ padding: 0 }}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide flex items-center gap-1"
            style={getTypeStyle()}
          >
            {getTypeIcon()} {type}
          </span>
        </div>
        {type === "Video" || type === "Podcast" ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
            <div className="w-12 h-12 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition" style={{ background: 'color-mix(in srgb, var(--color-bg) 90%, transparent)' }}>
              <Play size={20} className="fill-current ml-1" style={{ color: 'var(--color-text)' }} />
            </div>
          </div>
        ) : null}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--color-neutral-500)' }}>
            {category}
          </span>
          <span className="text-[10px] font-bold flex items-center gap-1" style={{ color: 'var(--color-neutral-500)' }}>
            <Clock size={12} /> {duration}
          </span>
        </div>

        <h3 className="text-lg font-bold mb-2 leading-snug transition" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--color-text)' }}>
          {title}
        </h3>

        <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--color-neutral-200)' }}>
          <p className="text-xs font-bold" style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)' }}>By {author}</p>
          <div className="flex gap-2">
            <button className="transition" style={{ color: 'var(--color-neutral-400)' }}>
              <Heart size={16} />
            </button>
            <button className="transition" style={{ color: 'var(--color-neutral-400)' }}>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedHero = () => (
  <div data-reveal="" className="relative rounded-[40px] overflow-hidden group cursor-pointer h-[500px] mb-16" style={{ boxShadow: 'var(--shadow-lg)' }}>
    <img
      src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      alt="Featured"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-1000"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block" style={{ background: 'var(--color-accent-400)', color: 'var(--color-accent-900)' }}>
        Featured Series
      </span>
      <h1 className="text-3xl md:text-5xl text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
        The Future of AI in Education: Opportunities & Risks
      </h1>
      <p className="text-gray-200 text-base md:text-lg mb-8 line-clamp-2">
        Join our panel of experts as they discuss how artificial intelligence is
        reshaping the classroom, personalized learning, and the ethics of
        automated grading.
      </p>

      <div className="flex items-center gap-4">
        <button className="px-8 py-3 rounded-full font-bold text-sm transition flex items-center gap-2" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
          <Play size={18} fill="currentColor" /> Watch Now
        </button>
      </div>
    </div>
  </div>
);

const mediaItems = [
  { id: 1, type: "Video", title: "Introduction to Quantum Computing for Beginners", author: "Dr. Elena K.", duration: "14 min", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", date: "Oct 28, 2025", category: "Technology" },
  { id: 2, type: "Podcast", title: "EdTech Talks Ep. 42: The Rise of Micro-Credentials", author: "NeuraliftX Team", duration: "45 min", image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", date: "Oct 25, 2025", category: "Education" },
  { id: 3, type: "Article", title: "10 Study Hacks Backed by Neuroscience", author: "Sarah Jenkins", duration: "5 min read", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", date: "Oct 22, 2025", category: "Self-Improvement" },
  { id: 4, type: "Video", title: "Live Coding: Building a React App from Scratch", author: "David Chen", duration: "1h 20m", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", date: "Oct 20, 2025", category: "Development" },
  { id: 5, type: "Article", title: "Alumni Spotlight: From Campus to CEO", author: "Community Team", duration: "8 min read", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", date: "Oct 18, 2025", category: "Community" },
  { id: 6, type: "Podcast", title: "Mental Health Awareness in Academic Pressure", author: "Dr. Lisa Ray", duration: "32 min", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", date: "Oct 15, 2025", category: "Wellness" },
];

/* -------------------------------------------------------------------------- */
/* MAIN PAGE COMPONENT                                                        */
/* -------------------------------------------------------------------------- */

const MediaPage = () => {
  const navigate = useNavigate();
  const rootRef = useOrganicPage();
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMedia = mediaItems.filter((item) => {
    const matchesTab = activeTab === "All" || item.type === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div ref={rootRef} className="landing-organic min-h-screen w-full font-sans overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      <SEO 
        title="Media" 
        description="Stay updated with NeuraliftX Media. Educational videos, podcasts, and articles on the future of AI and connected learning."
        keywords="NeuraliftX media, edtech blog, learning podcasts, educational videos"
      />

      <OrganicNavbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
        {/* Header Section */}
        <div className="py-12 text-center">
          <h1 data-reveal="" className="organic-heading text-4xl md:text-6xl mb-4 tracking-tight">
            NeuraliftX{" "}
            <span style={{ color: 'var(--color-accent)' }}>
              Media
            </span>
          </h1>
          <p data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-muted max-w-2xl mx-auto text-lg">
            Explore our curated collection of educational content, industry
            insights, and community stories.
          </p>
        </div>

        {/* Featured Hero */}
        <FeaturedHero />

        {/* Controls & Filters */}
        <div data-reveal="" className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          {/* Tabs */}
          <div className="flex p-1.5 rounded-full overflow-x-auto max-w-full" style={{ background: 'var(--color-neutral-100)', border: '1px solid var(--color-neutral-200)' }}>
            {["All", "Video", "Podcast", "Article"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-2.5 rounded-full text-sm font-bold transition whitespace-nowrap"
                style={activeTab === tab
                  ? { background: 'var(--color-accent)', color: 'var(--color-bg)' }
                  : { color: 'var(--color-neutral-600)' }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--color-neutral-400)' }}
            />
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl text-sm font-medium outline-none transition"
              style={{ 
                background: 'var(--color-neutral-100)', 
                border: '1px solid var(--color-neutral-200)',
                color: 'var(--color-text)',
                caretColor: 'var(--color-accent)'
              }}
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((item) => <MediaCard key={item.id} {...item} />)
          ) : (
            <div className="col-span-full text-center py-20 rounded-[40px] border border-dashed" style={{ background: 'var(--color-neutral-100)', borderColor: 'var(--color-neutral-300)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--color-surface)' }}>
                <Search size={32} style={{ color: 'var(--color-neutral-400)' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                No results found
              </h3>
              <p className="organic-muted">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveTab("All");
                }}
                className="mt-6 font-bold hover:underline"
                style={{ color: 'var(--color-accent)' }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="py-20 px-4 md:px-6" style={{ background: 'var(--color-neutral-900)' }}>
        <div className="max-w-4xl mx-auto text-center" style={{ color: 'var(--color-neutral-100)' }}>
          <div data-reveal="" className="inline-flex items-center justify-center p-3 rounded-2xl mb-6" style={{ background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }}>
            <Headphones size={32} style={{ color: 'var(--color-accent-300)' }} />
          </div>
          <h2 data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-heading text-3xl md:text-5xl mb-6">
            Stay in the loop.
          </h2>
          <p data-reveal="" style={{ transitionDelay: '120ms', color: 'var(--color-neutral-500)' }} className="text-lg mb-10 max-w-xl mx-auto">
            Get the latest episodes, articles, and tech insights delivered
            straight to your inbox every week.
          </p>

          <div data-reveal="" style={{ transitionDelay: '180ms' }} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl outline-none"
              style={{ 
                background: 'color-mix(in srgb, white 10%, transparent)', 
                border: '1px solid color-mix(in srgb, white 10%, transparent)',
                color: 'white',
                caretColor: 'var(--color-accent)'
              }}
            />
            <button className="organic-cta-btn-primary px-8 py-4 rounded-xl font-bold transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="organic-footer py-8 text-center text-sm border-t">
        <p className="organic-muted">© 2026 NeuraliftX Platform. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default MediaPage;
