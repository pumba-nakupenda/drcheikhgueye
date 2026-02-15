"use client";

import { Send, MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate form submission
        setTimeout(() => setStatus("success"), 1500);
    };

    if (status === "success") {
        return (
            <div className="glass-card p-12 rounded-[3rem] text-center space-y-6 animate-in fade-in zoom-in duration-700">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <Send size={32} />
                </div>
                <h3 className="text-3xl font-serif font-black text-emerald-950 dark:text-white">Message Envoyé !</h3>
                <p className="text-emerald-900/60 dark:text-emerald-100/60 max-w-sm mx-auto">
                    Merci pour votre message. Le Docteur Cheikh Gueye ou son secrétariat vous répondra dans les plus brefs délais.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-emerald-600 font-bold hover:underline"
                >
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-emerald-900/40 dark:text-emerald-100/40 uppercase tracking-widest pl-4">Nom Complet</label>
                    <input
                        required
                        type="text"
                        placeholder="Jean Dupont"
                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-emerald-950 border border-emerald-500/10 focus:border-emerald-500 outline-none transition-all placeholder:opacity-30"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-emerald-900/40 dark:text-emerald-100/40 uppercase tracking-widest pl-4">Email</label>
                    <input
                        required
                        type="email"
                        placeholder="jean@exemple.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-emerald-950 border border-emerald-500/10 focus:border-emerald-500 outline-none transition-all placeholder:opacity-30"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-emerald-900/40 dark:text-emerald-100/40 uppercase tracking-widest pl-4">Sujet</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-emerald-950 border border-emerald-500/10 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>Commande de livre</option>
                    <option>Demande de conférence</option>
                    <option>Question académique</option>
                    <option>Autre</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-emerald-900/40 dark:text-emerald-100/40 uppercase tracking-widest pl-4">Votre Message</label>
                <textarea
                    required
                    rows={6}
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-emerald-950 border border-emerald-500/10 focus:border-emerald-500 outline-none transition-all placeholder:opacity-30 resize-none"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
                {status === "loading" ? "Envoi en cours..." : "Envoyer le Message"}
                <Send size={20} />
            </button>
        </form>
    );
}
