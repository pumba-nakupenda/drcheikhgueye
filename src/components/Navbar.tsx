"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, MessageSquare, Sun, Moon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

const LANGUAGES = ['fr', 'en', 'ar'] as const;

export default function Navbar() {
    const { language, setLanguage, t, dir } = useLanguage();
    const isRtl = dir === 'rtl';
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: t.nav.home },
        { href: "/about", label: t.nav.about },
        { href: "/books", label: t.nav.books },
        { href: "/contact", label: t.nav.contact },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "py-4 glass shadow-2xl" : "py-6 bg-transparent"
            } ${isVisible ? "translate-y-0" : "-translate-y-full sm:translate-y-0"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-full">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-serif font-black text-xl shadow-lg group-hover:rotate-12 transition-transform">
                                {language === 'ar' ? "غ" : "G"}
                            </div>
                            <span className="text-base sm:text-2xl font-serif font-black tracking-tighter text-emerald-900 dark:text-emerald-100 group-hover:text-emerald-600 transition-colors">
                                {t.about.title_prefix}. <span className="text-emerald-700 dark:text-emerald-400 underline decoration-emerald-500/30 underline-offset-4">{language === 'ar' ? "شيخ" : "Cheikh"}</span> <span className="hidden min-[420px]:inline">{language === 'ar' ? "غي" : "Gueye"}</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden sm:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-bold transition-all duration-300 relative group ${isActive
                                        ? "text-emerald-600 dark:text-emerald-400"
                                        : "text-emerald-900/70 dark:text-emerald-100/70 hover:text-emerald-600 dark:hover:text-emerald-400"
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                        }`} />
                                </Link>
                            );
                        })}

                        {/* Language Toggle */}
                        <div className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full border border-emerald-500/10">
                            <button
                                onClick={() => setLanguage('fr')}
                                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${language === 'fr' ? "bg-emerald-600 text-white shadow-lg" : "text-emerald-900/40 hover:text-emerald-600"}`}
                            >
                                FR
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${language === 'en' ? "bg-emerald-600 text-white shadow-lg" : "text-emerald-900/40 hover:text-emerald-600"}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('ar')}
                                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${language === 'ar' ? "bg-emerald-600 text-white shadow-lg" : "text-emerald-900/40 hover:text-emerald-600"}`}
                            >
                                AR
                            </button>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-all active:scale-95"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                        <Link
                            href={siteConfig.whatsappLinks.general}
                            target="_blank"
                            className="bg-emerald-900 dark:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold btn-premium"
                        >
                            {t.nav.whatsapp}
                        </Link>
                    </div>

                    <div className="sm:hidden flex items-center gap-1.5">
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 active-scale"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                        </button>
                        {/* Compact cycling language button */}
                        <button
                            onClick={() => {
                                const langs = LANGUAGES;
                                const idx = langs.indexOf(language);
                                setLanguage(langs[(idx + 1) % langs.length]);
                            }}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/10 dark:bg-white/10 active:scale-95 transition-all duration-200"
                            aria-label="Changer la langue"
                        >
                            <span className="text-xs font-black text-emerald-900 dark:text-white">{language.toUpperCase()}</span>
                            <div className="flex flex-col gap-[3px]">
                                {(LANGUAGES).map(l => (
                                    <div key={l} className={`w-1 h-1 rounded-full transition-all ${l === language ? 'bg-emerald-600' : 'bg-emerald-900/20 dark:bg-white/25'}`} />
                                ))}
                            </div>
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 transition-all active-scale"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div className={`sm:hidden fixed inset-0 z-40 ${isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"}`}>
                <div className={`absolute inset-0 bg-emerald-950/60 backdrop-blur-xl transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={toggleMenu} />

                <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} w-[85%] h-full bg-white dark:bg-zinc-950 shadow-2xl transition-transform duration-500 ease-out border-emerald-500/10 ${isOpen ? "translate-x-0" : isRtl ? "-translate-x-full" : "translate-x-full"
                    } ${isRtl ? 'border-r' : 'border-l'}`}>
                    <div className="flex flex-col h-full p-5 pt-20 space-y-4">
                        <div className={`flex items-center justify-between mb-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
                            <div className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">{language === 'ar' ? "التنقل" : "Navigation"}</div>
                            <div className="flex gap-1 border border-emerald-500/20 rounded-xl p-0.5">
                                {(LANGUAGES).map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => setLanguage(lang)}
                                        className={`px-3 py-1.5 rounded-lg text-[11px] font-black uppercase transition-all active:scale-95 ${
                                            language === lang
                                                ? 'bg-emerald-600/90 text-white shadow-sm'
                                                : 'text-emerald-900/30 dark:text-white/30'
                                        }`}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className={`text-3xl font-serif font-black transition-all flex items-center justify-between group h-16 ${isActive
                                        ? "text-emerald-600 dark:text-emerald-400"
                                        : "text-emerald-900/60 dark:text-emerald-100/40"
                                        } ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
                                >
                                    <span>{link.label}</span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-emerald-500/10 text-emerald-600 scale-100' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'} ${isRtl ? 'rotate-180' : ''}`}>
                                        <ChevronRight size={24} />
                                    </div>
                                </Link>
                            );
                        })}

                        <div className="mt-auto pt-10 border-t border-emerald-500/10 space-y-4">
                            <p className={`text-[10px] font-black uppercase tracking-widest text-emerald-900/30 dark:text-emerald-100/20 ${isRtl ? 'text-right' : 'text-left'}`}>
                                {language === 'ar' ? "تواصل معنا" : language === 'en' ? "Contact Dr. Cheikh Gueye" : "Contactez Dr. Cheikh Gueye"}
                            </p>
                            <Link
                                href={siteConfig.whatsappLinks.general}
                                target="_blank"
                                className={`flex items-center justify-between bg-emerald-700 dark:bg-emerald-600 text-white p-5 rounded-[2rem] font-black shadow-xl active-scale ${isRtl ? 'flex-row-reverse' : ''}`}
                            >
                                WhatsApp
                                <MessageSquare size={24} className={isRtl ? 'rotate-0' : ''} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
