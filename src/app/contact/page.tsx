import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, MessageSquare, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20 space-y-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-emerald-950 dark:text-emerald-50">
                        Entrer en <br /> <span className="text-emerald-600 italic">Contact.</span>
                    </h1>
                    <p className="text-emerald-900/60 dark:text-emerald-100/60 text-lg max-w-2xl mx-auto">
                        Pour toute commande d'ouvrage, demande de conférence ou collaboration académique.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="glass-card p-8 rounded-3xl space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-emerald-950 dark:text-emerald-50">Téléphone</h3>
                                    <p className="text-emerald-900/60 dark:text-emerald-100/60 font-bold tracking-wider">+221 77 653 12 56</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl space-y-4">
                                <a
                                    href={siteConfig.whatsappLinks.general}
                                    target="_blank"
                                    className="block group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="font-bold text-emerald-950 dark:text-emerald-50">WhatsApp</h3>
                                        <p className="text-emerald-600 font-bold">Réponse sous 24h</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-8 pt-10 border-t border-emerald-500/10">
                            <h2 className="text-2xl font-serif font-bold text-emerald-950 dark:text-emerald-50">Autres Informations</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-emerald-900/60 dark:text-emerald-100/60">
                                    <Mail className="text-emerald-600" size={20} />
                                    <span>{siteConfig.email}</span>
                                </div>
                                <div className="flex items-center gap-4 text-emerald-900/60 dark:text-emerald-100/60">
                                    <MapPin className="text-emerald-600" size={20} />
                                    <span>{siteConfig.address}</span>
                                </div>
                                <div className="flex items-center gap-4 text-emerald-900/60 dark:text-emerald-100/60">
                                    <Globe className="text-emerald-600" size={20} />
                                    <span>www.drcheikhgueye.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="glass-card p-10 md:p-16 rounded-[4rem] border border-emerald-500/10 shadow-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
