"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Situation } from "@/data/books";
import { HelpCircle, CheckCircle2 } from "lucide-react";

interface SituationCardsProps {
    situations: Situation[];
}

export default function SituationCards({ situations }: SituationCardsProps) {
    const { t, dir } = useLanguage();
    const isRtl = dir === 'rtl';

    return (
        <section className="py-24 border-t border-emerald-500/10">
            <div className="space-y-12">
                <div className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                        {t.book_detail.situations_title}
                    </h2>
                    <div className={`h-1 w-24 bg-emerald-600 rounded-full ${isRtl ? 'mr-0 ml-auto' : ''}`} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {situations.map((situation, index) => (
                        <FlipCard key={index} situation={situation} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FlipCard({ situation }: { situation: Situation }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const { t, dir } = useLanguage();
    const isRtl = dir === 'rtl';

    return (
        <div
            className="group h-[500px] [perspective:1000px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative h-full w-full rounded-[3rem] transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full rounded-[3rem] bg-white dark:bg-zinc-900 border border-emerald-500/10 shadow-xl [backface-visibility:hidden] p-8 md:p-10 flex flex-col">
                    <div className={`flex items-center gap-4 mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 shadow-inner">
                            <HelpCircle size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 font-sans">
                            {t.book_detail.situation_label}
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <p className={`text-base md:text-lg font-serif font-medium text-emerald-950 dark:text-emerald-50 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                            {situation.question}
                        </p>
                    </div>
                    <div className="mt-6 pt-6 flex justify-center border-t border-emerald-500/5">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600/40 animate-pulse group-hover:text-emerald-600 transition-colors">
                            {t.book_detail.clicks_to_see}
                        </span>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-[3rem] bg-emerald-700 dark:bg-emerald-600 text-white shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 md:p-10 flex flex-col">
                    <div className={`flex items-center gap-4 mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white shadow-inner">
                            <CheckCircle2 size={24} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-white/60 font-sans">
                            {t.book_detail.solution_label}
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <p className={`text-base md:text-lg font-serif font-medium leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                            {situation.answer}
                        </p>
                    </div>
                    <div className="mt-6 pt-6 flex justify-center border-t border-white/10">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                            Dr. Cheikh Gueye
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
