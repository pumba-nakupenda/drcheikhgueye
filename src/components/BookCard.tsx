"use client";

import Image from "next/image";
import Link from "next/link";
import { Book } from "@/data/books";
import { siteConfig } from "@/config/site";
import { ShoppingCart, BookOpen, ChevronRight, Headphones, Share2, FileText } from "lucide-react";
import CustomAudioPlayer from "./CustomAudioPlayer";
import { useState } from "react";
import Toast from "./Toast";

interface BookCardProps {
    book: Book;
}

import { useLanguage } from "@/context/LanguageContext";
import Flag from "./Flag";

export default function BookCard({ book }: BookCardProps) {
    const { language, t, dir } = useLanguage();
    const [showToast, setShowToast] = useState(false);
    const isRtl = dir === 'rtl';
    const phoneNumber = siteConfig.whatsappNumber;
    const availableLabel = language === 'ar' ? 'متوفر بـ' : language === 'en' ? 'Available in' : 'Disponible en';

    // Choose bilingual fields
    const displayTitle = language === 'ar' && book.title_ar ? book.title_ar : language === 'en' && book.title_en ? book.title_en : book.title;
    const displayAuthor = language === 'ar' && book.author_ar ? book.author_ar : language === 'en' && book.author_en ? book.author_en : book.author;
    const displaySummary = language === 'ar' && book.summary_ar ? book.summary_ar : language === 'en' && book.summary_en ? book.summary_en : book.summary;

    const message = language === 'ar'
        ? `مرحباً، أود طلب كتاب: ${displayTitle}`
        : language === 'en'
        ? `Hello, I would like to order the book: ${displayTitle}`
        : `Bonjour, je souhaite commander le livre : ${displayTitle}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const handleShare = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const shareData = {
            title: displayTitle,
            text: displaySummary,
            url: `${window.location.origin}/books/${book.id}`,
        };

        if (navigator.share) {
            navigator.share(shareData).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareData.url);
            setShowToast(true);
        }
    };

    return (
        <div className="group relative glass-card p-4 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col rtl:text-right">
            <Toast 
                message={language === 'ar' ? "تم نسخ الرابط!" : language === 'en' ? "Link copied!" : "Lien copié !"}
                isVisible={showToast} 
                onClose={() => setShowToast(false)} 
            />
            <Link href={`/books/${book.id}`} className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-md block">
                <Image
                    src={book.coverImage}
                    alt={displayTitle}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Action Buttons on Cover */}
                <div className={`absolute bottom-4 ${isRtl ? 'left-4' : 'right-4'} z-10 flex flex-col gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-500`}>
                    <button 
                        onClick={handleShare}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-emerald-950 transition-all"
                    >
                        <Share2 size={18} />
                    </button>
                </div>

                {(book.audioSummary || book.audioSummary_ar) && (
                    <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} z-10 animate-pulse`}>
                        <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2 border border-emerald-400/30">
                            <Headphones size={14} className="text-emerald-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">
                                {language === 'ar' ? "صوتي" : "Audio"}
                            </span>
                        </div>
                    </div>
                )}

                {book.pdfPreview && (
                    <div className={`absolute top-14 ${isRtl ? 'left-4' : 'right-4'} z-10`}>
                        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-emerald-500/30 shadow-lg">
                            <FileText size={14} className="text-emerald-600" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
                                PDF
                            </span>
                        </div>
                    </div>
                )}
            </Link>

            <div className="space-y-3 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4">
                    <Link href={`/books/${book.id}`} className="hover:text-emerald-600 transition-colors">
                        <h3 className="text-xl font-bold font-serif leading-tight line-clamp-2">
                            {displayTitle}
                        </h3>
                    </Link>
                    <span className="shrink-0 font-bold text-emerald-600 dark:text-emerald-400">
                        {book.price.toLocaleString(language === 'ar' ? "ar-SA" : language === 'en' ? "en-US" : "fr-FR")} CFA
                    </span>
                </div>

                {book.languages && book.languages.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                            {availableLabel}
                        </span>
                        <div className="flex items-center gap-2">
                            {book.languages.map((lang, i) => (
                                <span key={lang} className="flex items-center gap-1">
                                    {i > 0 && <span className="text-emerald-400/50 text-xs">/</span>}
                                    <Flag lang={lang} size={16} />
                                    <span className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
                                        {lang === 'fr' ? (language === 'ar' ? 'فرنسية' : language === 'en' ? 'French' : 'Français')
                                         : lang === 'en' ? (language === 'ar' ? 'إنجليزية' : language === 'en' ? 'English' : 'Anglais')
                                         : (language === 'ar' ? 'عربية' : language === 'en' ? 'Arabic' : 'Arabe')}
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <p className="text-sm text-emerald-900/60 dark:text-emerald-100/60 line-clamp-2 leading-relaxed">
                    {displaySummary}
                </p>

                {book.introAudio && (
                    <div className="pt-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Headphones size={12} className="text-emerald-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                                {language === 'ar' ? "عرض صوتي" : language === 'en' ? "Audio Presentation" : "Présentation audio"}
                            </span>
                        </div>
                        <CustomAudioPlayer src={book.introAudio} variant="compact" />
                    </div>
                )}

                <div className="pt-4 flex flex-col gap-3 mt-auto">
                    <Link
                        href={`/books/${book.id}`}
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm hover:bg-emerald-500/5 active:bg-emerald-500/10 active:scale-[0.98] transition-all"
                    >
                        <BookOpen size={18} />
                        {language === 'ar' ? "ملخص الكتاب" : language === 'en' ? "Book Summary" : "Résumé du livre"}
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-emerald-700 dark:bg-emerald-600 text-white font-black text-sm shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 active:scale-[0.98] transition-all"
                    >
                        <ShoppingCart size={18} />
                        {language === 'ar' ? "اطلب الكتاب" : language === 'en' ? "Order Book" : "Commander l'ouvrage"}
                        <ChevronRight size={16} className={`transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </a>
                </div>
            </div>
        </div>
    );
}
