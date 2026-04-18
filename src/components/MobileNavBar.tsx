"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Book, ShoppingCart, User, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { books } from "@/data/books";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileNavBar() {
    const pathname = usePathname();
    const { t, language } = useLanguage();

    const links = [
        { href: "/", label: t.nav.home, icon: Home },
        { href: "/#livre", label: t.nav.books, icon: Book },
        { href: "/#auteur", label: t.nav.about, icon: User },
        { href: "/#contact", label: t.nav.contact, icon: Phone },
    ];

    const book = books[0];
    const orderBookTitle = language === 'ar' && book.title_ar ? book.title_ar : language === 'en' && book.title_en ? book.title_en : book.title;
    const orderMessage = language === 'ar'
        ? `مرحباً، أود طلب كتاب: ${orderBookTitle}`
        : language === 'en'
        ? `Hello, I would like to order the book: ${orderBookTitle}`
        : `Bonjour, je souhaite commander le livre : ${orderBookTitle}`;
    const orderUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

    return (
        <div className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-sm">
            <div className="glass shadow-2xl rounded-2xl border border-white/20 dark:border-white/5 p-1.5 flex items-center justify-between backdrop-blur-2xl bg-white/70 dark:bg-zinc-900/70">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex flex-col items-center gap-1 flex-1 py-2 px-1 rounded-xl transition-all duration-200 ${
                                isActive
                                    ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                                    : "text-zinc-400 dark:text-zinc-500"
                            }`}
                        >
                            <Icon size={19} strokeWidth={isActive ? 2.5 : 1.8} />
                            <span className={`text-[9px] font-bold uppercase tracking-wide ${isActive ? "text-emerald-600 dark:text-emerald-400" : ""}`}>
                                {link.label}
                            </span>
                        </Link>
                    );
                })}

                <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800 mx-0.5 shrink-0" />

                <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.nav.whatsapp}
                    className="flex items-center justify-center bg-emerald-600 text-white w-11 h-11 rounded-xl shadow-lg shadow-emerald-600/30 active:scale-90 transition-transform shrink-0"
                >
                    <ShoppingCart size={19} />
                </a>
            </div>
        </div>
    );
}
