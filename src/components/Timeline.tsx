"use client";

import { Calendar, Award, GraduationCap, BookOpen, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getIcon = (index: number) => {
    const icons = [
        <Globe size={24} />,
        <GraduationCap size={24} />,
        <Award size={24} />,
        <BookOpen size={24} />
    ];
    return icons[index] || <Calendar size={24} />;
};

export default function Timeline() {
    const { t, dir } = useLanguage();
    const isRtl = dir === 'rtl';
    const milestones = t.timeline.items;

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                        {t.timeline.badge}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                        {t.timeline.title} <span className="text-emerald-600 italic">{t.timeline.title_highlight}</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className={`absolute ${isRtl ? 'right-8 md:right-1/2 translate-x-1/2' : 'left-8 md:left-1/2 -translate-x-1/2'} top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent`} />

                    <div className="space-y-16">
                        {milestones.map((m: any, i: number) => (
                            <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Icon Bubble */}
                                <div className={`absolute ${isRtl ? 'right-8 md:right-1/2 translate-x-5' : 'left-8 md:left-1/2 -translate-x-5'} w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center z-20 shadow-xl border-4 border-white dark:border-zinc-950`}>
                                    {getIcon(i)}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full ${isRtl ? (i % 2 === 0 ? "md:pr-16" : "md:pl-16") : (i % 2 === 0 ? "md:pl-16" : "md:pr-16")} ${isRtl ? 'pr-20 md:pr-0' : 'pl-20 md:pl-0'}`}>
                                    <div className="glass-card p-8 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 group rtl:text-right">
                                        <div className={`text-emerald-600 font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                            <Calendar size={14} />
                                            {m.year}
                                        </div>
                                        <h3 className="text-xl font-bold text-emerald-950 dark:text-white mb-4 group-hover:text-emerald-600 transition-colors">
                                            {m.title}
                                        </h3>
                                        <p className="text-emerald-900/70 dark:text-emerald-100/60 leading-relaxed font-light">
                                            {m.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
