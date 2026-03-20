"use client";

import { useState, useEffect, useCallback } from "react";
import { Globe, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/config/translations";

const languages: { code: Language; label: string; native: string; flag: string }[] = [
    { code: "fr", label: "Français", native: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", native: "English", flag: "🇬🇧" },
    { code: "ar", label: "العربية", native: "Arabe / Arabic", flag: "🇸🇦" },
];

const bubbleTexts: Record<Language, string> = {
    fr: "Il vous est possible de changer la langue ici à tout moment",
    en: "You can change the language here at any time.",
    ar: "يمكنك تغيير اللغة هنا في أي وقت.",
};

type Step = "select" | "bubble";

export default function LanguagePopup() {
    const { language, setLanguage } = useLanguage();
    const [step, setStep] = useState<Step | null>(null);
    const [bubblePos, setBubblePos] = useState<{ top: number; left: number; arrowLeft: number } | null>(null);

    useEffect(() => {
        // Show popup for the first 5 visits, then stop
        const visitCount = parseInt(localStorage.getItem("lang_popup_visits") || "0", 10);
        if (visitCount < 5) {
            localStorage.setItem("lang_popup_visits", String(visitCount + 1));
            const timer = setTimeout(() => setStep("select"), 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const positionBubble = useCallback(() => {
        // Try desktop switcher first, then mobile
        const desktop = document.getElementById("lang-switcher-desktop");
        const mobile = document.getElementById("lang-switcher-mobile");
        const target = desktop?.offsetParent ? desktop : mobile;

        if (target) {
            const rect = target.getBoundingClientRect();
            setBubblePos({
                top: rect.bottom + 12,
                left: Math.max(16, Math.min(rect.left + rect.width / 2 - 140, window.innerWidth - 296)),
                arrowLeft: rect.left + rect.width / 2,
            });
        }
    }, []);

    const handleSelect = (lang: Language) => {
        setLanguage(lang); // This saves to localStorage('language') via LanguageContext
        // Small delay so the navbar re-renders with the new language before we position
        setTimeout(() => {
            positionBubble();
            setStep("bubble");
        }, 300);
    };

    const closeBubble = () => {
        setStep(null);
    };

    const closeAll = () => {
        // Save default language so popup won't show again
        setLanguage(language);
        setStep(null);
    };

    // Reposition bubble on resize
    useEffect(() => {
        if (step !== "bubble") return;
        const handleResize = () => positionBubble();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [step, positionBubble]);

    // Auto-dismiss bubble after 5 seconds
    useEffect(() => {
        if (step !== "bubble") return;
        const timer = setTimeout(closeBubble, 5000);
        return () => clearTimeout(timer);
    }, [step]);

    if (!step) return null;

    /* ===================== STEP 1: Language selection popup ===================== */
    if (step === "select") {
        return (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-emerald-950/70 backdrop-blur-md animate-in fade-in duration-500"
                    onClick={closeAll}
                />

                {/* Popup */}
                <div className="relative w-full max-w-sm bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl shadow-emerald-900/30 overflow-hidden animate-in zoom-in-95 fade-in duration-500">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-600/10 to-transparent pointer-events-none" />

                    <button
                        onClick={closeAll}
                        className="absolute top-5 right-5 z-10 p-2 rounded-full text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
                    >
                        <X size={20} />
                    </button>

                    <div className="relative p-8 pt-10 text-center space-y-6">
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 shadow-inner">
                            <Globe size={32} />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-serif font-black text-emerald-950 dark:text-white">
                                Choisissez votre langue
                            </h2>
                            <p className="text-sm text-emerald-900/50 dark:text-emerald-100/40">
                                Choose your language &middot; اختر لغتك
                            </p>
                        </div>

                        <div className="space-y-3">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleSelect(lang.code)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 active:scale-[0.97] ${
                                        language === lang.code
                                            ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 shadow-lg shadow-emerald-500/10"
                                            : "border-transparent bg-zinc-50 dark:bg-zinc-800/50 hover:border-emerald-500/30 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20"
                                    }`}
                                >
                                    <span className="text-3xl">{lang.flag}</span>
                                    <div className="flex-1 text-left">
                                        <div className={`font-bold text-lg ${language === lang.code ? "text-emerald-700 dark:text-emerald-400" : "text-emerald-950 dark:text-white"}`}>
                                            {lang.label}
                                        </div>
                                        <div className="text-xs text-emerald-900/40 dark:text-emerald-100/30 font-medium">
                                            {lang.native}
                                        </div>
                                    </div>
                                    {language === lang.code && (
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* ===================== STEP 2: Tooltip bubble pointing to navbar ===================== */
    if (step === "bubble" && bubblePos) {
        return (
            <>
                {/* Light overlay to draw attention */}
                <div
                    className="fixed inset-0 z-[199] bg-black/20 animate-in fade-in duration-300"
                    onClick={closeBubble}
                />

                {/* Bubble */}
                <div
                    className="fixed z-[200] w-[280px] animate-in fade-in slide-in-from-top-2 duration-500"
                    style={{ top: bubblePos.top, left: bubblePos.left }}
                >
                    {/* Arrow */}
                    <div
                        className="absolute -top-2 w-4 h-4 bg-emerald-600 rotate-45 rounded-sm"
                        style={{ left: Math.max(20, Math.min(bubblePos.arrowLeft - bubblePos.left, 250)) }}
                    />

                    {/* Content */}
                    <div
                        className="relative bg-emerald-600 text-white rounded-2xl p-5 shadow-2xl shadow-emerald-900/40 cursor-pointer"
                        onClick={closeBubble}
                    >
                        <div className="flex items-start gap-3">
                            <Globe size={20} className="shrink-0 mt-0.5 text-emerald-200" />
                            <div className="space-y-1">
                                <p className="font-bold text-sm leading-snug">
                                    {bubbleTexts[language]}
                                </p>
                                <p className="text-[10px] text-emerald-200/70 font-bold uppercase tracking-widest">
                                    {language === "ar" ? "انقر للإغلاق" : language === "en" ? "Tap to dismiss" : "Cliquez pour fermer"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return null;
}
