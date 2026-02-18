"use client";

import { books } from "@/data/books";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Headphones, ShoppingCart, MoveLeft, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SituationCards from "@/components/SituationCards";

import { useState, useEffect } from "react";

export default function BookDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const { t, language, dir } = useLanguage();
    const isRtl = dir === 'rtl';

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const book = books.find((b) => b.id === id);

    if (!book) {
        notFound();
    }

    const displayTitle = (language === 'ar' && book.title_ar) ? book.title_ar : book.title;
    const displayAuthor = (language === 'ar' && book.author_ar) ? book.author_ar : book.author;
    const displaySummary = (language === 'ar' && book.summary_ar) ? book.summary_ar : book.summary;
    const displaySituations = (language === 'ar' && book.situations_ar) ? book.situations_ar : book.situations;

    const message = language === 'ar'
        ? `مرحباً، أود طلب كتاب: ${displayTitle}`
        : `Bonjour, je souhaite commander le livre : ${displayTitle}`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

    const displayAudio = (language === 'ar' && book.audioSummary_ar) ? book.audioSummary_ar : book.audioSummary;

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-32 pb-32 lg:pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Back Button */}
                <Link
                    href="/books"
                    className={`inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold mb-12 group transition-all active-scale ${isRtl ? 'flex-row-reverse' : ''}`}
                >
                    <MoveLeft size={20} className={`transition-transform ${isRtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
                    {t.book_detail.back}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Cover & Audio */}
                    <div className="space-y-12">
                        {/* ... (existing image code) */}
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(6,78,59,0.3)] border border-emerald-500/10 group">
                            <Image
                                src={book.coverImage}
                                alt={displayTitle}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {displayAudio && (
                            <div className="glass-card p-6 md:p-8 rounded-[2.5rem] border border-emerald-500/20 shadow-xl relative overflow-hidden">
                                <div className={`absolute top-0 ${isRtl ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full -translate-y-1/2`} />

                                <div className="relative z-10 space-y-6">
                                    <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600">
                                            <Headphones size={24} className="md:w-7 md:h-7" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-serif font-black text-emerald-950 dark:text-emerald-50">{t.book_detail.audio_title}</h3>
                                            <p className="text-[10px] md:text-xs text-emerald-600 font-black uppercase tracking-widest">{t.book_detail.audio_subtitle}</p>
                                        </div>
                                    </div>

                                    <audio key={displayAudio} controls className="w-full h-11 md:h-12 accent-emerald-600 focus:outline-none">
                                        <source src={displayAudio} type="audio/mpeg" />
                                        {t.book_detail.audio_error}
                                    </audio>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Details & Purchase */}
                    <div className="space-y-12">
                        <div className="space-y-6 rtl:text-right">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-[0.2em]">
                                {t.book_detail.badge}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif font-black text-emerald-950 dark:text-emerald-50 leading-tight">
                                {displayTitle}
                            </h1>
                            <div className={`flex items-center gap-4 text-emerald-600 font-bold ${isRtl ? 'flex-row-reverse' : ''}`}>
                                <span className="w-12 h-px bg-emerald-600/30" />
                                <span>Dr. {displayAuthor.split(' ').slice(-2).join(' ')}</span>
                            </div>
                        </div>

                        <div className="prose prose-emerald dark:prose-invert max-w-none rtl:text-right">
                            <p className={`text-xl md:text-2xl text-emerald-950/80 dark:text-emerald-50/80 leading-relaxed font-serif italic ${isRtl ? 'border-r-4 pr-8' : 'border-l-4 pl-8'} border-emerald-500 py-2`}>
                                "{displaySummary}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className={`glass-card p-6 rounded-3xl border border-emerald-500/5 flex items-center gap-4 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                                    <Clock size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">{t.book_detail.availability_label}</div>
                                    <div className="font-bold text-emerald-950 dark:text-white">{t.book_detail.availability_value}</div>
                                </div>
                            </div>
                            <div className={`glass-card p-6 rounded-3xl border border-emerald-500/5 flex items-center gap-4 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">{t.book_detail.quality_label}</div>
                                    <div className="font-bold text-emerald-950 dark:text-white">{t.book_detail.quality_value}</div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-10 rounded-[3rem] border border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400" />

                            <div className={`flex flex-col sm:flex-row justify-between items-center gap-8 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
                                <div className={`text-center ${isRtl ? 'sm:text-right' : 'sm:text-left'}`}>
                                    <span className="text-sm font-bold uppercase tracking-widest text-emerald-900/40 dark:text-emerald-100/40 block mb-2">{t.book_detail.price_label}</span>
                                    <span className={`text-5xl font-serif font-black text-emerald-600 dark:text-emerald-400 ${isRtl ? 'flex flex-row-reverse items-center justify-end gap-2' : ''}`}>
                                        {book.price.toLocaleString(language === 'ar' ? 'ar-EG' : 'fr-FR')}
                                        <span className="text-lg align-top mt-1 inline-block">{t.book_detail.currency}</span>
                                    </span>
                                </div>
                                <div className="w-full sm:w-auto flex flex-col gap-4">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        className={`flex items-center justify-center gap-3 px-10 py-6 rounded-2xl bg-emerald-700 dark:bg-emerald-600 text-white font-black text-xl shadow-[0_20px_40px_-10px_rgba(4,120,87,0.4)] hover:bg-emerald-800 hover:-translate-y-1 transition-all active:scale-95 w-full sm:w-auto ${isRtl ? 'flex-row-reverse' : ''}`}
                                    >
                                        <ShoppingCart size={24} />
                                        {t.book_detail.order_button}
                                    </a>
                                    <p className={`text-[10px] text-center text-emerald-900/40 dark:text-emerald-100/40 uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                        <MessageSquare size={12} />
                                        {t.book_detail.whatsapp_status}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {displaySituations && displaySituations.length > 0 && (
                    <SituationCards situations={displaySituations} />
                )}
            </div>

            {/* Sticky Mobile CTA */}
            <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="glass-card p-4 rounded-[2.5rem] flex items-center justify-between gap-4 border-t border-emerald-500/10 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]">
                    <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 block">
                            {t.book_detail.price_label}
                        </span>
                        <span className="text-xl font-serif font-black text-emerald-600">
                            {book.price.toLocaleString(language === 'ar' ? 'ar-EG' : 'fr-FR')} {t.book_detail.currency}
                        </span>
                    </div>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-emerald-700 dark:bg-emerald-600 text-white font-black text-sm active-scale"
                    >
                        <ShoppingCart size={18} />
                        {t.book_detail.order_button}
                    </a>
                </div>
            </div>

            {/* Background Decorations */}
            <div className={`fixed top-0 ${isRtl ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none`} />
            <div className={`fixed bottom-0 ${isRtl ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full translate-y-1/2 pointer-events-none`} />
        </div>
    );
}
