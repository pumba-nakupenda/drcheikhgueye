"use client";

import Image from "next/image";
import Timeline from "@/components/Timeline";
import { useLanguage } from "@/context/LanguageContext";
import CustomAudioPlayer from "@/components/CustomAudioPlayer";

export default function AboutPage() {
    const { t, language, dir } = useLanguage();
    const isRtl = dir === 'rtl';

    return (
        <div className="bg-white dark:bg-zinc-950 pt-24 pb-16 md:py-32 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start focus:outline-none">

                    {/* Image Side */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative aspect-square sm:aspect-[4/5] max-w-xs sm:max-w-none mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/5 group animate-float">
                            <Image
                                src="/images/portrait-cheikh-gueye.jpg"
                                alt="Dr. Cheikh Gueye"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
                        </div>

                        <div className="p-8 glass rounded-[2rem] border border-emerald-500/10 shadow-xl">
                            <p className="text-emerald-900/80 dark:text-emerald-100/80 italic font-serif text-lg leading-relaxed text-center">
                                "{t.about.quote}"
                            </p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-7 prose prose-lg prose-emerald dark:prose-invert max-w-none rtl:text-right">
                        <div className="space-y-4 mb-12">
                            <div className={`inline-flex flex-wrap items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                                    {t.about.badge}
                                </div>
                                <div className={`flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-500/10 text-emerald-600 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                    <span className="text-[10px] uppercase font-bold tracking-widest">{t.about.audio_badge}</span>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-6xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                                {t.about.title_prefix} <span className="text-emerald-600">{language === 'ar' ? 'شيخ غي' : 'Cheikh Gueye'}</span>
                            </h1>

                            {/* Audio Player for Biography */}
                            <div className="pt-4 max-w-md">
                                <CustomAudioPlayer src="/audio/Biographie.mp3" />
                            </div>
                        </div>

                        <div className="space-y-8 text-emerald-900/80 dark:text-emerald-100/80 leading-relaxed font-light text-lg">
                            {t.about.content.map((p: string, i: number) => (
                                <p key={i} className={i === 0 ? "font-medium text-emerald-950 dark:text-white text-xl" : ""}>
                                    {p}
                                </p>
                            ))}

                            <div className={`bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-[2rem] ${isRtl ? 'border-r-4' : 'border-l-4'} border-emerald-500 my-10`}>
                                <p className="m-0 italic text-emerald-950 dark:text-emerald-50">
                                    {t.about.blockquote}
                                </p>
                            </div>

                            <p>{t.about.content_p2}</p>
                            <p>{t.about.content_p3}</p>
                        </div>

                        {/* Badges/Expertise Highlights */}
                        <div className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-emerald-500/10 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rtl:text-right">
                                <h4 className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-4">{t.about.expertise}</h4>
                                <ul className="space-y-2 text-sm text-emerald-900/60 dark:text-emerald-100/60 list-none p-0">
                                    {t.about.expertise_items.map((item: string, i: number) => (
                                        <li key={i} className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rtl:text-right">
                                <h4 className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-4">{t.about.mission_title}</h4>
                                <p className="text-sm text-emerald-900/60 dark:text-emerald-100/60 leading-relaxed font-light">
                                    {t.about.mission_text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Timeline />
        </div>
    );
}
