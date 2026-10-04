import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.neuraliftx.in';

/**
 * Shared Organic Navbar for NeuraliftX Standalone Website
 */
const OrganicNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogin = () => {
    window.location.href = `${APP_URL}/login`;
  };

  const handleJoinIndividual = () => {
    window.location.href = `${APP_URL}/signup-individual`;
  };

  return (
    <header>
      <nav className="organic-nav relative z-50 px-6 md:px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="p-2 rounded-xl" style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}>
              <GraduationCap size={22} />
            </div>
            <span className="text-xl md:text-2xl tracking-tight organic-heading">
              NeuraliftX
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`organic-nav-link transition relative group ${isActive ? 'font-bold' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.href);
                  }}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`} 
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <button
              onClick={handleLogin}
              className="font-bold text-sm transition px-3 py-1.5"
              style={{ color: 'var(--color-accent-700)' }}
            >
              Log in
            </button>
            <button
              onClick={handleJoinIndividual}
              className="btn-organic-primary px-5 py-2.5 rounded-full font-bold text-sm transition flex items-center gap-2"
            >
              Join Individual <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--color-neutral-600)' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="organic-mobile-menu absolute top-full left-0 w-full p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  navigate(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="py-2">
              <LanguageSelector />
            </div>
            <hr style={{ borderColor: 'var(--color-neutral-200)' }} className="my-2" />
            <button
              onClick={handleLogin}
              className="organic-mobile-login-btn w-full py-3 font-bold rounded-xl"
            >
              Log in
            </button>
            <button
              onClick={handleJoinIndividual}
              className="btn-organic-primary w-full py-3 rounded-xl font-bold transition flex items-center justify-center gap-2"
            >
              Join Individual <ArrowRight size={16} />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default OrganicNavbar;
