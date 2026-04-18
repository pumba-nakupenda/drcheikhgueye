"use client";

import { Headphones } from "lucide-react";
import CustomAudioPlayer from "./CustomAudioPlayer";

interface AudioCardProps {
    src: string;
    title: string;
    subtitle: string;
}

export default function AudioCard({ src, title, subtitle }: AudioCardProps) {
    return (
        <div className="glass-card p-6 md:p-8 rounded-[2.5rem] border border-emerald-500/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600">
                        <Headphones size={24} className="md:w-7 md:h-7" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-serif font-black text-emerald-950 dark:text-emerald-50">{title}</h3>
                        <p className="text-[10px] md:text-xs text-emerald-600 font-black uppercase tracking-widest">{subtitle}</p>
                    </div>
                </div>
                <CustomAudioPlayer src={src} />
            </div>
        </div>
    );
}
