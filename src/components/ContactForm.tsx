"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
    const { t, language, dir } = useLanguage();
    const isRtl = dir === 'rtl';
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
                <h3 className="text-3xl font-serif font-black text-emerald-950 dark:text-white">{t.contact.form_success_title}</h3>
                <p className="text-emerald-900/60 dark:text-emerald-100/60 max-w-sm mx-auto">
                    {t.contact.form_success_text}
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-emerald-600 font-bold hover:underline"
                >
                    {t.contact.form_another}
                </button>
            </div>
        );
    }

    const inputClass = "w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-500/10 dark:border-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:opacity-30 text-emerald-950 dark:text-white";
    const labelClass = `text-sm font-bold text-emerald-900/40 dark:text-emerald-100/40 uppercase tracking-widest ${isRtl ? 'pr-4' : 'pl-4'}`;

    return (
        <form onSubmit={handleSubmit} className="space-y-6 rtl:text-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="contact-name" className={labelClass}>{t.contact.form_name}</label>
                    <input
                        id="contact-name"
                        name="name"
                        required
                        type="text"
                        placeholder={t.contact.form_name_placeholder}
                        className={inputClass}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="contact-email" className={labelClass}>{t.contact.form_email}</label>
                    <input
                        id="contact-email"
                        name="email"
                        required
                        type="email"
                        placeholder={t.contact.form_email_placeholder}
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-subject" className={labelClass}>{t.contact.form_subject}</label>
                <div className="relative">
                    <select
                        id="contact-subject"
                        name="subject"
                        className={`${inputClass} appearance-none cursor-pointer rtl:pr-6 rtl:pl-10`}
                    >
                        {t.contact.subjects.map((sub: string, i: number) => (
                            <option key={i}>{sub}</option>
                        ))}
                    </select>
                    <div className={`absolute inset-y-0 ${isRtl ? 'left-4' : 'right-4'} flex items-center pointer-events-none`} aria-hidden="true">
                        <svg className="w-4 h-4 text-emerald-600/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-message" className={labelClass}>{t.contact.form_message}</label>
                <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder={t.contact.form_message_placeholder}
                    className={`${inputClass} resize-none`}
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-[0.98] ${isRtl ? 'flex-row-reverse' : ''}`}
            >
                {status === "loading" ? t.contact.form_sending : t.contact.form_submit}
                <Send size={20} className={isRtl ? 'rotate-180' : ''} aria-hidden="true" />
            </button>
        </form>
    );
}
