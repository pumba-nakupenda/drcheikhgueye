import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const testimonials = [
    {
        quote: "Grâce à l'approche du Dr. Cheikh Gueye, j'ai enfin pu comprendre les nuances de l'arabe classique que je trouvais si difficiles auparavant.",
        author: "Abdoulaye Wade",
        role: "Étudiant en Sciences Humaines"
    },
    {
        quote: "Un travail de traduction remarquable. On sent la maîtrise du sujet et le respect profond pour les textes originaux.",
        author: "Mame Diarra",
        role: "Chercheuse en Littérature"
    },
    {
        quote: "Son ouvrage sur le Coran est une mine d'or pédagogique. Simple, clair et d'une rigueur académique exemplaire.",
        author: "Imam Ibrahima",
        role: "Enseignant"
    },
    {
        quote: "La méthode est révolutionnaire pour les francophones. Les signes diacritiques et les graphies sont expliqués avec une clarté rare.",
        author: "Ousmane Sy",
        role: "Apprenant Autodidacte"
    },
    {
        quote: "Une contribution majeure à la diffusion du savoir. Ce manuel est devenu la référence dans notre institut de langue.",
        author: "Dr. Amy Collé",
        role: "Directrice d'Institut"
    },
    {
        quote: "La dimension spirituelle alliée à la rigueur linguistique fait de cet ouvrage un compagnon indispensable pour tout musulman.",
        author: "Cheikh Tidiane",
        role: "Conférencier"
    }
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const cardWidth = container.querySelector('.glass-card')?.clientWidth || 0;
        const gap = 24; // gap-6

        container.scrollTo({
            left: index * (cardWidth + gap),
            behavior: 'smooth'
        });
        setActiveIndex(index);
    };

    const scroll = (direction: 'left' | 'right') => {
        const newIndex = direction === 'left'
            ? Math.max(0, activeIndex - 1)
            : Math.min(testimonials.length - 1, activeIndex + 1);

        // If at the end and going right, loop back
        if (direction === 'right' && activeIndex === testimonials.length - 1) {
            scrollToIndex(0);
        } else {
            scrollToIndex(newIndex);
        }
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            scroll('right');
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, activeIndex]);

    // Handle manual scroll to update activeIndex
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const cardWidth = container.querySelector('.glass-card')?.clientWidth || 0;
        const gap = 24;
        const index = Math.round(container.scrollLeft / (cardWidth + gap));
        setActiveIndex(index);
    };

    return (
        <section
            className="py-24 bg-white dark:bg-zinc-950 overflow-hidden relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                            Témoignages
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                            Ce qu'en disent les <br /><span className="text-emerald-600 italic">Lecteurs</span>
                        </h2>
                    </div>

                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-lg active:scale-95 flex items-center justify-center border border-emerald-500/10"
                            aria-label="Témoignage précédent"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-lg active:scale-95 flex items-center justify-center border border-emerald-500/10"
                            aria-label="Témoignage suivant"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 transition-all touch-pan-x"
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="glass-card w-[85vw] sm:w-[450px] md:w-[480px] flex-shrink-0 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-emerald-500/10 flex flex-col justify-between hover:scale-[1.01] transition-all duration-500 group snap-center"
                        >
                            <div className="relative">
                                <Quote size={40} className="text-emerald-500/20 mb-6 md:mb-8 group-hover:text-emerald-500/40 transition-colors" />
                                <p className="text-emerald-900/90 dark:text-emerald-100/80 text-base md:text-xl leading-relaxed italic mb-8 md:mb-10 font-serif relative z-10">
                                    "{t.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-5 border-t border-emerald-500/10 pt-8 mt-auto">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/60 dark:to-emerald-800/40 flex items-center justify-center text-emerald-600 font-black text-2xl shrink-0 shadow-inner">
                                    {t.author[0]}
                                </div>
                                <div className="text-left space-y-1">
                                    <div className="text-emerald-950 dark:text-white font-black text-lg">{t.author}</div>
                                    <div className="text-emerald-600 dark:text-emerald-400 text-xs uppercase font-black tracking-[0.2em]">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots & Progress */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                    {/* Pagination Dots */}
                    <div className="flex gap-3">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                className={`h-2 rounded-full transition-all duration-500 ${i === activeIndex
                                    ? "w-10 bg-emerald-500 shadow-lg shadow-emerald-500/20"
                                    : "w-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-emerald-500/40"
                                    }`}
                                aria-label={`Aller au témoignage ${i + 1}`}
                            />
                        ))}
                    </div>

                    <div className="hidden md:block w-32 h-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500/30 transition-all duration-500"
                            style={{
                                width: isAutoPlaying ? '100%' : '0%',
                                animation: isAutoPlaying ? 'progress 5s linear infinite' : 'none'
                            }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>

            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/2" />
        </section>
    );
}
