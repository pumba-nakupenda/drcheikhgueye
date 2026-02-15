"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // For background styling
            setScrolled(currentScrollY > 20);

            // For auto-hide behavior
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                // Scrolling down & past a threshold
                setIsVisible(false);
            } else {
                // Scrolling up
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
        { href: "/", label: "Accueil" },
        { href: "/about", label: "À Propos" },
        { href: "/books", label: "Livres" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "py-4 glass shadow-2xl" : "py-6 bg-transparent"
            } ${isVisible ? "translate-y-0" : "-translate-y-full sm:translate-y-0"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-full">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-serif font-black text-xl shadow-lg group-hover:rotate-12 transition-transform">
                                G
                            </div>
                            <span className="text-2xl font-serif font-black tracking-tighter text-emerald-900 dark:text-emerald-100 group-hover:text-emerald-600 transition-colors">
                                Dr. <span className="text-emerald-700 dark:text-emerald-400 underline decoration-emerald-500/30 underline-offset-4">Cheikh</span> Gueye
                            </span>
                        </Link>
                    </div>

                    <div className="hidden sm:flex items-center space-x-10">
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
                        <Link
                            href={siteConfig.whatsappLinks.general}
                            target="_blank"
                            className="bg-emerald-900 dark:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold btn-premium"
                        >
                            Contact WhatsApp
                        </Link>
                    </div>

                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-xl text-emerald-900 dark:text-emerald-100 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30 transition-all"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div className={`sm:hidden fixed inset-0 z-40 transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}>
                <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-xl" onClick={toggleMenu} />

                <div className={`absolute top-0 right-0 w-[80%] h-full bg-white dark:bg-zinc-950 shadow-2xl transition-transform duration-500 ease-out border-l border-emerald-500/10 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <div className="flex flex-col h-full p-8 pt-24 space-y-6">
                        <div className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600 mb-4">Navigation</div>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className={`text-2xl font-serif font-black transition-all ${isActive
                                        ? "text-emerald-600 dark:text-emerald-400 pl-4 border-l-4 border-emerald-500"
                                        : "text-emerald-900/60 dark:text-emerald-100/40 hover:text-emerald-600"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <div className="mt-auto pt-10 border-t border-emerald-500/10">
                            <Link
                                href={siteConfig.whatsappLinks.general}
                                target="_blank"
                                className="flex items-center justify-between bg-emerald-900 dark:bg-emerald-600 text-white p-6 rounded-2xl font-black shadow-xl"
                            >
                                WhatsApp
                                <X size={20} className="rotate-45" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
