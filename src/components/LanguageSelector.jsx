import React, { useEffect, useState, useRef } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
    { code: 'en', name: 'English' }, { code: 'hi', name: 'Hindi (हिंदी)' }, { code: 'es', name: 'Spanish (Español)' },
    { code: 'fr', name: 'French (Français)' }, { code: 'de', name: 'German (Deutsch)' }, { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'ar', name: 'Arabic (العربية)' }, { code: 'pt', name: 'Portuguese' }, { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' }, { code: 'ko', name: 'Korean' }, { code: 'it', name: 'Italian' },
    { code: 'tr', name: 'Turkish' }, { code: 'nl', name: 'Dutch' }, { code: 'pl', name: 'Polish' },
    { code: 'vi', name: 'Vietnamese' }, { code: 'th', name: 'Thai' }, { code: 'id', name: 'Indonesian' },
    { code: 'bn', name: 'Bengali' }, { code: 'ur', name: 'Urdu' }, { code: 'fa', name: 'Persian' },
    { code: 'sw', name: 'Swahili' }, { code: 'te', name: 'Telugu' }, { code: 'ta', name: 'Tamil' },
    { code: 'mr', name: 'Marathi' }, { code: 'gu', name: 'Gujarati' }, { code: 'kn', name: 'Kannada' },
    { code: 'ml', name: 'Malayalam' }, { code: 'pa', name: 'Punjabi' }, { code: 'uk', name: 'Ukrainian' },
    { code: 'ro', name: 'Romanian' }, { code: 'el', name: 'Greek' }, { code: 'cs', name: 'Czech' },
    { code: 'sv', name: 'Swedish' }, { code: 'hu', name: 'Hungarian' }
];

const LanguageSelector = () => {
    const [selectedLang, setSelectedLang] = useState(() => localStorage.getItem('userLanguage') || 'en');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const clearAllTranslateCookies = () => {
        const h = window.location.hostname;
        const parts = h.split('.');
        const rootD = parts.length >= 2 ? parts.slice(-2).join('.') : h;
        const domains = ['', `.${h}`, h, `.${rootD}`, rootD];
        domains.forEach((d) => {
            const dStr = d ? `; domain=${d}` : '';
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${dStr}`;
        });
    };

    const setTranslateCookie = (langCode) => {
        if (langCode === 'en') {
            clearAllTranslateCookies();
        } else {
            const h = window.location.hostname;
            const parts = h.split('.');
            const rootD = parts.length >= 2 ? parts.slice(-2).join('.') : h;
            document.cookie = `googtrans=/en/${langCode}; path=/;`;
            document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${h};`;
            document.cookie = `googtrans=/en/${langCode}; path=/; domain=${h};`;
            if (parts.length >= 2) {
                document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${rootD};`;
                document.cookie = `googtrans=/en/${langCode}; path=/; domain=${rootD};`;
            }
        }
    };

    const triggerGoogleTranslate = (langCode) => {
        if (typeof window.loadGoogleTranslateScript === 'function') {
            window.loadGoogleTranslateScript(() => {
                let attempts = 0;
                const interval = setInterval(() => {
                    attempts++;
                    const select = document.querySelector('.goog-te-combo');
                    if (select) {
                        select.value = langCode;
                        select.dispatchEvent(new Event('change', { bubbles: true }));
                        clearInterval(interval);
                    }
                    if (attempts > 30) clearInterval(interval);
                }, 100);
            });
        }
    };

    const handleSelectLanguage = (langCode) => {
        setSelectedLang(langCode);
        localStorage.setItem('userLanguage', langCode);
        setIsOpen(false);
        setTranslateCookie(langCode);
        triggerGoogleTranslate(langCode);
    };

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLanguageObj = LANGUAGES.find(l => l.code === selectedLang) || LANGUAGES[0];

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border shadow-xs"
                style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-text) 6%, transparent)',
                    borderColor: 'color-mix(in srgb, var(--color-text) 12%, transparent)',
                    color: 'var(--color-text)'
                }}
            >
                <Globe size={13} className="opacity-70" />
                <span>{currentLanguageObj.name.split(' ')[0]}</span>
                <ChevronDown size={12} className={`opacity-60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-52 max-h-72 overflow-y-auto rounded-2xl shadow-xl border z-50 p-1.5 custom-scrollbar"
                        style={{
                            backgroundColor: 'var(--color-bg)',
                            borderColor: 'color-mix(in srgb, var(--color-text) 15%, transparent)',
                            color: 'var(--color-text)'
                        }}
                    >
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleSelectLanguage(lang.code)}
                                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium transition ${
                                    selectedLang === lang.code 
                                        ? 'bg-[#c67139] text-white font-bold' 
                                        : 'hover:bg-black/5 dark:hover:bg-white/5'
                                }`}
                            >
                                <span>{lang.name}</span>
                                {selectedLang === lang.code && <Check size={14} />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSelector;
