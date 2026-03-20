"use client";

import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import { ArrowRight, Sparkles, Languages, PenLine, ScrollText, Headphones } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const { t, language } = useLanguage();
    useScrollReveal();
    const featuredBooks = books.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Premium Hero Section */}
            <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-emerald-950">
                {/* Abstract shapes & gradients */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-400/20 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-800/60 blur-[100px] rounded-full" />
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 flex flex-col justify-center min-h-[90vh]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

                        <div className="text-center lg:text-left rtl:lg:text-right space-y-8 md:space-y-10">
                            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-bold uppercase tracking-[0.2em] animate-bounce">
                                <Sparkles size={16} />
                                {t.hero.transmission}
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-black text-white leading-[1.1] md:leading-[1] tracking-tighter mobile-text-balance">
                                {t.hero.explore} <br />
                                <span className="text-emerald-400 italic font-medium">{t.hero.infinity}</span> <br />
                                {t.hero.words}
                            </h1>

                            <p className="text-base md:text-2xl text-emerald-100/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light px-4 md:px-0">
                                {t.hero.tagline}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
                                <Link
                                    href="/books"
                                    className="btn-premium bg-emerald-400 text-emerald-950 hover:bg-emerald-300 px-10 py-5 text-lg flex items-center justify-center gap-3 group"
                                >
                                    {t.hero.cta_ouvrage}
                                    <ArrowRight size={22} className={`group-hover:translate-x-1 transition-transform ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                                </Link>
                                <Link
                                    href="/about"
                                    className="btn-premium bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 px-10 py-5 text-lg flex items-center justify-center gap-3"
                                >
                                    {t.hero.cta_auteur}
                                </Link>
                            </div>

                            {/* Stats/Badges */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 md:pt-16 border-t border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-800/30 flex items-center justify-center text-emerald-400 border border-emerald-400/10 shadow-inner">
                                        <ScrollText size={28} />
                                    </div>
                                    <div className="text-left rtl:text-right">
                                        <div className="text-white font-black text-2xl">12+</div>
                                        <div className="text-emerald-400/40 text-[10px] uppercase font-bold tracking-[0.2em]">{t.hero.stats_publications}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-800/30 flex items-center justify-center text-emerald-400 border border-emerald-400/10 shadow-inner">
                                        <Languages size={28} />
                                    </div>
                                    <div className="text-left rtl:text-right">
                                        <div className="text-white font-black text-2xl">{language === 'ar' ? "عربية | فرنسية | إنجليزية" : language === 'en' ? "Arabic | FR | EN" : "Arabe | FR | EN"}</div>
                                        <div className="text-emerald-400/40 text-[10px] uppercase font-bold tracking-[0.2em]">{t.hero.stats_polyglotte}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square sm:aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-[260px] sm:max-w-[28rem] mx-auto group">
                            <div className={`absolute inset-0 bg-emerald-600 rounded-[3rem] ${language === 'ar' ? '-rotate-6 group-hover:-rotate-3' : 'rotate-6 group-hover:rotate-3'} transition-transform duration-700 shadow-2xl`} />
                            <div className="relative h-full rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                                <Image
                                    src="/images/portrait-cheikh-gueye.webp"
                                    alt="Dr. Cheikh GUEYE"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

                            </div>
                        </div>
                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hidden lg:flex">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em]">{t.hero.scroll}</span>
                    <div className="w-px h-12 bg-gradient-to-b from-emerald-400/50 to-transparent" />
                </div>
            </section>

            {/* Featured Books Section - WOW Grid */}
            <section className="py-16 md:py-32 relative bg-zinc-50 dark:bg-zinc-950 overflow-hidden reveal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-6 text-left rtl:text-right">
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-serif font-black text-emerald-950 dark:text-emerald-50 leading-tight">
                                {t.featured_books.title} <br /> <span className="text-emerald-600 dark:text-emerald-400 underline decoration-emerald-200/50 underline-offset-8 italic font-medium">{t.featured_books.subtitle}</span>
                            </h2>
                            <p className="text-emerald-900/60 dark:text-emerald-100/60 text-lg">
                                {t.featured_books.tagline}
                            </p>
                        </div>
                        <Link
                            href="/books"
                            className="px-8 py-3 rounded-2xl bg-white dark:bg-emerald-900/20 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400 font-bold hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition-all group shrink-0 flex items-center gap-2"
                        >
                            {t.featured_books.cta_all}
                            <ArrowRight size={18} className={`inline transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {featuredBooks.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-200/10 blur-[150px] -translate-x-1/2 rounded-full" />
            </section>

            {/* Quote Section */}
            <section className="py-8 md:py-12 px-4 bg-emerald-900 overflow-hidden relative reveal">
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <p className="text-3xl md:text-6xl font-serif italic text-white leading-relaxed">
                        « {t.hero.quote} »
                    </p>
                </div>
            </section>
        </div>
    );
}
