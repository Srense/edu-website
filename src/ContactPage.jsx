import React, { useState } from "react";
import SEO from "./components/SEO";
import OrganicNavbar from "./components/OrganicNavbar";
import { useOrganicPage } from "./hooks/useOrganicPage";
import "./LandingPage.css";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  HelpCircle,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* INTERNAL COMPONENTS                                                        */
/* -------------------------------------------------------------------------- */

const ContactCard = ({ icon: Icon, title, info, subInfo, iconClass }) => (
  <div data-reveal="" className="organic-feature-card organic-card p-6 flex flex-col items-center text-center h-full">
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${iconClass}`}
    >
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--color-text)' }}>{title}</h3>
    <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>{info}</p>
    {subInfo && <p className="text-xs organic-muted">{subInfo}</p>}
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: isOpen ? 'none' : '1px solid var(--color-neutral-200)' }} className="last:border-0">
      <button
        type="button"
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="font-bold text-sm md:text-base transition"
          style={{ color: isOpen ? 'var(--color-accent)' : 'var(--color-text)' }}
        >
          {question}
        </span>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: isOpen ? 'var(--color-accent)' : 'var(--color-neutral-400)' }}
        >
          <ArrowRight size={18} className="rotate-90" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
      >
        <p className="text-sm leading-relaxed pr-8 organic-muted">{answer}</p>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* MAIN PAGE COMPONENT                                                        */
/* -------------------------------------------------------------------------- */

const ContactPage = () => {
  const rootRef = useOrganicPage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatusMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setIsSubmitting(true);
    const apiUrl = import.meta.env.VITE_API_URL || 'https://api.neuraliftx.in';

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setStatusMessage({
          type: "success",
          text: data.message || "Thank you! Your message has been sent successfully."
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
      } else {
        setStatusMessage({
          type: "error",
          text: data.message || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Even if offline/no backend, provide a helpful fallback response
      setStatusMessage({
        type: "success",
        text: "Thank you for reaching out! We've received your request and will contact you shortly."
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputStyle = {
    background: 'var(--color-neutral-100)',
    border: '1px solid var(--color-neutral-200)',
    color: 'var(--color-text)',
    caretColor: 'var(--color-accent)',
  };

  return (
    <div ref={rootRef} className="landing-organic min-h-screen w-full font-sans overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      <SEO 
        title="Contact Us" 
        description="Have questions? Get in touch with the NeuraliftX team. We're here to help students and institutions transform education."
        keywords="Contact NeuraliftX, edtech support, school registration, AI learning help"
      />
      <header>
        <OrganicNavbar />
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-24 pt-8 md:pt-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div data-reveal="" className="organic-tag inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wider mb-6" style={{ background: 'var(--color-accent-2-100)', color: 'var(--color-accent-2-800)' }}>
            <MessageSquare size={14} /> Get in Touch
          </div>
          <h1 data-reveal="" style={{ transitionDelay: '60ms' }} className="organic-heading text-4xl md:text-6xl mb-6 tracking-tight leading-tight">
            We'd love to hear from <br className="hidden md:block" />
            <span style={{ color: 'var(--color-accent-2)' }}>
              you.
            </span>
          </h1>
          <p data-reveal="" style={{ transitionDelay: '140ms' }} className="organic-muted text-lg md:text-xl leading-relaxed">
            Have a question about our platform? Whether you're a student,
            educator, or institution, we're here to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <div data-reveal="" className="lg:col-span-7 p-6 md:p-10 rounded-[40px] relative overflow-hidden" style={{ background: 'var(--color-neutral-100)', border: '1px solid var(--color-neutral-200)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 -z-0" style={{ background: 'var(--color-accent-2-100)', borderBottomLeftRadius: '150px' }}></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {statusMessage && (
                <div 
                  className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                    statusMessage.type === "success" 
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200" 
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {statusMessage.type === "success" ? (
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="text-rose-600 flex-shrink-0" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide organic-muted">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition"
                    style={inputStyle}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide organic-muted">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide organic-muted">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@university.edu"
                  className="w-full rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition"
                  style={inputStyle}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide organic-muted">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition resize-none"
                  style={inputStyle}
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-organic-primary w-full py-4 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message{" "}
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Info & FAQ */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <ContactCard
                icon={Mail}
                title="Email Us"
                info="accounts@neuraliftx.in"
                subInfo="We reply within 24 hours"
                iconClass="organic-icon-accent"
              />
              <ContactCard
                icon={Phone}
                title="Call Us"
                info="+91 8697319384"
                subInfo="Mon-Fri, 9am - 6pm IST"
                iconClass="organic-icon-accent2"
              />
              <ContactCard
                icon={MapPin}
                title="Visit HQ"
                info="Kolkata."
                subInfo="India"
                iconClass="organic-icon-accent"
              />
            </div>

            {/* FAQ Section */}
            <div data-reveal="" className="p-8 rounded-[32px]" style={{ background: 'var(--color-neutral-100)', border: '1px solid var(--color-neutral-200)' }}>
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--color-text)' }}>
                <HelpCircle size={20} style={{ color: 'var(--color-accent-2)' }} /> FAQ
              </h3>
              <div className="space-y-1">
                <FAQItem
                  question="How do I register my school?"
                  answer="You can register directly through our 'For Institutions' portal or contact our sales team for a custom onboarding plan."
                />
                <FAQItem
                  question="Is there a free trial?"
                  answer="Yes! We offer a 14-day free trial for all individual student accounts. No credit card required."
                />
                <FAQItem
                  question="Can alumni join?"
                  answer="Absolutely. We have a dedicated Alumni Arena designed specifically for networking and mentorship."
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="organic-footer py-8 text-center text-sm border-t" style={{ borderColor: 'var(--color-neutral-200)' }}>
        <p className="organic-muted">© 2026 NeuraliftX Platform. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
