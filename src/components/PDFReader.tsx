"use client";

import { useState } from "react";
import { X, FileText, Maximize2, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PDFReaderProps {
    pdfUrl: string;
    title: string;
}

export default function PDFReader({ pdfUrl, title }: PDFReaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { t, dir } = useLanguage();
    const isRtl = dir === 'rtl';

    const openReader = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeReader = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="mt-8">
            <button
                onClick={openReader}
                className="group flex items-center gap-4 p-6 rounded-[2rem] bg-white dark:bg-emerald-900/10 border border-emerald-500/10 hover:border-emerald-500/30 transition-all shadow-xl shadow-emerald-900/5 w-full active:scale-[0.98]"
            >
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform">
                    <FileText size={28} />
                </div>
                <div className={`flex-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-serif font-black text-emerald-950 dark:text-emerald-50 leading-none mb-2">
                        {t.book_detail.pdf_button}
                    </h3>
                    <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest opacity-60">
                        {title}
                    </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <Maximize2 size={18} />
                </div>
            </button>

            {/* Fullscreen PDF Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-zinc-950/90 backdrop-blur-xl flex flex-col animate-in fade-in duration-300">
                    {/* Header */}
                    <div className="bg-white dark:bg-zinc-900 border-b border-emerald-500/10 p-4 flex items-center justify-between shadow-lg">
                        <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                            <button 
                                onClick={closeReader}
                                className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500"
                            >
                                <X size={24} />
                            </button>
                            <h2 className="text-lg font-serif font-black text-emerald-950 dark:text-emerald-50 hidden sm:block">
                                {title}
                            </h2>
                        </div>

                        <div className="flex items-center gap-2">
                            <a 
                                href={pdfUrl} 
                                download 
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all active:scale-95"
                            >
                                <Download size={16} />
                                <span className="hidden xs:inline">Download</span>
                            </a>
                        </div>
                    </div>

                    {/* Viewer */}
                    <div className="flex-1 relative bg-zinc-800 overflow-hidden">
                        <iframe
                            src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
                            className="w-full h-full border-none"
                            title={title}
                        />
                        
                        {/* Overlay for "Premium" feel if needed, or instructions */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-black/50 backdrop-blur-md text-white/70 text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                            Mode Aperçu Sécurisé
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
