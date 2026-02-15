"use client";

import Link from "next/link";
import { Home as HomeIcon, MoveLeft, Compass } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-950 overflow-hidden relative">
            {/* Decorative backgrounds */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-emerald-400/10 blur-[150px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
            </div>

            <div className="max-w-2xl mx-auto px-4 text-center relative z-10 space-y-12">
                <div className="relative inline-block">
                    <Compass size={120} className="text-emerald-400/20 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl md:text-9xl font-serif font-black text-white opacity-20">404</span>
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white">
                        Page <span className="text-emerald-400 italic">Introuvable.</span>
                    </h1>
                    <p className="text-emerald-100/60 text-lg md:text-xl leading-relaxed">
                        Le chemin que vous cherchez n'existe pas ou a été déplacé vers une autre lumière.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <Link
                        href="/"
                        className="btn-premium bg-emerald-400 text-emerald-950 hover:bg-emerald-300 px-10 py-5 text-lg flex items-center justify-center gap-3 group"
                    >
                        <HomeIcon size={20} />
                        Retour à l'Accueil
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="btn-premium bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 px-10 py-5 text-lg flex items-center justify-center gap-3"
                    >
                        <MoveLeft size={20} />
                        Page Précédente
                    </button>
                </div>
            </div>

            {/* Bottom Brand */}
            <div className="absolute bottom-12 left-0 w-full text-center">
                <div className="flex items-center justify-center gap-3 opacity-30">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-serif font-black text-sm">G</div>
                    <span className="text-white font-serif tracking-widest text-xs uppercase">Dr. Cheikh Gueye</span>
                </div>
            </div>
        </div>
    );
}
