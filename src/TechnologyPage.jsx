import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "./components/SEO";
import OrganicNavbar from "./components/OrganicNavbar";
import { useOrganicPage } from "./hooks/useOrganicPage";
import "./LandingPage.css";
import {
  Cpu,
  Database,
  Globe,
  Shield,
  Code,
  Server,
  Sparkles,
  Fingerprint,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* INTERNAL COMPONENTS                                                        */
/* -------------------------------------------------------------------------- */

const TechCard = ({ icon: Icon, title, desc, iconClass, delay = 0 }) => (
  <div data-reveal="" style={{ transitionDelay: `${delay}ms` }} className="organic-feature-card organic-card p-6 group">
    <div
      className={`w-14 h-14 ${iconClass} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
    >
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--color-text)' }}>{title}</h3>
    <p className="text-sm organic-muted leading-relaxed">{desc}</p>
  </div>
);

const ArchitectureBlock = ({ title, items, bgColor, borderColor }) => (
  <div className="p-6 rounded-2xl border-2 h-full" style={{ background: bgColor, borderColor: borderColor }}>
    <h4 className="font-bold text-lg mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--color-text)' }}>
      {title}
    </h4>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: 'color-mix(in srgb, var(--color-text) 70%, transparent)' }}
        >
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-accent)' }}></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

/* -------------------------------------------------------------------------- */
/* MAIN PAGE COMPONENT                                                        */
/* -------------------------------------------------------------------------- */

const TechnologyPage = () => {
  const navigate = useNavigate();
  const rootRef = useOrganicPage();

  return (
    <div ref={rootRef} className="landing-organic min-h-screen w-full font-sans overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      <SEO 
        title="Technology" 
        description="Explore the advanced technology stack powering NeuraliftX. Adaptive Intelligence paired with Provable Integrity via the Intelexta Protocol."
        keywords="NeuraliftX technology, AI learning engine, Intelexta Protocol, educational AI architecture"
      />

      <OrganicNavbar />

      <main>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 md:pt-20 pb-24 px-4 md:px-6 max-w-7xl mx-auto text-center">
        <div data-reveal="" className="organic-tag inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-accent-2)' }}></span>
          Built for Scale
        </div>

        <h1 data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-heading text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight relative z-10 max-w-4xl mx-auto">
          Powered by <br className="hidden md:block" />
          <span style={{ color: 'var(--color-accent)' }}>
            Next-Gen Tech.
          </span>
        </h1>

        <p data-reveal="" style={{ transitionDelay: '140ms' }} className="text-lg organic-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          We are the first platform to pair Adaptive Intelligence with Provable Integrity.
        </p>

        {/* Abstract Tech Visual */}
        <div data-reveal="" style={{ transitionDelay: '220ms' }} className="relative w-full max-w-4xl mx-auto h-64 md:h-96 rounded-[40px] overflow-hidden border-4 flex items-center justify-center">
          <div style={{ background: 'var(--color-neutral-900)', position: 'absolute', inset: 0 }}></div>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--color-accent) 15%, transparent), transparent 50%)' }}></div>
          <div className="grid grid-cols-3 gap-8 md:gap-16 opacity-80 relative z-10">
            <div className="flex flex-col items-center gap-4 animate-float">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center backdrop-blur-md border" style={{ background: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', borderColor: 'color-mix(in srgb, var(--color-accent) 30%, transparent)' }}>
                <Code size={32} style={{ color: 'var(--color-accent-400)' }} />
              </div>
              <span className="font-mono text-xs md:text-sm" style={{ color: 'var(--color-accent-400)' }}>
                Cognitive Personalization
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 animate-float animation-delay-2000">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center backdrop-blur-md border" style={{ background: 'color-mix(in srgb, var(--color-accent-2) 20%, transparent)', borderColor: 'color-mix(in srgb, var(--color-accent-2) 30%, transparent)' }}>
                <Server size={32} style={{ color: 'var(--color-accent-2-400)' }} />
              </div>
              <span className="font-mono text-xs md:text-sm" style={{ color: 'var(--color-accent-2-400)' }}>
                Verifiable Output
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 animate-float animation-delay-4000">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center backdrop-blur-md border" style={{ background: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', borderColor: 'color-mix(in srgb, var(--color-accent) 30%, transparent)' }}>
                <Database size={32} style={{ color: 'var(--color-accent-300)' }} />
              </div>
              <span className="font-mono text-xs md:text-sm" style={{ color: 'var(--color-accent-300)' }}>
                Integrity Report
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK GRID --- */}
      <section className="py-20 px-4 md:px-6" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 data-reveal="" className="organic-heading text-3xl md:text-4xl mb-4">
              Our Core Stack
            </h2>
            <p data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-muted">
              Best-in-class technologies powering the platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechCard icon={Code} title="React & Tailwind" desc="A lightning-fast, responsive frontend built with the latest React hooks and utility-first styling." iconClass="organic-icon-accent" delay={0} />
            <TechCard icon={Server} title="Node.js & Express" desc="Scalable microservices architecture handling thousands of concurrent connections effortlessly." iconClass="organic-icon-accent2" delay={90} />
            <TechCard icon={Database} title="PostgreSQL & Redis" desc="Robust relational data storage coupled with high-speed caching for instant access." iconClass="organic-icon-accent" delay={180} />
            <TechCard icon={Cpu} title="AI Engine" desc="Custom fine-tuned LLMs for personalized tutoring and automated grading assistance." iconClass="organic-icon-accent2" delay={270} />
            <TechCard icon={Globe} title="WebSocket Real-time" desc="Instant messaging, live classroom interactions, and collaborative whiteboards." iconClass="organic-icon-accent" delay={360} />
            <TechCard icon={Shield} title="Enterprise Security" desc="End-to-end encryption, RBAC, and regular audits ensuring data privacy and safety." iconClass="organic-icon-accent2" delay={450} />
            <TechCard icon={Fingerprint} title="Intelexta Protocol" desc="It comes with cryptographic integrity report. This gives Neuralift X a unique value proposition. We provide proof of human effort in an AI world." iconClass="organic-icon-accent" delay={540} />
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURE DIAGRAM --- */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-reveal="" className="organic-heading text-3xl md:text-4xl mb-4">
            System Architecture
          </h2>
          <p data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-muted">How the pieces fit together.</p>
        </div>

        <div data-reveal="" style={{ transitionDelay: '120ms' }} className="grid md:grid-cols-3 gap-8 items-stretch">
          <ArchitectureBlock
            title="Client Layer"
            items={["Web Application (React)", "Mobile App", "Admin Dashboard"]}
            bgColor="var(--color-accent-100)"
            borderColor="var(--color-accent-200)"
          />
          <div className="hidden md:flex flex-col justify-center items-center">
            <div className="w-full h-1 rounded-full my-2" style={{ background: 'var(--color-neutral-300)' }}></div>
            <div className="p-3 rounded-full text-white z-10" style={{ background: 'var(--color-neutral-900)' }}>
              <Sparkles size={20} />
            </div>
            <div className="w-full h-1 rounded-full my-2" style={{ background: 'var(--color-neutral-300)' }}></div>
          </div>
          <ArchitectureBlock
            title="API Gateway"
            items={["Load Balancing", "Rate Limiting", "Authentication (OAuth 2.0)"]}
            bgColor="var(--color-accent-2-100)"
            borderColor="var(--color-accent-2-200)"
          />

          <div className="md:col-span-3 flex justify-center py-4">
            <div className="h-12 w-1 rounded-full" style={{ background: 'var(--color-neutral-300)' }}></div>
          </div>

          <div className="md:col-span-3 grid md:grid-cols-3 gap-8">
            <ArchitectureBlock
              title="Service Layer"
              items={["User Service", "Content Service", "Analytics Engine", "Notification Service"]}
              bgColor="var(--color-accent-100)"
              borderColor="var(--color-accent-200)"
            />
            <ArchitectureBlock
              title="Data Layer"
              items={["Primary DB (Postgres)", "Cache (Redis)", "Object Storage (S3)"]}
              bgColor="var(--color-accent-2-100)"
              borderColor="var(--color-accent-2-200)"
            />
            <ArchitectureBlock
              title="AI Infrastructure"
              items={["Model Inference API", "Vector Database", "Training Pipeline"]}
              bgColor="var(--color-accent-100)"
              borderColor="var(--color-accent-200)"
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 px-4 md:px-6">
        <div data-reveal="" className="organic-cta-section max-w-4xl mx-auto text-center" style={{ padding: 'clamp(36px, 5vw, 72px) clamp(24px, 4vw, 64px)' }}>
          <h2 className="organic-heading text-3xl md:text-5xl mb-8">
            Ready to scale with us?
          </h2>
          <p className="organic-muted text-xl mb-10">
            Explore our developer documentation or connect with our engineering team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigate("/contact")}
              className="organic-cta-btn-primary px-8 py-4 rounded-full font-bold text-lg transition"
            >
              Contact Engineering
            </button>
          </div>
        </div>
      </section>

      <footer className="organic-footer py-8 text-center text-sm border-t">
        <p className="organic-muted">© 2026 NeuraliftX Platform. Built with React & Tailwind.</p>
      </footer>
      </main>
    </div>
  );
};

export default TechnologyPage;
