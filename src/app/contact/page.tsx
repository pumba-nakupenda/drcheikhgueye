"use client";

import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, MessageSquare, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
    const { t, language, dir } = useLanguage();
    const isRtl = dir === 'rtl';

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 bg-zinc-50 dark:bg-zinc-950 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-20 space-y-4">
                    <h1 className="text-3xl md:text-7xl font-serif font-black text-emerald-950 dark:text-emerald-50">
                        {t.contact.title} <br /> <span className="text-emerald-600 italic">{t.contact.title_highlight}</span>
                    </h1>
                    <p className="text-emerald-900/60 dark:text-emerald-100/60 text-lg max-w-2xl mx-auto">
                        {t.contact.tagline}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-3 rtl:text-right">
                                <div className={`w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 ${isRtl ? 'mr-0 ml-auto' : ''}`}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-emerald-950 dark:text-emerald-50">{t.contact.phone}</h3>
                                    <p className="text-emerald-900/60 dark:text-emerald-100/60 font-bold tracking-wider">+221 77 653 12 56</p>
                                </div>
                            </div>

                            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-3 rtl:text-right">
                                <a
                                    href={siteConfig.whatsappLinks.general}
                                    target="_blank"
                                    className="block group"
                                >
                                    <div className={`w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform ${isRtl ? 'mr-0 ml-auto' : ''}`}>
                                        <MessageSquare size={24} />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="font-bold text-emerald-950 dark:text-emerald-50">{t.contact.whatsapp}</h3>
                                        <p className="text-emerald-600 font-bold">{t.contact.whatsapp_status}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-8 pt-10 border-t border-emerald-500/10 rtl:text-right">
                            <h2 className="text-2xl font-serif font-bold text-emerald-950 dark:text-emerald-50">{t.contact.others}</h2>
                            <div className="space-y-6">
                                <div className={`flex items-center gap-4 text-emerald-900/60 dark:text-emerald-100/60 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <Mail className="text-emerald-600" size={20} />
                                    <span>{siteConfig.email}</span>
                                </div>
                                <div className={`flex items-center gap-4 text-emerald-900/60 dark:text-emerald-100/60 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <MapPin className="text-emerald-600" size={20} />
                                    <span>{siteConfig.address}</span>
                                </div>
                                <div className={`flex items-center gap-4 text-emerald-900/60 dark:text-emerald-100/60 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                    <Globe className="text-emerald-600" size={20} />
                                    <span>www.drcheikhgueye.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="glass-card p-5 sm:p-10 md:p-16 rounded-3xl md:rounded-[4rem] border border-emerald-500/10 shadow-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
