"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BookPreviewProps {
    images: string[];
}

export default function BookPreview({ images }: BookPreviewProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t, dir } = useLanguage();
    const isRtl = dir === 'rtl';

    if (!images || images.length === 0) return null;

    const openPreview = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closePreview = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="mt-12">
            <div className={`flex items-center gap-4 mb-8 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600">
                    <Eye size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-serif font-black text-emerald-950 dark:text-emerald-50">{t.book_detail.preview_button}</h3>
                    <p className="text-xs text-emerald-600 font-black uppercase tracking-widest">{t.book_detail.preview_subtitle}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <div 
                        key={index} 
                        onClick={() => openPreview(index)}
                        className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group shadow-md border border-emerald-500/10"
                    >
                        <Image 
                            src={img} 
                            alt={`Preview ${index + 1}`} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Eye className="text-white w-8 h-8 scale-50 group-hover:scale-100 transition-transform" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-300">
                    <button 
                        onClick={closePreview}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-[110]"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative w-full max-w-4xl aspect-[3/4] max-h-[85vh]">
                        <Image 
                            src={images[currentIndex]} 
                            alt={`Preview ${currentIndex + 1}`} 
                            fill 
                            className="object-contain"
                            priority
                        />
                    </div>

                    {images.length > 1 && (
                        <>
                            <button 
                                onClick={prevImage}
                                className={`absolute ${isRtl ? 'right-4 sm:right-10' : 'left-4 sm:left-10'} p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95`}
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button 
                                onClick={nextImage}
                                className={`absolute ${isRtl ? 'left-4 sm:left-10' : 'right-4 sm:right-10'} p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95`}
                            >
                                <ChevronRight size={32} />
                            </button>
                            
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-emerald-500 w-6' : 'bg-white/30'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
