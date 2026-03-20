"use client";

import { useState, useEffect } from "react";
import { Globe, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/config/translations";

const languages: { code: Language; label: string; native: string; flag: string }[] = [
    { code: "fr", label: "Français", native: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", native: "English", flag: "🇬🇧" },
    { code: "ar", label: "العربية", native: "Arabe / Arabic", flag: "🇸🇦" },
];

export default function LanguagePopup() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasChosen = localStorage.getItem("language_chosen");
        if (!hasChosen) {
            const timer = setTimeout(() => setIsOpen(true), 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const selectLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language_chosen", "true");
        setIsOpen(false);
    };

    const close = () => {
        localStorage.setItem("language_chosen", "true");
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-emerald-950/70 backdrop-blur-md transition-opacity animate-in fade-in duration-500"
                onClick={close}
            />

            {/* Popup */}
            <div className="relative w-full max-w-sm bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl shadow-emerald-900/30 overflow-hidden animate-in zoom-in-95 fade-in duration-500">
                {/* Header gradient */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-600/10 to-transparent pointer-events-none" />

                {/* Close button */}
                <button
                    onClick={close}
                    className="absolute top-5 right-5 z-10 p-2 rounded-full text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
                >
                    <X size={20} />
                </button>

                <div className="relative p-8 pt-10 text-center space-y-6">
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 shadow-inner">
                        <Globe size={32} />
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-serif font-black text-emerald-950 dark:text-white">
                            Choisissez votre langue
                        </h2>
                        <p className="text-sm text-emerald-900/50 dark:text-emerald-100/40">
                            Choose your language &middot; اختر لغتك
                        </p>
                    </div>

                    {/* Language options */}
                    <div className="space-y-3">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => selectLanguage(lang.code)}
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

                    {/* Hint */}
                    <p className="text-[10px] text-emerald-900/30 dark:text-emerald-100/20 uppercase font-bold tracking-widest pt-2">
                        {language === "ar"
                            ? "يمكنك التغيير لاحقًا من شريط التنقل"
                            : language === "en"
                            ? "You can change this later from the navigation bar"
                            : "Vous pourrez changer plus tard dans la barre de navigation"}
                    </p>
                </div>
            </div>
        </div>
    );
}
