"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Lock, Book as BookIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BookFlipbookProps {
    images: string[];
    title: string;
}

export default function BookFlipbook({ images, title }: BookFlipbookProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const { t, dir, language } = useLanguage();
    const isRtl = dir === 'rtl';
    
    // Total steps: Cover (0) + Dynamic Leaves + Lock Page
    const numLeaves = Math.ceil((images.length - 1) / 2);
    const totalSteps = numLeaves + 1; 

    const nextPage = () => {
        if (currentPage < totalSteps) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <div className="mt-24 mb-32 reveal">
            <div className={`flex flex-col items-center text-center gap-6 mb-16`}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                    <BookIcon size={14} />
                    {language === 'ar' ? "تجربة تفاعلية" : "Expérience Interactive"}
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-black text-emerald-950 dark:text-emerald-50 leading-tight">
                    {t.book_detail.preview_button}
                </h2>
                <p className="text-emerald-600 italic font-medium text-lg">
                    {language === 'ar' ? "انقر على السهم لقلب الصفحات" : "Cliquez sur les flèches pour tourner les pages"}
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 md:px-0">
                {/* 3D Book Stage */}
                <div className="book-stage flex justify-center items-center h-[450px] sm:h-[500px] md:h-[700px]">
                    
                    {/* The Book Structure */}
                    <div className={`relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] h-full transition-all duration-1000 preserve-3d ${currentPage > 0 ? 'md:translate-x-[25%]' : ''}`}>
                        
                        {/* Book Spine (Static) */}
                        <div className="absolute left-0 top-0 w-2 md:w-4 h-full bg-emerald-900 rounded-l-sm shadow-2xl z-50 origin-right transform md:block hidden" />

                        {/* 1. FRONT COVER */}
                        <div className={`absolute inset-0 z-40 origin-left transition-all duration-1000 preserve-3d shadow-2xl rounded-r-[1rem] md:rounded-r-[1.5rem] ${currentPage > 0 ? 'rotate-y-[-140deg] md:rotate-y-[-160deg] opacity-0 md:opacity-100' : 'rotate-y-0'}`}>
                            {/* Outer Cover */}
                            <div className="absolute inset-0 backface-hidden bg-emerald-800 rounded-r-[1rem] md:rounded-r-[1.5rem] border-y-2 md:border-y-4 border-r-2 md:border-r-4 border-emerald-700 overflow-hidden shadow-2xl">
                                <Image src={images[0]} alt="Cover" fill className="object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-transparent to-transparent" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center">
                                    <div className="w-8 md:w-12 h-0.5 md:h-1 bg-white/30 mb-4 md:mb-6" />
                                    <h3 className="text-white font-serif font-black text-lg md:text-2xl mb-2 md:mb-4 line-clamp-3">{title}</h3>
                                    <p className="text-emerald-200 text-[10px] md:text-xs font-bold uppercase tracking-widest">Dr. Cheikh Gueye</p>
                                </div>
                            </div>
                            {/* Inner Cover */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-zinc-100 dark:bg-zinc-800 rounded-l-[1rem] md:rounded-l-[1.5rem] border-y-2 md:border-y-4 border-l-2 md:border-l-4 border-emerald-900/10 shadow-inner flex items-center justify-center">
                                <div className="text-emerald-900/10 dark:text-white/5 font-serif text-6xl md:text-8xl">G</div>
                            </div>
                        </div>

                        {/* 2. DYNAMIC PAGES (Recto-Verso) */}
                        {Array.from({ length: Math.ceil((images.length - 1) / 2) }).map((_, index) => {
                            const leafNum = index + 1;
                            const isFlipped = currentPage > leafNum;
                            const isCurrent = currentPage === leafNum;
                            const zIndex = 20 - leafNum;
                            
                            const rectoImage = images[leafNum * 2 - 1];
                            const versoImage = images[leafNum * 2];
                            
                            return (
                                <div 
                                    key={index}
                                    className={`absolute inset-0 origin-left transition-all duration-1000 preserve-3d shadow-xl rounded-r-[1rem] md:rounded-r-[1.5rem] ${isFlipped ? 'rotate-y-[-140deg] md:rotate-y-[-155deg] opacity-0 md:opacity-100' : 'rotate-y-0'} ${!isFlipped && !isCurrent ? 'pointer-events-none' : ''}`}
                                    style={{ zIndex: isFlipped ? 10 + leafNum : zIndex }}
                                >
                                    {/* Recto */}
                                    <div className="absolute inset-0 backface-hidden bg-white dark:bg-zinc-900 rounded-r-[1rem] md:rounded-r-[1.5rem] border-y-2 border-r-2 border-zinc-200 dark:border-zinc-800 overflow-hidden">
                                        {rectoImage && (
                                            <Image src={rectoImage} alt={`Page ${leafNum * 2 - 1}`} fill className="object-cover" />
                                        )}
                                        <div className="absolute inset-y-0 left-0 w-4 md:w-8 bg-gradient-to-r from-black/10 to-transparent" />
                                        <div className="absolute bottom-4 right-6 text-[10px] font-bold text-zinc-400">{leafNum * 2 - 1}</div>
                                    </div>
                                    
                                    {/* Verso */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white dark:bg-zinc-900 rounded-l-[1rem] md:rounded-l-[1.5rem] border-y-2 border-l-2 border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-inner">
                                        {versoImage ? (
                                            <Image src={versoImage} alt={`Page ${leafNum * 2}`} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
                                                <div className="text-emerald-900/5 dark:text-white/5 font-serif text-6xl">G</div>
                                            </div>
                                        )}
                                        <div className="absolute inset-y-0 right-0 w-4 md:w-8 bg-gradient-to-l from-black/10 to-transparent" />
                                        <div className="absolute bottom-4 left-6 text-[10px] font-bold text-zinc-400">{leafNum * 2}</div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* 3. FINAL LOCK PAGE */}
                        <div className={`absolute inset-0 z-0 bg-emerald-50 dark:bg-emerald-950/40 rounded-r-[1rem] md:rounded-r-[1.5rem] border-y-2 border-r-2 border-emerald-500/10 flex flex-col items-center justify-center p-8 md:p-12 text-center shadow-inner`}>
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-600 mb-4 md:mb-6">
                                <Lock size={28} className="animate-pulse" />
                            </div>
                            <h4 className="text-lg md:text-xl font-serif font-black text-emerald-950 dark:text-white mb-2 md:mb-4">
                                {language === 'ar' ? "نهاية المقتطف" : "Suite protégée"}
                            </h4>
                            <p className="text-xs md:text-sm text-emerald-900/60 dark:text-emerald-100/60 mb-6 leading-relaxed">
                                {language === 'ar' ? "اطلب نسختك الآن" : "Commandez votre exemplaire pour lire la suite."}
                            </p>
                            <Link href="/contact" className="px-6 py-3 bg-emerald-600 text-white rounded-full text-[10px] md:text-xs font-bold shadow-lg shadow-emerald-600/20 active:scale-95 transition-all">
                                {t.book_detail.order_button}
                            </Link>
                        </div>
                    </div>

                    {/* Controls Overlay */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-50 pointer-events-none px-2 md:px-0">
                        <button 
                            onClick={prevPage}
                            disabled={currentPage === 0}
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/95 dark:bg-zinc-800/95 backdrop-blur-md shadow-2xl flex items-center justify-center text-emerald-600 transition-all pointer-events-auto active:scale-90 disabled:opacity-0 ${isRtl ? 'rotate-180' : ''}`}
                        >
                            <ChevronLeft size={28} className="md:w-9 md:h-9" />
                        </button>
                        <button 
                            onClick={nextPage}
                            disabled={currentPage === totalSteps}
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/95 dark:bg-zinc-800/95 backdrop-blur-md shadow-2xl flex items-center justify-center text-emerald-600 transition-all pointer-events-auto active:scale-90 disabled:opacity-0 ${isRtl ? 'rotate-180' : ''}`}
                        >
                            <ChevronRight size={28} className="md:w-9 md:h-9" />
                        </button>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-20 flex justify-center gap-2">
                    {Array.from({ length: totalSteps + 1 }).map((_, i) => (
                        <div 
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i <= currentPage ? 'w-8 bg-emerald-600' : 'w-2 bg-emerald-200 dark:bg-zinc-800'}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .book-stage {
                    perspective: 2000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-0 {
                    transform: rotateY(0deg);
                }
                .rotate-y-\[-155deg\] {
                    transform: rotateY(-155deg);
                }
                .rotate-y-\[-160deg\] {
                    transform: rotateY(-160deg);
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
}
