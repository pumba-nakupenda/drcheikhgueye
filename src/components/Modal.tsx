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
            <div className="relative w-full max-w-lg transform rounded-2xl bg-white dark:bg-zinc-900 p-6 text-left shadow-xl transition-all sm:my-8 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                    {title && (
                        <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
                            {title}
                        </h3>
                    )}
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">
                    {audioSummary && (
                        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-500/10">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Résumé Audio
                            </p>
                            <audio controls className="w-full h-10 accent-emerald-600">
                                <source src={audioSummary} type="audio/mpeg" />
                                Votre navigateur ne supporte pas l'élément audio.
                            </audio>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}
