"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Comment puis-je commander les livres du Docteur ?",
        answer: "La commande se fait simplement via WhatsApp. Cliquez sur le bouton 'Commander sur WhatsApp' présent sur chaque fiche de livre. Un message pré-rempli sera généré pour faciliter votre échange avec notre équipe."
    },
    {
        question: "Quels sont les délais de livraison ?",
        answer: "Pour les commandes à Dakar, la livraison se fait généralement sous 24h à 48h. Pour les envois internationaux, les délais varient selon la destination et vous seront communiqués lors de votre commande sur WhatsApp."
    },
    {
        question: "Les ouvrages sont-ils adaptés aux débutants ?",
        answer: "Oui, l'ouvrage 'Approche pratique de l'initiation à l'arabe' est spécifiquement conçu pour les débutants francophones. Le Docteur a élaboré une méthode progressive qui part des bases fondamentales."
    },
    {
        question: "Existe-t-il des versions numériques (PDF/Ebook) ?",
        answer: "Actuellement, nous privilégions le format papier pour garantir une meilleure expérience d'apprentissage. Cependant, vous pouvez écouter les résumés audio directement sur ce site."
    },
    {
        question: "Comment organiser une conférence avec le Docteur ?",
        answer: "Vous pouvez nous contacter via le formulaire de contact formel présent sur la page 'Contact' ou nous envoyer un email directement à contact@drcheikhgueye.com."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                        Aide & Infos
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                        Questions <span className="text-emerald-600 italic">Fréquentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="glass-card rounded-3xl border border-emerald-500/10 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <HelpCircle className={`shrink-0 ${openIndex === i ? "text-emerald-600" : "text-emerald-900/20 dark:text-emerald-100/20"} transition-colors`} />
                                    <span className={`font-bold text-lg ${openIndex === i ? "text-emerald-950 dark:text-white" : "text-emerald-900/70 dark:text-emerald-100/60"}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <ChevronDown className={`shrink-0 transition-transform duration-500 ${openIndex === i ? "rotate-180 text-emerald-600" : "text-emerald-900/20"}`} />
                            </button>

                            <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="px-8 pb-8 pt-2 pl-20">
                                    <p className="text-emerald-900/60 dark:text-emerald-100/50 leading-relaxed font-light text-lg">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
