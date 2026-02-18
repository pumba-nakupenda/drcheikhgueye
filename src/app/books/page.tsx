"use client";

import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import FAQ from "@/components/FAQ";
import { useLanguage } from "@/context/LanguageContext";

export default function BooksPage() {
    const { t, dir } = useLanguage();
    const isRtl = dir === 'rtl';

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-20 md:py-32 relative overflow-hidden">
            <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                        {t.books_page.badge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                        {t.books_page.title} <span className="text-emerald-600">{t.books_page.title_highlight}</span>
                    </h1>
                    <p className="text-lg text-emerald-900/60 dark:text-emerald-100/60 font-light leading-relaxed">
                        {t.books_page.tagline}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>

            <div className="mt-32 pt-20 border-t border-emerald-500/10">
                <FAQ />
            </div>
        </div>
    );
}
