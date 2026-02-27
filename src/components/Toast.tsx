"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-bounce-in">
            <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-500/20 dark:border-emerald-600/40 backdrop-blur-md">
                <CheckCircle2 size={20} />
                <span className="font-bold text-sm">{message}</span>
                <button onClick={onClose} className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors">
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
