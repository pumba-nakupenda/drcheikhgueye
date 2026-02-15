"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Book, MessageSquare, User } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MobileNavBar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Accueil", icon: Home },
        { href: "/books", label: "Livres", icon: Book },
        { href: "/about", label: "Profil", icon: User },
    ];

    return (
        <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-sm">
            <div className="glass shadow-2xl rounded-3xl border border-white/20 dark:border-white/5 p-2 flex items-center justify-between backdrop-blur-2xl bg-white/60 dark:bg-zinc-900/60">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex flex-col items-center gap-1 flex-1 py-2 rounded-2xl transition-all duration-300 ${isActive
                                ? "text-emerald-600 dark:text-emerald-400 scale-110"
                                : "text-zinc-500 hover:text-emerald-500"
                                }`}
                        >
                            <Icon size={20} fill={isActive ? "currentColor" : "none"} className={isActive ? "fill-emerald-600/20" : ""} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{link.label}</span>
                        </Link>
                    );
                })}

                <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800 mx-1" />

                <Link
                    href={siteConfig.whatsappLinks.general}
                    target="_blank"
                    className="flex items-center justify-center bg-emerald-600 text-white w-12 h-12 rounded-2xl shadow-lg shadow-emerald-600/20 active:scale-90 transition-transform animate-pulse"
                >
                    <MessageSquare size={20} />
                </Link>
            </div>
        </div>
    );
}
