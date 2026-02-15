"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    audioSummary?: string;
}

export default function Modal({ isOpen, onClose, children, title, audioSummary }: ModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
            <div className="relative w-full max-w-lg transform rounded-2xl bg-white dark:bg-zinc-900 p-6 text-left shadow-xl transition-all sm:my-8 overflow-y-auto max-h-[90vh] scrollbar-hide">
                <div className="flex items-center justify-between mb-4 sticky top-0 bg-white dark:bg-zinc-900 z-10 pb-2">
                    {title && (
                        <h3 className="text-xl font-serif font-black leading-6 text-emerald-950 dark:text-emerald-50 pr-8">
                            {title}
                        </h3>
                    )}
                    <button
                        onClick={onClose}
                        className="absolute right-0 top-0 rounded-full p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all focus:outline-none"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">
                    {audioSummary && (
                        <div className="mb-8 p-5 rounded-[2rem] bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-500/10 shadow-inner">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-4 flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                Présentation Audio
                            </p>
                            <audio controls className="w-full h-10 accent-emerald-600 focus:outline-none">
                                <source src={audioSummary} type="audio/mpeg" />
                                Votre navigateur ne supporte pas l'élément audio.
                            </audio>
                        </div>
                    )}
                    <div className="relative z-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
