"use client";

import Image from "next/image";
import { useState } from "react";
import { Book } from "@/data/books";
import Modal from "./Modal";
import { siteConfig } from "@/config/site";
import { ShoppingCart, BookOpen, ChevronRight, Headphones } from "lucide-react";

interface BookCardProps {
    book: Book;
}

export default function BookCard({ book }: BookCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const phoneNumber = siteConfig.whatsappNumber;
    const message = `Bonjour, je souhaite commander le livre : ${book.title}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <div className="group relative glass-card p-4 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-md">
                    <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {book.audioSummary && (
                        <div className="absolute top-4 right-4 z-10 animate-pulse">
                            <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2 border border-emerald-400/30">
                                <Headphones size={14} className="text-emerald-400" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-white">Audio</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-bold font-serif leading-tight line-clamp-2">
                            {book.title}
                        </h3>
                        <span className="shrink-0 font-bold text-emerald-600 dark:text-emerald-400">
                            {book.price.toLocaleString("fr-FR")} CFA
                        </span>
                    </div>

                    <p className="text-sm text-emerald-900/60 dark:text-emerald-100/60 line-clamp-2 leading-relaxed">
                        {book.summary}
                    </p>

                    <div className="pt-4 flex flex-col gap-3">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm hover:bg-emerald-500/5 active:bg-emerald-500/10 active:scale-[0.98] transition-all"
                        >
                            <BookOpen size={18} />
                            Résumé du livre
                        </button>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-emerald-700 dark:bg-emerald-600 text-white font-black text-sm shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 active:scale-[0.98] transition-all"
                        >
                            <ShoppingCart size={18} />
                            Commander l'ouvrage
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={book.title}
                audioSummary={book.audioSummary}
            >
                <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
                        <div className="relative shrink-0 w-48 sm:w-32 aspect-[3/4] rounded-2xl sm:rounded-xl overflow-hidden shadow-2xl border border-emerald-500/10">
                            <Image src={book.coverImage} alt={book.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1 space-y-4">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-2 block">Ouvrage du Dr. Cheikh GUEYE</span>
                                <p className="text-lg md:text-xl text-emerald-950/90 dark:text-emerald-50/90 leading-relaxed font-serif italic">
                                    "{book.summary}"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="glass rounded-[2.5rem] p-8 border border-emerald-500/10 bg-emerald-50/30 dark:bg-emerald-950/20">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
                            <div className="text-center sm:text-left">
                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-900/40 dark:text-emerald-100/40 block mb-1">Prix de l'unité</span>
                                <span className="text-4xl font-serif font-black text-emerald-600 dark:text-emerald-400">
                                    {book.price.toLocaleString("fr-FR")} <span className="text-sm align-top mt-2 inline-block">CFA</span>
                                </span>
                            </div>
                            <div className="w-full sm:w-auto">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-emerald-700 dark:bg-emerald-600 text-white font-black text-lg shadow-xl shadow-emerald-700/30 hover:bg-emerald-800 transition-all active:scale-95 w-full sm:w-auto"
                                >
                                    <ShoppingCart size={20} />
                                    Commander
                                </a>
                            </div>
                        </div>
                        <p className="text-[10px] text-center text-emerald-900/40 dark:text-emerald-100/40 uppercase font-bold tracking-[0.1em]">
                            Expédition disponible dans tout le Sénégal et à l'international
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    );
}
