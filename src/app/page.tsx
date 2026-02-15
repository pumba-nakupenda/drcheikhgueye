"use client";

import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, Sparkles, Languages, PenLine, ScrollText } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Home() {
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        <div className="text-center lg:text-left space-y-8 md:space-y-10">
                            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-bold uppercase tracking-[0.2em] animate-bounce">
                                <Sparkles size={16} />
                                L'Art de la Transmission
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-black text-white leading-[1.1] md:leading-[1] tracking-tighter">
                                Explorer <br />
                                <span className="text-emerald-400 italic font-medium">l'Infini</span> <br />
                                des Mots.
                            </h1>

                            <p className="text-lg md:text-2xl text-emerald-100/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                                Dr. Cheikh Gueye : Traducteur, Auteur et Phénoménologue du sacré. Un pont intellectuel entre l'Arabe classique et la modernité.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
                                <Link
                                    href="/books"
                                    className="btn-premium bg-emerald-400 text-emerald-950 hover:bg-emerald-300 px-10 py-5 text-lg flex items-center justify-center gap-3 group"
                                >
                                    Consulter l'Ouvrage
                                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/about"
                                    className="btn-premium bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 px-10 py-5 text-lg flex items-center justify-center gap-3"
                                >
                                    Découvrir l'Auteur
                                </Link>
                            </div>

                            {/* Stats/Badges */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-12 pt-16 border-t border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-800/30 flex items-center justify-center text-emerald-400 border border-emerald-400/10 shadow-inner">
                                        <ScrollText size={28} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-black text-2xl">12+</div>
                                        <div className="text-emerald-400/40 text-[10px] uppercase font-bold tracking-[0.2em]">Publications</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-800/30 flex items-center justify-center text-emerald-400 border border-emerald-400/10 shadow-inner">
                                        <Languages size={28} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-black text-2xl">Arabe | FR | EN</div>
                                        <div className="text-emerald-400/40 text-[10px] uppercase font-bold tracking-[0.2em]">Polyglotte</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-[28rem] mx-auto group">
                            <div className="absolute inset-0 bg-emerald-600 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-700 shadow-2xl" />
                            <div className="relative h-full rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                                <Image
                                    src="/images/portrait-cheikh-gueye.jpg"
                                    alt="Dr. Cheikh Gueye"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

                                <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl border border-white/20 backdrop-blur-md translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                    <p className="text-white italic text-lg font-serif">
                                        "L'excellence est un chemin vers la lumière."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hidden lg:flex">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Défiler</span>
                    <div className="w-px h-12 bg-gradient-to-b from-emerald-400/50 to-transparent" />
                </div>
            </section>

            {/* Featured Books Section - WOW Grid */}
            <section className="py-32 relative bg-zinc-50 dark:bg-zinc-950 overflow-hidden reveal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="space-y-4 max-w-2xl text-left">
                            <h2 className="text-4xl md:text-6xl font-serif font-black text-emerald-950 dark:text-emerald-50 leading-tight">
                                Dernières <br /> <span className="text-emerald-600 dark:text-emerald-400 underline decoration-emerald-200/50 underline-offset-8 italic font-medium">Parutions.</span>
                            </h2>
                            <p className="text-emerald-900/60 dark:text-emerald-100/60 text-lg">
                                Explorez des œuvres qui marient spiritualité, linguistique et réflexion sociétale.
                            </p>
                        </div>
                        <Link
                            href="/books"
                            className="px-8 py-3 rounded-2xl bg-white dark:bg-emerald-900/20 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400 font-bold hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition-all group shrink-0"
                        >
                            Voir toute la collection
                            <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
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

            <Testimonials />

            {/* CTA Section - Commandes */}
            <section className="py-24 px-4 bg-emerald-900 overflow-hidden relative reveal">
                <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 rounded-[4rem] text-center relative z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent" />
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 relative">
                        Soutenir le Savoir.
                    </h2>
                    <p className="text-emerald-100/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative">
                        Chaque livre commandé est un soutien direct à la recherche et à la transmission culturelle au Sénégal.
                    </p>
                    <Link
                        href="/books"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-950 rounded-full font-black hover:scale-105 transition-transform shadow-2xl relative group"
                    >
                        Parcourir les Livres
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
