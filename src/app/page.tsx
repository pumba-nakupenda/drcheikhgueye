"use client";

import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";
import Testimonials from "@/components/Testimonials";
import SituationCards from "@/components/SituationCards";
import AudioCard from "@/components/AudioCard";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";
import {
    ArrowRight,
    Sparkles,
    ScrollText,
    Languages,
    Headphones,
    ShoppingCart,
    Award,
    Mail,
    MessageSquare,
    Phone,
    MapPin,
    Globe,
} from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const { t, language, dir } = useLanguage();
    const isRtl = dir === 'rtl';
    useScrollReveal();
    const book = books[0];

    const displayTitle = language === 'ar' && book.title_ar ? book.title_ar : language === 'en' && book.title_en ? book.title_en : book.title;
    const displaySummary = language === 'ar' && book.summary_ar ? book.summary_ar : language === 'en' && book.summary_en ? book.summary_en : book.summary;
    const displaySituations = language === 'ar' && book.situations_ar ? book.situations_ar : language === 'en' && book.situations_en ? book.situations_en : book.situations;
    const displayAudio = language === 'ar' && book.audioSummary_ar ? book.audioSummary_ar : language === 'en' && book.audioSummary_en ? book.audioSummary_en : book.audioSummary;

    const bioAudio = language === 'ar' ? "/audio/Biographie AR.mp3" : language === 'en' ? "/audio/Biographie AN.mp3" : "/audio/Biographie FR.mp3";
    const langPairLabel = language === 'ar' ? "عربية | فرنسية" : language === 'en' ? "AR | FR" : "AR | FR";

    const orderMessage = language === 'ar'
        ? `مرحباً، أود طلب كتاب: ${displayTitle}`
        : language === 'en'
        ? `Hello, I would like to order the book: ${displayTitle}`
        : `Bonjour, je souhaite commander le livre : ${displayTitle}`;
    const whatsappOrderUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-emerald-950">
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
                                    href="#auteur"
                                    className="btn-premium bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 px-10 py-5 text-lg flex items-center justify-center gap-3"
                                >
                                    {t.hero.cta_auteur}
                                </Link>
                            </div>

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
                                        <div className="text-white font-black text-2xl">{langPairLabel}</div>
                                        <div className="text-emerald-400/40 text-[10px] uppercase font-bold tracking-[0.2em]">{t.hero.stats_polyglotte}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="#livre"
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

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hidden lg:flex">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em]">{t.hero.scroll}</span>
                    <div className="w-px h-12 bg-gradient-to-b from-emerald-400/50 to-transparent" />
                </div>
            </section>

            {/* Author Section */}
            <section id="auteur" className="scroll-mt-28 py-16 md:py-32 relative bg-white dark:bg-zinc-900 overflow-hidden reveal">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
                        {/* Portrait aligned with hero book cover grammar */}
                        <div className="lg:col-span-5">
                            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto group">
                                <div className={`absolute inset-0 bg-emerald-600 rounded-[2.5rem] ${isRtl ? '-rotate-6 group-hover:-rotate-3' : 'rotate-6 group-hover:rotate-3'} transition-transform duration-700 shadow-2xl`} />
                                <div className="relative h-full rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-zinc-800 shadow-2xl">
                                    <Image
                                        src="/images/portrait-cheikh-gueye.webp"
                                        alt="Dr. Cheikh Gueye"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 max-w-none rtl:text-right">
                            <div className="space-y-4 mb-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                                    {t.about.badge}
                                </div>
                                <h2 className="text-3xl md:text-6xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                                    {t.about.title_prefix} <span className="text-emerald-600">{language === 'ar' ? 'شيخ غي' : 'Cheikh Gueye'}</span>
                                </h2>
                            </div>

                            <div className="mb-10 max-w-md">
                                <AudioCard src={bioAudio} title={t.audio_bio_title} subtitle={t.audio_bio_subtitle} />
                            </div>

                            <div className="space-y-6 text-emerald-900/80 dark:text-emerald-100/80 leading-relaxed font-light text-lg">
                                {t.about.content.map((p: string, i: number) => (
                                    <p key={i} className={i === 0 ? "font-medium text-emerald-950 dark:text-white text-xl" : ""}>
                                        {p}
                                    </p>
                                ))}

                                <div className={`flex items-start gap-4 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-500/10 not-italic ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}>
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                                        <Award size={20} />
                                    </div>
                                    <p className="text-base text-emerald-950 dark:text-emerald-50 font-medium leading-snug">
                                        {t.about.blockquote}
                                    </p>
                                </div>

                                <p>{t.about.content_p2}</p>
                                <p>{t.about.content_p3}</p>
                            </div>

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
            </section>

            {/* Book Section */}
            <section id="livre" className="scroll-mt-28 py-16 md:py-32 relative bg-zinc-50 dark:bg-zinc-950 overflow-hidden reveal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mb-12 md:mb-20 rtl:text-right space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                            {t.book_section.badge}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-emerald-950 dark:text-emerald-50 leading-tight">
                            {t.book_section.title} <span className="text-emerald-600 dark:text-emerald-400 italic font-medium">{t.book_section.subtitle}</span>
                        </h2>
                        <p className="text-emerald-900/60 dark:text-emerald-100/60 text-lg">
                            {t.book_section.tagline}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
                        <div className="lg:col-span-3 glass-card p-8 md:p-10 rounded-[2.5rem] border border-emerald-500/10">
                            <p className="text-lg md:text-xl text-emerald-950/80 dark:text-emerald-50/80 leading-relaxed font-serif italic">
                                "{displaySummary}"
                            </p>
                        </div>
                        {displayAudio && (
                            <div className="lg:col-span-2">
                                <AudioCard
                                    src={displayAudio}
                                    title={t.book_detail.audio_title}
                                    subtitle={t.book_detail.audio_subtitle}
                                />
                            </div>
                        )}
                    </div>

                    {displaySituations && displaySituations.length > 0 && (
                        <SituationCards situations={displaySituations} />
                    )}
                </div>

                <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-200/10 blur-[150px] -translate-x-1/2 rounded-full" />
            </section>

            <Testimonials />

            {/* Contact Section (also carries the final order CTA) */}
            <section id="contact" className="scroll-mt-28 py-16 md:py-32 bg-zinc-50 dark:bg-zinc-950 px-4 sm:px-6 lg:px-8 reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-20 space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                            {t.contact.badge}
                        </div>
                        <h2 className="text-3xl md:text-7xl font-serif font-black text-emerald-950 dark:text-emerald-50">
                            {t.contact.title} <br /> <span className="text-emerald-600 italic">{t.contact.title_highlight}</span>
                        </h2>
                        <p className="text-emerald-900/60 dark:text-emerald-100/60 text-lg max-w-2xl mx-auto">
                            {t.contact.tagline}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        <div className="space-y-8 md:space-y-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                                <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-3 rtl:text-right">
                                    <div className={`w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 ${isRtl ? 'mr-0 ml-auto' : ''}`}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-emerald-950 dark:text-emerald-50">{t.contact.phone}</h3>
                                        <p className="text-emerald-900/60 dark:text-emerald-100/60 font-bold tracking-wider">+221 77 653 12 56</p>
                                    </div>
                                </div>

                                <a
                                    href={whatsappOrderUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-3 rtl:text-right block group"
                                >
                                    <div className={`w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform ${isRtl ? 'mr-0 ml-auto' : ''}`}>
                                        <MessageSquare size={24} />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="font-bold text-emerald-950 dark:text-emerald-50">{t.contact.whatsapp}</h3>
                                        <p className="text-emerald-600 font-bold">{t.contact.whatsapp_status}</p>
                                    </div>
                                </a>
                            </div>

                            <div className="space-y-8 pt-10 border-t border-emerald-500/10 rtl:text-right">
                                <h3 className="text-2xl font-serif font-bold text-emerald-950 dark:text-emerald-50">{t.contact.others}</h3>
                                <div className="space-y-6">
                                    <div className={`flex items-center gap-4 text-emerald-900/60 dark:text-emerald-100/60 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                        <Mail className="text-emerald-600" size={20} />
                                        <span>{siteConfig.email}</span>
                                    </div>
                                    <div className={`flex items-center gap-4 text-emerald-900/60 dark:text-emerald-100/60 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                        <MapPin className="text-emerald-600" size={20} />
                                        <span>{siteConfig.address}</span>
                                    </div>
                                    <div className={`flex items-center gap-4 text-emerald-900/60 dark:text-emerald-100/60 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                        <Globe className="text-emerald-600" size={20} />
                                        <span>www.drcheikhgueye.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-5 sm:p-10 md:p-16 rounded-3xl md:rounded-[4rem] border border-emerald-500/10 shadow-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
