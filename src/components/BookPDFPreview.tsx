"use client";

import { FileText, Maximize2, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BookPDFPreviewProps {
    pdfUrl: string;
    title: string;
}

export default function BookPDFPreview({ pdfUrl, title }: BookPDFPreviewProps) {
    const { t, dir, language } = useLanguage();
    const isRtl = dir === 'rtl';

    return (
        <div className="mt-16 reveal relative">
            {/* Header Section */}
            <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 ${isRtl ? 'md:flex-row-reverse text-right' : ''}`}>
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                        {t.book_detail.pdf_button}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-emerald-950 dark:text-emerald-50 leading-tight">
                        {t.book_detail.preview_button} <br />
                        <span className="text-emerald-600 italic font-medium text-2xl md:text-3xl">{t.book_detail.preview_subtitle}</span>
                    </h2>
                </div>
            </div>

            {/* Embedded PDF Container */}
            <div className="relative w-full h-[600px] md:h-[800px] rounded-[3rem] overflow-hidden border-8 border-white dark:border-zinc-900 shadow-[0_50px_100px_-20px_rgba(6,78,59,0.15)] bg-zinc-200 dark:bg-zinc-800 group">
                {/* Anti-copy/Right-click Overlay (Invisible but blocks interaction on parts) */}
                <div className="absolute inset-0 z-10 pointer-events-none select-none">
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] rotate-[-30deg] text-emerald-900 dark:text-white text-4xl font-black uppercase tracking-[1em] whitespace-nowrap">
                        DR CHEIKH GUEYE • APERÇU PROTÉGÉ • DR CHEIKH GUEYE
                    </div>
                </div>
                
                <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full border-none relative z-0 select-none"
                    title={title}
                    onContextMenu={(e) => e.preventDefault()}
                />

                {/* Blur Curtain for the end of preview */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white dark:from-zinc-900 via-white/80 dark:via-zinc-900/80 to-transparent z-20 flex flex-col items-center justify-end pb-12 px-6 text-center">
                    <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 p-8 rounded-[2.5rem] border border-white/30 shadow-2xl space-y-4 max-w-md">
                        <h4 className="text-xl font-serif font-black text-emerald-950 dark:text-white">
                            {language === 'ar' ? "نهاية المقتطف" : "Fin de l'extrait"}
                        </h4>
                        <p className="text-sm text-emerald-900/60 dark:text-emerald-100/60">
                            {language === 'ar' 
                                ? "للإطلاع على كامل الكتاب، يرجى طلب نسختكم." 
                                : "Pour accéder à l'intégralité de l'ouvrage, nous vous invitons à commander votre exemplaire."}
                        </p>
                    </div>
                </div>

                {/* Mobile Hint */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-emerald-950/80 backdrop-blur-md text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl z-20 border border-white/10 pointer-events-none md:hidden animate-pulse">
                    Faites défiler pour lire
                </div>
            </div>
        </div>
    );
}
