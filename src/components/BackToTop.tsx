"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-28 sm:bottom-8 right-8 z-[60] p-4 rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-600/40 border border-emerald-400/20 transition-all duration-500 transform ${isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-50 pointer-events-none"
                } hover:bg-emerald-500 hover:scale-110 active:scale-95 group`}
            aria-label="Retour en haut"
        >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
    );
}
