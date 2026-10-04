import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "./components/SEO";
import OrganicNavbar from "./components/OrganicNavbar";
import { useOrganicPage } from "./hooks/useOrganicPage";
import "./LandingPage.css";
import {
  Heart,
  Sparkles,
  Globe,
  Target,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.neuraliftx.in';

/* -------------------------------------------------------------------------- */
/* INTERNAL COMPONENTS                                                        */
/* -------------------------------------------------------------------------- */

const TeamCard = ({
  name,
  role,
  image,
  bio,
  color,
  linkedin = "#",
  twitter = "#",
  github = "#",
}) => (
  <div className="group relative h-full" data-reveal="" style={{ transitionDelay: '0ms' }}>
    <div
      className={`absolute inset-0 ${color} rounded-[32px] rotate-1 group-hover:rotate-2 transition-transform duration-300`}
    ></div>
    <div className="organic-role-card relative p-6 rounded-[32px] h-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 transition-transform hover:-translate-y-1">
      <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: 'var(--color-neutral-100)', boxShadow: 'var(--shadow-md)' }}>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col h-full">
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--color-text)' }}>{name}</h3>
          <p className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--color-accent)' }}>
            {role}
          </p>
          <p className="organic-muted text-sm leading-relaxed mb-4">{bio}</p>
        </div>

        <div className="mt-auto flex justify-center md:justify-start gap-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
            style={{ color: 'var(--color-neutral-500)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-neutral-500)'}
          >
            <Linkedin size={18} />
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
            style={{ color: 'var(--color-neutral-500)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-neutral-500)'}
          >
            <Twitter size={18} />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
            style={{ color: 'var(--color-neutral-500)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-neutral-500)'}
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const ValueCard = ({ icon: Icon, title, desc, iconClass }) => (
  <div data-reveal="" className="organic-feature-card organic-card p-6 group">
    <div
      className={`w-12 h-12 ${iconClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
    >
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--color-text)' }}>{title}</h3>
    <p className="text-sm organic-muted leading-relaxed">{desc}</p>
  </div>
);

/* -------------------------------------------------------------------------- */
/* MAIN PAGE COMPONENT                                                        */
/* -------------------------------------------------------------------------- */

const AboutUsPage = () => {
  const navigate = useNavigate();
  const rootRef = useOrganicPage();

  const handleSignup = () => {
    window.location.href = `${APP_URL}/signup-individual`;
  };

  return (
    <div ref={rootRef} className="landing-organic min-h-screen w-full font-sans overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      <SEO 
        title="About Us" 
        description="Learn about the mission of NeuraliftX - the next-generation AI-powered educational platform connecting students, faculty, and alumni."
        keywords="NeuraliftX mission, AI education team, connected learning, educational innovation"
      />

      <OrganicNavbar />

      <main>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 md:pt-20 pb-24 px-4 md:px-6 max-w-7xl mx-auto text-center">
        <div data-reveal="" className="organic-tag inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-accent-2)' }}></span>
          Our Mission
        </div>

        <h1 data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-heading text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight relative z-10 max-w-4xl mx-auto">
          Building the future of <br className="hidden md:block" />
          <span style={{ color: 'var(--color-accent)' }}>
            Connected Learning.
          </span>
        </h1>

        <p data-reveal="" style={{ transitionDelay: '140ms' }} className="text-lg organic-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          We believe education should be accessible, personalized, and
          collaborative. NeuraliftX bridges the gap between students, educators,
          and alumni to create a lifelong learning ecosystem.
        </p>

        <div data-reveal="" style={{ transitionDelay: '220ms' }} className="relative w-full max-w-5xl mx-auto aspect-video rounded-[40px] overflow-hidden border-4">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Team working together"
            className="w-full h-full object-cover"
            style={{ borderRadius: 'calc(var(--radius-lg) * 1.4)' }}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section data-reveal="" className="py-16 px-4 md:px-6" style={{ background: 'var(--color-neutral-900)', color: 'var(--color-neutral-100)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-4xl md:text-5xl mb-2 organic-heading" style={{ color: 'var(--color-accent-400)' }}>
              10k+
            </span>
            <span className="text-sm md:text-base font-bold uppercase tracking-wider" style={{ color: 'var(--color-neutral-500)' }}>
              Active Students
            </span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl mb-2 organic-heading" style={{ color: 'var(--color-accent-2-400)' }}>
              500+
            </span>
            <span className="text-sm md:text-base font-bold uppercase tracking-wider" style={{ color: 'var(--color-neutral-500)' }}>
              Partner Schools
            </span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl mb-2 organic-heading" style={{ color: 'var(--color-accent-400)' }}>
              50+
            </span>
            <span className="text-sm md:text-base font-bold uppercase tracking-wider" style={{ color: 'var(--color-neutral-500)' }}>
              Countries
            </span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl mb-2 organic-heading" style={{ color: 'var(--color-accent-2-400)' }}>
              1M+
            </span>
            <span className="text-sm md:text-base font-bold uppercase tracking-wider" style={{ color: 'var(--color-neutral-500)' }}>
              Learning Hours
            </span>
          </div>
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1" data-reveal="">
            <h2 className="organic-heading text-3xl md:text-5xl mb-6">Neuralift X</h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'color-mix(in srgb, var(--color-text) 75%, transparent)' }}>
              <p>
                Neuralift X, a personalized AI environment for students.
                While most EdTech tools focus on content delivery, we focus on cognitive architecture and trust.
                By partnering with leading physicists and data scientists, we are creating a "Student OS" that adapts to individual learning speeds while solving the biggest problem in AI education today: verification.
                We don't just help students learn; we prove that they learned.
              </p>
              <p>
                Our OS combines a personalized learning graph with cryptographic verification to ensure students master concepts while proving their academic integrity.
              </p>
              <p>
                Today, we empower institutions to build thriving digital
                campuses where students don't just attend classes—they launch
                careers.
              </p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4" data-reveal="" style={{ transitionDelay: '120ms' }}>
            <div className="space-y-4 mt-8">
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                className="rounded-2xl w-full h-48 object-cover"
                style={{ boxShadow: 'var(--shadow-md)' }}
                alt="Brainstorming"
              />
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                className="rounded-2xl w-full h-64 object-cover"
                style={{ boxShadow: 'var(--shadow-md)' }}
                alt="Meeting"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                className="rounded-2xl w-full h-64 object-cover"
                style={{ boxShadow: 'var(--shadow-md)' }}
                alt="Conference"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                className="rounded-2xl w-full h-48 object-cover"
                style={{ boxShadow: 'var(--shadow-md)' }}
                alt="Coding"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES --- */}
      <section className="py-20 px-4 md:px-6" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 data-reveal="" className="organic-heading text-3xl md:text-4xl mb-4">
              Our Core Values
            </h2>
            <p data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-muted">
              Principles that guide every feature we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={Heart}
              title="Community First"
              desc="We prioritize features that foster connection and support between users."
              iconClass="organic-icon-accent"
            />
            <ValueCard
              icon={Sparkles}
              title="Innovation"
              desc="We leverage cutting-edge AI to personalize the learning experience."
              iconClass="organic-icon-accent2"
            />
            <ValueCard
              icon={Globe}
              title="Inclusivity"
              desc="Education should be accessible to everyone, everywhere."
              iconClass="organic-icon-accent"
            />
            <ValueCard
              icon={Target}
              title="Impact"
              desc="We measure success by the career outcomes of our students."
              iconClass="organic-icon-accent2"
            />
          </div>
        </div>
      </section>

      {/* --- TEAM --- */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-reveal="" className="organic-heading text-3xl md:text-4xl mb-4">
            Meet the Team
          </h2>
          <p data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-muted">The minds behind the mission.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          <TeamCard
            name="Ankit Sarker"
            role="CEO"
            image="https://res.cloudinary.com/dq5nwaidh/image/upload/v1768554933/annkit_urmvva.jpg"
            bio="The visionary behind NeuraliftX, driving the mission to democratize education through technology."
            color="bg-[var(--color-accent-100)]"
          />
          <TeamCard
            name="Sohel Rizwan"
            role="CTO"
            image="https://res.cloudinary.com/dq5nwaidh/image/upload/v1768554933/Sohel_nptphv.jpg"
            bio="Leading the technical strategy and ensuring the platform is scalable, secure, and cutting-edge."
            color="bg-[var(--color-accent-2-100)]"
          />
          <TeamCard
            name="Moinak Niyogi"
            role="CSO"
            image="https://res.cloudinary.com/dq5nwaidh/image/upload/v1768554933/Moinak_bchrtg.jpg"
            bio="Crafting strategic partnerships and growth initiatives to expand NeuraliftX's global reach."
            color="bg-[var(--color-accent-200)]"
          />
          <TeamCard
            name="Devasheesh Chandra"
            role="Designer & Video Editor"
            image="https://api.dicebear.com/7.x/avataaars/svg?seed=Devasheesh"
            bio="Creating immersive visual experiences and compelling storytelling through design and video."
            color="bg-[var(--color-accent-2-200)]"
          />
          <TeamCard
            name="Krishna"
            role="Full Stack Developer"
            image="https://api.dicebear.com/7.x/avataaars/svg?seed=Krishna"
            bio="Building robust full-stack solutions and ensuring a seamless user experience across the platform."
            color="bg-[var(--color-accent-100)]"
          />
          <TeamCard
            name="Marcelo Maciel Amaral"
            role="Strategic Partner-AI & Product Innovation"
            image="https://res.cloudinary.com/dq5nwaidh/image/upload/v1768554933/Marcelo_gxmi53.jpg"
            bio="Driving AI innovation and product strategy to shape the future of personalized learning."
            color="bg-[var(--color-accent-2-100)]"
          />
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-4 md:px-6">
        <div data-reveal="" className="organic-cta-section max-w-4xl mx-auto text-center" style={{ padding: 'clamp(36px, 5vw, 72px) clamp(24px, 4vw, 64px)' }}>
          <h2 className="organic-heading text-3xl md:text-5xl mb-8">
            Join our journey.
          </h2>
          <p className="organic-muted text-xl mb-10">
            Whether you're a student, educator, or institution, there's a place
            for you here.
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
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <footer className="organic-footer py-8 text-center text-sm border-t">
        <p className="organic-muted">© 2026 Alfirin Technologies Private Limited. All rights reserved.</p>
      </footer>
      </main>
    </div>
  );
};

export default AboutUsPage;
