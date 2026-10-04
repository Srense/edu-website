import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "./components/SEO";
import OrganicNavbar from "./components/OrganicNavbar";
import { useOrganicPage } from "./hooks/useOrganicPage";
import "./LandingPage.css";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Users,
  BarChart2,
  Sparkles,
  Fingerprint,
  Award,
  MessageSquare,
} from "lucide-react";

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.neuraliftx.in';

const LandingPage = () => {
  const navigate = useNavigate();
  const rootRef = useOrganicPage();

  const handleLogin = () => {
    window.location.href = `${APP_URL}/login`;
  };

  const handleSignup = () => {
    window.location.href = `${APP_URL}/signup-individual`;
  };

  const handleNexus = () => {
    window.location.href = `${APP_URL}/nexus`;
  };

  return (
    <div ref={rootRef} className="landing-organic min-h-screen w-full font-sans overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      <SEO 
        title="Home" 
        description="NeuraliftX is the next-generation AI platform ensuring human intelligence scales alongside artificial intelligence. Empowering students and faculty with personalized learning and the Intelexta Protocol."
        keywords="NeuraliftX, AI education, student LMS, personalized learning, educational technology, intelligence analytics"
      />

      {/* ─────────── NAVBAR ─────────── */}
      <OrganicNavbar />

      <main>
      {/* ─────────── HERO SECTION ─────────── */}
      <section className="relative pt-10 md:pt-20 pb-24 px-4 md:px-6 max-w-7xl mx-auto text-center">
        {/* Background Blobs */}
        <div className="organic-blob organic-blob-1 absolute top-10 left-2 w-40 h-40 md:w-72 md:h-72 mix-blend-multiply blur-3xl opacity-30" style={{ background: 'var(--color-accent-2-200)' }}></div>
        <div className="organic-blob organic-blob-2 absolute top-0 right-4 w-40 h-40 md:w-72 md:h-72 mix-blend-multiply blur-3xl opacity-30" style={{ background: 'var(--color-accent-200)' }}></div>
        <div className="organic-blob organic-blob-3 absolute bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 md:w-72 md:h-72 mix-blend-multiply blur-3xl opacity-30" style={{ background: 'var(--color-accent-2-200)' }}></div>

        <div data-reveal="" style={{ transitionDelay: '0ms' }} className="organic-tag inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] md:text-xs tracking-wider mb-6 md:mb-8">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-accent-2)' }}></span>
          Individual Learning Now Live
        </div>

        <h1 data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-heading text-4xl md:text-7xl lg:text-8xl mb-4 md:mb-8 leading-tight relative z-10">
          NeuraliftX: Learn without <br className="hidden md:block" />
          <span className="organic-accent-text" style={{ color: 'var(--color-accent)', fontSize: 'inherit' }}>
            Boundaries.
          </span>
        </h1>

        <p data-reveal="" style={{ transitionDelay: '140ms', color: 'color-mix(in srgb, var(--color-text) 72%, transparent)' }} className="text-base md:text-xl max-w-xl md:max-w-2xl mx-auto mb-8 leading-relaxed">
          As we approach the Technological Singularity, intelligence becomes the primary currency of society.
          Neuralift X ensures that human intelligence scales alongside artificial intelligence — verified, personalized, and trusted.
        </p>

        {/* CTA Buttons */}
        <div data-reveal="" style={{ transitionDelay: '220ms' }} className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
          <button
            onClick={handleSignup}
            className="btn-organic-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Start Individual Learning
          </button>

          <button
            onClick={handleNexus}
            className="btn-organic-accent2 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Explore NexusOne Hub <Users size={20} />
          </button>

          <button
            onClick={handleLogin}
            className="btn-organic-secondary px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2"
          >
            School Login
          </button>
        </div>

        {/* Dashboard Preview Mockup */}
        <div data-reveal="" style={{ transitionDelay: '300ms' }} className="mt-12 md:mt-20 relative w-full max-w-4xl md:max-w-5xl mx-auto group perspective-1000 px-2">
          <div className="organic-glow absolute -inset-1 rounded-[30px] md:rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="organic-mockup-shadow relative border-4 backdrop-blur-sm rounded-[30px] md:rounded-[40px] overflow-hidden aspect-[16/10] md:aspect-[16/9] flex text-left animate-float" style={{ background: 'var(--color-bg)', borderColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }}>
            <img
              src="https://jpgbcjejufdeysqyexeh.supabase.co/storage/v1/object/public/educonnect/avatars/image%20lms%20part.jpeg"
              alt="NeuraliftX Dashboard Preview - AI Learning Interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─────────── NEXUSONE COMMUNITY BRIDGE ─────────── */}
      <section className="organic-nexus-section py-24 px-6 relative overflow-hidden text-white">
        <div className="organic-glow-blob-1 absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
        <div className="organic-glow-blob-2 absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -ml-64 -mb-64"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div data-reveal="" style={{ transitionDelay: '0ms' }} className="organic-nexus-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8">
            <span className="organic-pulse-dot w-1.5 h-1.5 rounded-full animate-pulse"></span>
            NexusOne Social Hub
          </div>
          
          <h2 data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-heading text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight tracking-tighter">
            The Social Fabric of <br className="hidden md:block" />
            <span className="organic-nexus-accent-text">
              Modern Intelligence.
            </span>
          </h2>
          
          <p data-reveal="" style={{ transitionDelay: '140ms', color: 'var(--color-neutral-500)' }} className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Academics is only half the journey. NexusOne connects you to a global network of innovators, alumni, and peers. Build your squad, share your breakthroughs, and grow together.
          </p>
          
          <button
            data-reveal="" style={{ transitionDelay: '220ms' }}
            onClick={handleNexus}
            className="organic-nexus-cta group relative px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-all overflow-hidden inline-flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-3">
              Join the Global Community <ArrowRight size={22} />
            </span>
            <div className="organic-hover-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          {/* Teaser Icons */}
          <div data-reveal="" style={{ transitionDelay: '300ms' }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
            <div className="flex flex-col items-center gap-2">
              <Users size={28} />
              <span className="organic-stat-label text-[10px] font-black uppercase tracking-widest">Global Squads</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Sparkles size={28} />
              <span className="organic-stat-label text-[10px] font-black uppercase tracking-widest">Instant Collabs</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award size={28} />
              <span className="organic-stat-label text-[10px] font-black uppercase tracking-widest">Weekly Arena</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MessageSquare size={28} />
              <span className="organic-stat-label text-[10px] font-black uppercase tracking-widest">Direct Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FEATURES ─────────── */}
      <section id="features" className="py-20 px-4 md:px-6" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 data-reveal="" className="organic-heading text-3xl md:text-4xl mb-3">
              Everything you need to excel.
            </h2>
            <p data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-muted text-base md:text-lg">
              One platform, endless possibilities for growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<Sparkles size={32} />}
              title="Personalized Tracking"
              desc="AI-driven insights that adapt to your learning style and pace."
              iconClass="organic-icon-accent"
              delay={0}
            />
            <FeatureCard
              icon={<Users size={32} />}
              title="Collaborative Spaces"
              desc="Seamless communication across students, faculty & alumni."
              iconClass="organic-icon-accent2"
              delay={90}
            />
            <FeatureCard
              icon={<BarChart2 size={32} />}
              title="Real-time Analytics"
              desc="Instant feedback on attendance, grades, and progress."
              iconClass="organic-icon-accent"
              delay={180}
            />
            <FeatureCard
              icon={<Fingerprint size={32} />}
              title="Verifiable Output"
              desc="Through exclusive integration with the Intelexta Protocol, every student project, assignment, and report comes with a Cryptographic Integrity Report."
              iconClass="organic-icon-accent2"
              delay={270}
            />
          </div>
        </div>
      </section>

      {/* ─────────── ROLE SECTIONS ─────────── */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <RoleSection
            id="students"
            title="For Students"
            icon={<GraduationCap size={32} />}
            iconClass="organic-icon-accent"
            bgClass="organic-role-card-bg-accent"
            list={[
              "Track assignments & deadlines",
              "Visualize learning progress",
              "Gamified achievements",
            ]}
            onLogin={handleLogin}
            delay={0}
          />

          <RoleSection
            id="faculty"
            title="For Faculty"
            icon={<Users size={32} />}
            iconClass="organic-icon-accent2"
            bgClass="organic-role-card-bg-accent2"
            list={[
              "Manage courses effortlessly",
              "Automated grading tools",
              "Student performance analytics",
            ]}
            onLogin={handleLogin}
            delay={120}
          />
        </div>
      </section>

      {/* ─────────── FOOTER CTA ─────────── */}
      <section className="py-20 px-4 md:px-6 mt-10">
        <div data-reveal="" className="organic-cta-section max-w-4xl mx-auto text-center" style={{ padding: 'clamp(36px, 5vw, 72px) clamp(24px, 4vw, 64px)' }}>
          <h2 className="organic-heading text-3xl md:text-5xl mb-5 md:mb-8">
            Ready to transform your education?
          </h2>

          <p className="organic-muted text-base md:text-xl mb-10">
            Join the platform that's powering the next generation of leaders.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleSignup}
              className="organic-cta-btn-primary px-8 py-4 rounded-full font-bold text-lg transition"
            >
              Get Started Now
            </button>

            <button 
              onClick={() => navigate("/contact")}
              className="organic-cta-btn-secondary px-8 py-4 border-2 rounded-full font-bold text-lg transition"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="organic-footer border-t pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>
                <GraduationCap size={18} />
              </div>
              <span className="text-xl tracking-tight organic-heading">NeuraliftX</span>
            </div>
            <p className="organic-muted text-sm leading-relaxed max-w-xs">
              Next-generation AI platform ensuring human intelligence scales alongside artificial intelligence.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-xs" style={{ color: 'var(--color-text)' }}>Platform</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="/technology" onClick={(e) => { e.preventDefault(); navigate('/technology'); }} className="transition">Technology</a></li>
              <li><button onClick={handleLogin} className="transition text-left">School Login</button></li>
              <li><button onClick={handleSignup} className="transition text-left">Join Individual</button></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-xs" style={{ color: 'var(--color-text)' }}>Company</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} className="transition">About Us</a></li>
              <li><a href="/media" onClick={(e) => { e.preventDefault(); navigate('/media'); }} className="transition">Media & News</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-xs" style={{ color: 'var(--color-text)' }}>Legal</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="/privacy" className="transition">Privacy Policy</a></li>
              <li><a href="/terms" className="transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left" style={{ borderColor: 'var(--color-neutral-200)' }}>
          <p className="organic-muted text-xs font-medium">
            © 2026 NeuraliftX Platform • Alfirin Technologies Private Limited.
          </p>
        </div>
      </footer>
      </main>
    </div>
  );
};

/* ─────────── HELPER COMPONENTS ─────────── */

const FeatureCard = ({ icon, title, desc, iconClass, delay = 0 }) => (
  <div data-reveal="" style={{ transitionDelay: `${delay}ms` }} className="organic-feature-card organic-card p-6 md:p-8 group">
    <div
      className={`w-14 h-14 md:w-16 md:h-16 ${iconClass} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}
    >
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{title}</h3>
    <p className="organic-muted text-sm md:text-base leading-relaxed">{desc}</p>
  </div>
);

const ListItem = ({ text }) => (
  <li className="flex items-center gap-3 font-medium text-sm md:text-base" style={{ color: 'color-mix(in srgb, var(--color-text) 75%, transparent)' }}>
    <div className="organic-check-icon rounded-full p-1">
      <CheckCircle2 size={14} strokeWidth={3} />
    </div>
    {text}
  </li>
);

const RoleSection = ({ id, title, list, iconClass, bgClass, icon, onLogin, delay = 0 }) => (
  <div
    id={id}
    data-reveal="" style={{ transitionDelay: `${delay}ms` }}
    className="relative group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
  >
    <div
      className={`absolute inset-0 ${bgClass} rounded-[32px] rotate-2 group-hover:rotate-4 transition-transform duration-300`}
    ></div>

    <div className="organic-role-card relative p-8 md:p-10 rounded-[32px] z-10 h-full flex flex-col justify-between">
      <div>
        <div
          className={`w-14 h-14 md:w-16 md:h-16 ${iconClass} rounded-2xl flex items-center justify-center mb-6`}
        >
          {icon}
        </div>

        <h3 className="text-2xl md:text-3xl mb-4 organic-heading">{title}</h3>

        <ul className="space-y-3 mb-8">
          {list.map((item, i) => (
            <ListItem key={i} text={item} />
          ))}
        </ul>
      </div>

      <button
        onClick={onLogin}
        className="w-full py-3 md:py-4 rounded-xl font-bold transition"
        style={{ 
          background: 'var(--color-surface)', 
          color: 'var(--color-text)',
        }}
        onMouseEnter={(e) => { e.target.style.background = 'var(--color-accent)'; e.target.style.color = 'var(--color-bg)'; }}
        onMouseLeave={(e) => { e.target.style.background = 'var(--color-surface)'; e.target.style.color = 'var(--color-text)'; }}
      >
        {title} Login
      </button>
    </div>
  </div>
);

export default LandingPage;
