"use client";

import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";
import Testimonials from "@/components/Testimonials";
import SituationCards from "@/components/SituationCards";
import CustomAudioPlayer from "@/components/CustomAudioPlayer";
import { siteConfig } from "@/config/site";
import { ArrowRight, Sparkles, ScrollText, Languages, Headphones, ShoppingCart, Award } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const { t, language } = useLanguage();
    useScrollReveal();
    const book = books[0];

    const displayTitle = language === 'ar' && book.title_ar ? book.title_ar : language === 'en' && book.title_en ? book.title_en : book.title;
    const displaySummary = language === 'ar' && book.summary_ar ? book.summary_ar : language === 'en' && book.summary_en ? book.summary_en : book.summary;
    const displaySituations = language === 'ar' && book.situations_ar ? book.situations_ar : language === 'en' && book.situations_en ? book.situations_en : book.situations;
    const displayAudio = language === 'ar' && book.audioSummary_ar ? book.audioSummary_ar : language === 'en' && book.audioSummary_en ? book.audioSummary_en : book.audioSummary;

    const orderMessage = language === 'ar'
        ? `مرحباً، أود طلب كتاب: ${displayTitle}`
        : language === 'en'
        ? `Hello, I would like to order the book: ${displayTitle}`
        : `Bonjour, je souhaite commander le livre : ${displayTitle}`;
    const whatsappOrderUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

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

                        <div className="text-center lg:text-left space-y-8 md:space-y-10">
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
                                <a
                                    href={whatsappOrderUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-premium bg-emerald-400 text-emerald-950 hover:bg-emerald-300 px-10 py-5 text-lg flex items-center justify-center gap-3 group"
                                >
                                    <ShoppingCart size={22} />
                                    {t.hero.cta_ouvrage}
                                    <ArrowRight size={22} className={`group-hover:translate-x-1 transition-transform ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                                </a>
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
                                    <div className="text-left">
                                        <div className="text-white font-black text-2xl">160</div>
                                        <div className="text-emerald-400/40 text-[10px] uppercase font-bold tracking-[0.2em]">{t.hero.stats_publications}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-800/30 flex items-center justify-center text-emerald-400 border border-emerald-400/10 shadow-inner">
                                        <Languages size={28} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-black text-2xl">{language === 'ar' ? "عربية | فرنسية" : "Arabe | FR"}</div>
                                        <div className="text-emerald-400/40 text-[10px] uppercase font-bold tracking-[0.2em]">{t.hero.stats_polyglotte}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href={`/books/${book.id}`}
                            className="relative aspect-[3/4] w-full max-w-[260px] sm:max-w-[24rem] mx-auto group block"
                            aria-label={displayTitle}
                        >
                            <div className={`absolute inset-0 bg-emerald-600 rounded-[3rem] ${language === 'ar' ? '-rotate-6 group-hover:-rotate-3' : 'rotate-6 group-hover:rotate-3'} transition-transform duration-700 shadow-2xl`} />
                            <div className="relative h-full rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl bg-white">
                                <Image
                                    src={book.coverImage}
                                    alt={displayTitle}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

                                <div className="absolute top-6 right-6 glass px-3 py-1.5 rounded-full flex items-center gap-2 border border-emerald-400/30 animate-pulse">
                                    <Headphones size={14} className="text-emerald-400" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white">
                                        {language === 'ar' ? "صوتي" : "Audio"}
                                    </span>
                                </div>

                                <div className="absolute bottom-8 left-6 right-6 p-6 glass rounded-3xl border border-white/20 backdrop-blur-md translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                    <p className="text-white font-serif text-base md:text-lg leading-snug line-clamp-3">
                                        {displayTitle}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hidden lg:flex">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em]">{t.hero.scroll}</span>
                    <div className="w-px h-12 bg-gradient-to-b from-emerald-400/50 to-transparent" />
                </div>
            </section>

            {/* Author Band */}
            <section className="py-16 md:py-28 relative bg-white dark:bg-zinc-900 overflow-hidden reveal">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-500/5 blur-[120px] rounded-full" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                        {/* Portrait */}
                        <div className="lg:col-span-2 flex justify-center lg:justify-start">
                            <div className="relative aspect-square w-full max-w-xs sm:max-w-sm group">
                                <div className={`absolute inset-0 bg-emerald-600 rounded-[2.5rem] ${language === 'ar' ? 'rotate-6 group-hover:rotate-3' : '-rotate-6 group-hover:-rotate-3'} transition-transform duration-700 shadow-2xl`} />
                                <div className="relative h-full rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-zinc-800 shadow-2xl">
                                    <Image
                                        src="/images/portrait-cheikh-gueye.webp"
                                        alt={t.author_band.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Bio + CTA */}
                        <div className="lg:col-span-3 space-y-6 text-center lg:text-left rtl:lg:text-right">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-[0.2em]">
                                {t.author_band.badge}
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-emerald-950 dark:text-emerald-50 leading-tight">
                                    {t.author_band.name}
                                </h2>
                                <p className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs md:text-sm">
                                    {t.author_band.role}
                                </p>
                            </div>

                            <p className="text-lg text-emerald-900/70 dark:text-emerald-100/70 leading-relaxed">
                                {t.author_band.bio}
                            </p>

                            <div className={`flex items-start gap-4 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-500/10 ${language === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                                    <Award size={20} />
                                </div>
                                <p className="text-sm md:text-base text-emerald-950 dark:text-emerald-50 font-medium leading-snug">
                                    {t.author_band.highlight}
                                </p>
                            </div>

                            <div className="pt-2">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-700 dark:bg-emerald-600 text-white font-bold hover:bg-emerald-800 transition-all shadow-lg group"
                                >
                                    {t.author_band.cta}
                                    <ArrowRight size={18} className={`transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rich Preview Section: Audio + Sample Situations */}
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
                            href={`/books/${book.id}`}
                            className="px-8 py-3 rounded-2xl bg-white dark:bg-emerald-900/20 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400 font-bold hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition-all group shrink-0 flex items-center gap-2"
                        >
                            {t.featured_books.cta_all}
                            <ArrowRight size={18} className={`inline transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                        </Link>
                    </div>

                    {/* Summary + Audio */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
                        <div className="lg:col-span-3 glass-card p-8 md:p-10 rounded-[2.5rem] border border-emerald-500/10">
                            <p className="text-lg md:text-xl text-emerald-950/80 dark:text-emerald-50/80 leading-relaxed font-serif italic">
                                "{displaySummary}"
                            </p>
                        </div>
                        {displayAudio && (
                            <div className="lg:col-span-2 glass-card p-6 md:p-8 rounded-[2.5rem] border border-emerald-500/20 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600">
                                            <Headphones size={24} className="md:w-7 md:h-7" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-serif font-black text-emerald-950 dark:text-emerald-50">{t.book_detail.audio_title}</h3>
                                            <p className="text-[10px] md:text-xs text-emerald-600 font-black uppercase tracking-widest">{t.book_detail.audio_subtitle}</p>
                                        </div>
                                    </div>
                                    <CustomAudioPlayer src={displayAudio} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sample Situations */}
                    {displaySituations && displaySituations.length > 0 && (
                        <SituationCards situations={displaySituations} />
                    )}
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-200/10 blur-[150px] -translate-x-1/2 rounded-full" />
            </section>

            <Testimonials />

            {/* CTA Section - Commandes */}
            <section className="py-14 md:py-24 px-4 bg-emerald-900 overflow-hidden relative reveal">
                <div className="max-w-5xl mx-auto glass-card p-7 md:p-20 rounded-3xl md:rounded-[4rem] text-center relative z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent" />
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 relative">
                        {t.cta_section.title}
                    </h2>
                    <p className="text-emerald-100/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative">
                        {t.cta_section.text}
                    </p>
                    <a
                        href={whatsappOrderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-950 rounded-full font-black hover:scale-105 transition-transform shadow-2xl relative group"
                    >
                        <ShoppingCart size={22} />
                        {t.cta_section.button}
                        <ArrowRight className={`group-hover:translate-x-1 transition-transform ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </a>
                </div>
            </section>
        </div>
    );
}
