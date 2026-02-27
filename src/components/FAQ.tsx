"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem { question: string; answer: string; }

export default function FAQ() {
    const { t, dir } = useLanguage();
    const isRtl = dir === 'rtl';
    const faqs = t.faq.items as FAQItem[];
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                        {t.faq.badge}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                        {t.faq.title} <span className="text-emerald-600 italic">{t.faq.title_highlight}</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq: FAQItem, i: number) => (
                        <div
                            key={i}
                            className="glass-card rounded-3xl border border-emerald-500/10 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                                className={`w-full px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors ${isRtl ? 'flex-row-reverse text-right' : ''}`}
                            >
                                <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <HelpCircle aria-hidden="true" className={`shrink-0 ${openIndex === i ? "text-emerald-600" : "text-emerald-900/20 dark:text-emerald-100/20"} transition-colors`} />
                                    <span className={`font-bold text-lg ${openIndex === i ? "text-emerald-950 dark:text-white" : "text-emerald-900/70 dark:text-emerald-100/60"}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <ChevronDown aria-hidden="true" className={`shrink-0 transition-transform duration-500 ${openIndex === i ? "rotate-180 text-emerald-600" : "text-emerald-900/20"}`} />
                            </button>

                            <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className={`px-8 pb-8 pt-2 ${isRtl ? 'pr-20' : 'pl-20'} rtl:text-right`}>
                                    <p className="text-emerald-900/60 dark:text-emerald-100/50 leading-relaxed font-light text-lg">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
