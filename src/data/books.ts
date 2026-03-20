export interface Situation {
    question: string;
    answer: string;
}

export interface Book {
    id: string;
    title: string;
    title_ar?: string;
    title_en?: string;
    author: string;
    author_ar?: string;
    author_en?: string;
    price: number;
    summary: string;
    summary_ar?: string;
    summary_en?: string;
    coverImage: string;
    audioSummary?: string;
    audioSummary_ar?: string;
    audioSummary_en?: string;
    introAudio?: string;
    previewImages?: string[];
    pdfPreview?: string;
    situations?: Situation[];
    situations_ar?: Situation[];
    situations_en?: Situation[];
    languages: ('fr' | 'en' | 'ar')[];
}

export const books: Book[] = [
    {
        id: "approache-arabe",
        title: "Approche pratique de l'initiation à l'arabe et à la lecture du Saint Coran",
        title_ar: "المنهج العملي للتدريب على اللغة العربية وقراءة القرآن الكريم",
        title_en: "Practical Approach to Arabic Initiation and Reading of the Holy Quran",
        author: "Dr. Cheikh GUEYE",
        author_ar: "د. شيخ غي",
        author_en: "Dr. Cheikh GUEYE",
        price: 10000,
        summary:
            "Ce livre est une méthode d'initiation pratique à la langue arabe et à la lecture du Saint Coran. Il propose une approche pédagogique innovante pour faciliter l'apprentissage des bases de la langue sacrée.",
        summary_ar: "هذا الكتاب هو منهج للتدريب العملي على اللغة العربية وقراءة القرآن الكريم. يقدم مقاربة بيداغوجية مبتكرة لتسهيل تعلم أسس اللغة المقدسة.",
        summary_en: "This book is a practical method for learning Arabic and reading the Holy Quran. It offers an innovative pedagogical approach to facilitate the learning of the fundamentals of the sacred language.",
        coverImage: "/images/books/approche-pratique-arabe-2.jpg",
        audioSummary: "/audio/apprendre-arabe.mp3",
        introAudio: "/audio/presentation apprendre arabe.mp3",
        previewImages: [
            "/images/books/approche-pratique-arabe-2.jpg",
            "/images/books/approche-pratique-arabe-1.jpg",
            "/images/books/approche-pratique-arabe-3.jpg",
            "/images/portrait-cheikh-gueye.webp",
            "/images/books/approche-pratique-arabe-2.jpg",
            "/images/books/approche-pratique-arabe-1.jpg"
        ],
        pdfPreview: "/test.pdf",
        languages: ['fr'],
    },
    {
        id: "dissertations",
        title: "Dissertations d'ordre philosophique et pédagogique",
        title_ar: "أطروحات في الفلسفة والتربية",
        title_en: "Philosophical and Pedagogical Dissertations",
        author: "Dr. Cheikh GUEYE",
        author_ar: "د. شيخ غي",
        author_en: "Dr. Cheikh GUEYE",
        price: 10000,
        summary:
            "Cet ouvrage s'adresse aux candidats préparant des examens ou concours impliquant la rédaction de dissertations philosophiques ou pédagogiques. Face à la rareté des ressources en langue arabe sur cette méthodologie, le Dr. Cheikh GUEYE propose un guide complet alliant théorie, applications pratiques détaillées et exercices d'entraînement pour maîtriser cet exercice complexe.",
        summary_ar: "يوجه هذا الكتاب للمترشحين للامتحانات أو المسابقات التي تتطلب كتابة أطروحات فلسفية أو تربوية. نظراً لندرة الموارد باللغة العربية حول cette منهجية، يقدم الدكتور شيخ غي دليلاً شاملاً يجمع بين النظرية والتطبيقات العملية المفصلة والتمارين التدريبية لإتقان هذا التمرين المعقد.",
        summary_en: "This work is aimed at candidates preparing for exams or competitions involving the writing of philosophical or pedagogical dissertations. Given the scarcity of Arabic-language resources on this methodology, Dr. Cheikh GUEYE offers a comprehensive guide combining theory, detailed practical applications and training exercises to master this complex exercise.",
        coverImage: "/images/books/dissertations.jpg",
        audioSummary: "/audio/Dissertation.mpeg",
        introAudio: "/audio/Presentation Dissertation arabe.mp3",
        previewImages: [
            "/images/books/dissertations.jpg",
            "/images/portrait-cheikh-gueye.webp",
            "/images/books/dissertations.jpg",
            "/images/books/approche-pratique-arabe-2.jpg"
        ],
        languages: ['ar'],
    },
    {
        id: "mukhtasar-al-akhdari",
        title: "La purification rituelle et la prière selon le rite malékite",
        title_ar: "الطهارة والصلاة حسب المذهب المالكي",
        title_en: "Ritual Purification and Prayer According to the Maliki Rite (Mukhtasar al-Akhdari)",
        author: "Dr. Cheikh GUEYE",
        author_ar: "د. شيخ غي",
        author_en: "Dr. Cheikh GUEYE",
        price: 10000,
        summary:
            "Le « Mukhtasar al-Akhdari » est un ouvrage fondamental du rite malékite, essentiel pour maîtriser les règles de purification et de prière. Cette nouvelle édition bilingue (Français/Arabe) propose une approche pratique par compétences, structurée en 160 situations-problèmes pour permettre une application réelle des connaissances.",
        summary_ar: "يعد «مختصر الأخضري» من أهم المراجع في الفقه المالكي لتعلم الطهارة والصلاة. يقدم هذا الكتاب ترجمة جديدة ومنهجاً تعليمياً حديثاً يعتمد على وضعيات مشكلة (160 وضعية) لتمكين الدارس من اكتساب مهارات عملية وتطبيقية صحيحة.",
        summary_en: "The 'Mukhtasar al-Akhdari' is a fundamental work of the Maliki rite, essential for mastering the rules of purification and prayer. This new bilingual edition (French/Arabic) offers a competency-based practical approach, structured around 160 problem-situations to enable real application of knowledge.",
        coverImage: "/images/books/mukhtasar.jpg",
        audioSummary: "/audio/Mukhtaser FR.mp3",
        audioSummary_ar: "/audio/Mukhtaser AR.mp3",
        introAudio: "/audio/Présentation alkhdari.mp3",
        previewImages: [
            "/images/books/mukhtasar.jpg",
            "/images/portrait-cheikh-gueye.webp",
            "/images/books/mukhtasar.jpg",
            "/images/books/dissertations.jpg"
        ],
        situations: [
            {
                question: "Vous arrivez en retard à la mosquée et accomplissez moins d’une rak’aa derrière l’imam qu’ensuite vous suivez lorsqu’il se prosterne après le salut. Votre prière est-elle valide ?",
                answer: "Pour valider sa participation à la prière collective, le prieur doit au moins faire une rak’aa complète derrière l’imam .Sinon, il ne doit le suivre dans aucune prosternation, que ce soit avant ou après le salut."
            },
            {
                question: "Dans une prière à quatre rakaas, comme celle du Icha, vous prononcez le salut après n’avoir effectué que deux rak’aas. Votre prière est-elle valide ? Sinon comment la réparer ?",
                answer: "En pareil cas, vous devez vous relever aussitôt et réintégrer la prière en disant « Allaahu Akbar » pour compléter votre pratique. Vous devrez, pour autant, vous prosterner après le salut, pour avoir perturbé l’ordre de la prière"
            },
            {
                question: "Lors d’une prière en solitaire, il vous est arrivé de vous arrêter au cours de votre récitation de la sourate après la Fatiha, parce que le verset qui suit vous a échappé. Que faire ?",
                answer: "Vous devez abandonner ce verset et passer au verset suivant. Si vous êtes toujours incapables de réciter ce qui suit, il vous revient alors de vous incliner. Dans ce cas vous ne devez faire aucune prosternation de réparation."
            }
        ],
        situations_ar: [
            {
                question: "تصل متأخراً إلى المسجد وتؤدي أقل من ركعة خلف الإمام، ثم تتبعه عندما يسجد بعد السلام. هل صلاتك صحيحة؟",
                answer: "لإدراك الجماعة، يجب على المأموم إدراك ركعة كاملة خلف الإمام. وإلا فلا يتبعه in أي سجود، سواء كان قبل السلام أو بعده."
            },
            {
                question: "في صلاة رباعية كالعشاء، سلمت après ركعتين فقط. هل صلاتك صحيحة؟ وإن لم تكن كذلك، fكيف تجبرها؟",
                answer: "في هذه الحالة، يجب عليك القيام فوراً والرجوع إلى الصلاة مع تكبيرة الإحرام لإكمال ما فاتك. كما يجب عليك السجود بعد السلام بسبب الخلل في ترتيب الصلاة."
            },
            {
                question: "أثناء الصلاة منفرداً، توقفت في تلاوة السورة بعد الفاتحة لأن الآية التالية غابت عن ذهنك. ماذا تفعل؟",
                answer: "يجب عليك ترك هذه الآية والانتقال إلى ما بعدها. فإذا لم تستطع القراءة، فعليك الركوع. وفي هذه الحالة، لا يجب عليك سجود السهو."
            }
        ],
        languages: ['fr', 'ar'],
        situations_en: [
            {
                question: "You arrive late at the mosque and perform less than one rak'aa behind the imam, then follow him when he prostrates after the salutation. Is your prayer valid?",
                answer: "To validate participation in the congregational prayer, the follower must complete at least one full rak'aa behind the imam. Otherwise, he must not follow him in any prostration, whether before or after the salutation."
            },
            {
                question: "In a four-rak'aa prayer, such as Isha, you give the salutation after only two rak'aas. Is your prayer valid? If not, how do you correct it?",
                answer: "In such a case, you must immediately stand up and re-enter the prayer by saying 'Allahu Akbar' to complete what remains. You will then need to prostrate after the salutation for having disrupted the order of the prayer."
            },
            {
                question: "During a solitary prayer, you stopped in the middle of reciting the surah after Al-Fatiha because the next verse escaped you. What should you do?",
                answer: "You must skip that verse and move to the next one. If you are still unable to recite what follows, you should then bow. In that case, you do not need to perform a prostration of forgetfulness."
            }
        ]
    },
];
