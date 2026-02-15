import { Calendar, Award, GraduationCap, BookOpen, Globe } from "lucide-react";

const milestones = [
    {
        year: "Études Supérieures",
        title: "Doctorat en Langue Arabe",
        description: "Obtention du titre de Docteur avec les félicitations du jury, marquant le début d'une carrière dédiée à l'excellence académique.",
        icon: <GraduationCap size={24} />
    },
    {
        year: "Expertise Pédagogique",
        title: "Enseignement Universitaire",
        description: "Longue expérience dans la formation d'étudiants et d'adultes, développant des méthodes innovantes pour l'apprentissage de l'arabe.",
        icon: <Globe size={24} />
    },
    {
        year: "Recherche & Publication",
        title: "Aboutissement de l'Ouvrage",
        description: "Publication de la méthode d'initiation pratique, fruit de 25 ans d'expertise et de réflexion pédagogique.",
        icon: <BookOpen size={24} />
    },
    {
        year: "Engagement",
        title: "Rayonnement Culturel",
        description: "Contribution active au renforcement des liens entre les mondes francophone et arabophone à travers diverses conférences.",
        icon: <Award size={24} />
    }
];

export default function Timeline() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                        Parcours Académique
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                        Une Vie dédiée au <span className="text-emerald-600 italic">Savoir</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {milestones.map((m, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Icon Bubble */}
                                <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center -translate-x-5 md:-translate-x-5 z-20 shadow-xl border-4 border-white dark:border-zinc-950">
                                    {m.icon}
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                                    <div className="glass-card p-8 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 group">
                                        <div className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <Calendar size={14} />
                                            {m.year}
                                        </div>
                                        <h3 className="text-xl font-bold text-emerald-950 dark:text-white mb-4 group-hover:text-emerald-600 transition-colors">
                                            {m.title}
                                        </h3>
                                        <p className="text-emerald-900/70 dark:text-emerald-100/60 leading-relaxed font-light">
                                            {m.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
