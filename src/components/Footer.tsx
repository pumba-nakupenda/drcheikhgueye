"use client";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t, dir } = useLanguage();
    const isRtl = dir === 'rtl';

    return (
        <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <div className={`max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex justify-center md:order-2 ${isRtl ? 'md:justify-start' : 'md:justify-end'}`}>
                    <span className="text-zinc-400 text-sm">
                        {t.footer.location}
                    </span>
                </div>
                <div className={`mt-8 md:mt-0 md:order-1 flex flex-col items-center gap-2 ${isRtl ? 'md:items-end' : 'md:items-start'}`}>
                    <p className="text-zinc-400 text-sm">
                        &copy; {new Date().getFullYear()} Dr. Cheikh Gueye. {t.footer.rights}
                    </p>
                    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.2em]">
                        {t.footer.designed_by} <a
                            href={siteConfig.agency.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 dark:text-emerald-500 hover:text-emerald-500 transition-colors"
                        >
                            {siteConfig.agency.name}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
