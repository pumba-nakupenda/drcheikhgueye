import Image from "next/image";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-zinc-950 py-20 md:py-32 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Image Side */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/5 group animate-float">
                            <Image
                                src="/images/portrait-cheikh-gueye.jpg"
                                alt="Dr. Cheikh Gueye"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
                        </div>

                        <div className="p-8 glass rounded-[2rem] border border-emerald-500/10 shadow-xl">
                            <p className="text-emerald-900/80 dark:text-emerald-100/80 italic font-serif text-lg leading-relaxed text-center">
                                "La langue est un pont entre les cultures, un instrument de compréhension mutuelle et un outil d’élévation intellectuelle."
                            </p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-7 prose prose-lg prose-emerald dark:prose-invert max-w-none">
                        <div className="space-y-4 mb-12">
                            <div className="inline-flex flex-wrap items-center gap-4">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
                                    Biographie Officielle
                                </div>
                                <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-500/10 text-emerald-600">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                    <span className="text-[10px] uppercase font-bold tracking-widest">Version Audio Disponible</span>
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-serif font-black text-emerald-950 dark:text-white leading-tight">
                                Docteur <span className="text-emerald-600">Cheikh Gueye</span>
                            </h1>

                            {/* Audio Player for Biography */}
                            <div className="pt-4 max-w-md">
                                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/5 border border-emerald-500/10 backdrop-blur-sm">
                                    <audio controls className="w-full h-10 accent-emerald-600 opacity-80 hover:opacity-100 transition-opacity">
                                        <source src="/audio/Biographie.mp3" type="audio/mpeg" />
                                        Votre navigateur ne supporte pas l'écoute de fichiers audio.
                                    </audio>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 text-emerald-900/80 dark:text-emerald-100/80 leading-relaxed font-light text-lg">
                            <p className="font-medium text-emerald-950 dark:text-white text-xl">
                                Le Docteur Cheikh Gueye est un universitaire, pédagogue et chercheur dont le parcours s’inscrit dans une profonde tradition d’excellence académique et d’engagement au service du savoir.
                            </p>

                            <p>
                                Spécialiste de la langue arabe et des sciences du langage, il a consacré une grande partie de sa vie à l’étude, à la transmission et à la valorisation de cette langue, à la fois patrimoine culturel universel et vecteur majeur de spiritualité et de civilisation.
                            </p>

                            <p>
                                Titulaire d’un doctorat en langue arabe, le Docteur Cheikh Gueye s’est distingué par la rigueur de ses travaux et par son attachement à une pédagogie claire, structurée et méthodologiquement solide. Son expertise couvre aussi bien la grammaire et la linguistique arabes que la littérature classique et moderne, ainsi que les dimensions culturelles et religieuses liées à l’usage de la langue.
                            </p>

                            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-[2rem] border-l-4 border-emerald-500 my-10">
                                <p className="m-0 italic text-emerald-950 dark:text-emerald-50">
                                    Conscient des défis que représente le passage du français à l’arabe, il a élaboré une méthodologie comparative permettant de transformer les obstacles en leviers d’apprentissage.
                                </p>
                            </div>

                            <p>
                                Fort d’une longue expérience dans l’enseignement auprès de publics variés — élèves, étudiants universitaires, apprenants adultes et autodidactes — il a su développer une approche pédagogique fondée sur l’écoute, l’analyse des difficultés réelles des apprenants et la valorisation de leurs acquis linguistiques antérieurs.
                            </p>

                            <p>
                                L'ouvrage présenté sur ce site est l’aboutissement de cette réflexion pédagogique. Il ne se limite pas à transmettre des règles linguistiques ; il propose un cheminement progressif et cohérent vers la maîtrise des bases essentielles de la langue arabe. À travers l’étude de l’alphabet, des particularités graphiques des lettres, et des règles de lecture, il offre aux apprenants francophones un cadre méthodique favorisant une compréhension durable.
                            </p>

                            <p>
                                Attaché à la dimension culturelle et spirituelle, il accorde une place importante à l’initiation à la lecture des textes religieux, notamment le Saint Coran, tout en veillant à maintenir une approche linguistique rigoureuse et accessible.
                            </p>

                            <p>
                                Par son engagement constant, le Docteur Cheikh Gueye contribue activement au renforcement des liens entre les mondes francophone et arabophone. Sa démarche repose sur une conviction profonde : la connaissance est la clé de l’élévation intellectuelle.
                            </p>
                        </div>

                        {/* Badges/Expertise Highlights */}
                        <div className="mt-16 pt-12 border-t border-emerald-500/10 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-4">Domaines d'Expertise</h4>
                                <ul className="space-y-2 text-sm text-emerald-900/60 dark:text-emerald-100/60 list-none p-0">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Sciences du Langage & Linguistique
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Littérature Classique & Moderne
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Pédagogie Comparative
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-4">Mission</h4>
                                <p className="text-sm text-emerald-900/60 dark:text-emerald-100/60 leading-relaxed font-light">
                                    Rendre l'apprentissage de l'arabe accessible, structuré et fécond pour tous les publics francophones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Timeline />
        </div>
    );
}
