import { books } from "@/data/books";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Headphones, ShoppingCart, MoveLeft, MessageSquare, BookOpen, Clock, ShieldCheck } from "lucide-react";

interface BookPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BookDetailPage({ params }: BookPageProps) {
    const { id } = await params;
    const book = books.find((b) => b.id === id);

    if (!book) {
        notFound();
    }

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        `Bonjour, je souhaite commander le livre : ${book.title}`
    )}`;

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/books"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold mb-12 group transition-all"
                >
                    <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Retour aux Ouvrages
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Cover & Audio */}
                    <div className="space-y-12">
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(6,78,59,0.3)] border border-emerald-500/10 group">
                            <Image
                                src={book.coverImage}
                                alt={book.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {book.audioSummary && (
                            <div className="glass-card p-8 rounded-[2.5rem] border border-emerald-500/20 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2" />

                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600">
                                            <Headphones size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif font-black text-emerald-950 dark:text-emerald-50">Présentation Audio</h3>
                                            <p className="text-sm text-emerald-600 font-bold uppercase tracking-widest">Écoutez le résumé</p>
                                        </div>
                                    </div>

                                    <audio controls className="w-full h-12 accent-emerald-600 focus:outline-none">
                                        <source src={book.audioSummary} type="audio/mpeg" />
                                        Votre navigateur ne supporte pas l'élément audio.
                                    </audio>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Details & Purchase */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-[0.2em]">
                                Ouvrage Académique
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif font-black text-emerald-950 dark:text-emerald-50 leading-tight">
                                {book.title}
                            </h1>
                            <div className="flex items-center gap-4 text-emerald-600 font-bold">
                                <span className="w-12 h-px bg-emerald-600/30" />
                                <span>Dr. {book.author.split(' ').slice(-2).join(' ')}</span>
                            </div>
                        </div>

                        <div className="prose prose-emerald dark:prose-invert max-w-none">
                            <p className="text-xl md:text-2xl text-emerald-950/80 dark:text-emerald-50/80 leading-relaxed font-serif italic border-l-4 border-emerald-500 pl-8 py-2">
                                "{book.summary}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="glass-card p-6 rounded-3xl border border-emerald-500/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Disponibilité</div>
                                    <div className="font-bold text-emerald-950 dark:text-white">En Stock (Dakar)</div>
                                </div>
                            </div>
                            <div className="glass-card p-6 rounded-3xl border border-emerald-500/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Qualité</div>
                                    <div className="font-bold text-emerald-950 dark:text-white">Édition Premium</div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-10 rounded-[3rem] border border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/20 relative overflow-hidden sticky top-32">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400" />

                            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                                <div className="text-center sm:text-left">
                                    <span className="text-sm font-bold uppercase tracking-widest text-emerald-900/40 dark:text-emerald-100/40 block mb-2">Prix de l'unité</span>
                                    <span className="text-5xl font-serif font-black text-emerald-600 dark:text-emerald-400">
                                        {book.price.toLocaleString("fr-FR")} <span className="text-lg align-top mt-3 inline-block">CFA</span>
                                    </span>
                                </div>
                                <div className="w-full sm:w-auto flex flex-col gap-4">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        className="flex items-center justify-center gap-3 px-10 py-6 rounded-2xl bg-emerald-700 dark:bg-emerald-600 text-white font-black text-xl shadow-[0_20px_40px_-10px_rgba(4,120,87,0.4)] hover:bg-emerald-800 hover:-translate-y-1 transition-all active:scale-95 w-full sm:w-auto"
                                    >
                                        <ShoppingCart size={24} />
                                        Commander
                                    </a>
                                    <p className="text-[10px] text-center text-emerald-900/40 dark:text-emerald-100/40 uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-2">
                                        <MessageSquare size={12} />
                                        Réponse rapide WhatsApp
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </div>
    );
}
