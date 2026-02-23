export interface Situation {
    question: string;
    answer: string;
}

export interface Book {
    id: string;
    title: string;
    title_ar?: string;
    author: string;
    author_ar?: string;
    price: number;
    summary: string;
    summary_ar?: string;
    coverImage: string;
    audioSummary?: string;
    audioSummary_ar?: string;
    introAudio?: string;
    previewImages?: string[];
    pdfPreview?: string;
    situations?: Situation[];
    situations_ar?: Situation[];
}

export const books: Book[] = [
    {
        id: "approache-arabe",
        title: "Approche pratique de l'initiation à l'arabe et à la lecture du Saint Coran",
        title_ar: "المنهج العملي للتدريب على اللغة العربية وقراءة القرآن الكريم",
        author: "Dr. Cheikh GUEYE",
        author_ar: "د. شيخ غي",
        price: 10000,
        summary:
            "Ce livre est une méthode d'initiation pratique à la langue arabe et à la lecture du Saint Coran. Il propose une approche pédagogique innovante pour faciliter l'apprentissage des bases de la langue sacrée.",
        summary_ar: "هذا الكتاب هو منهج للتدريب العملي على اللغة العربية وقراءة القرآن الكريم. يقدم مقاربة بيداغوجية مبتكرة لتسهيل تعلم أسس اللغة المقدسة.",
        coverImage: "/images/books/approche-pratique-arabe-2.jpg",
        audioSummary: "/audio/apprendre-arabe.mp3",
        introAudio: "/audio/presentation apprendre arabe.mp3",
        previewImages: [
            "/images/books/approche-pratique-arabe-2.jpg",
            "/images/books/approche-pratique-arabe-1.jpg",
            "/images/books/approche-pratique-arabe-3.jpg",
            "/images/portrait-cheikh-gueye.jpg",
            "/images/books/approche-pratique-arabe-2.jpg",
            "/images/books/approche-pratique-arabe-1.jpg"
        ],
        pdfPreview: "/test.pdf"
    },
    {
        id: "dissertations",
        title: "Dissertations d'ordre philosophique et pédagogique",
        title_ar: "أطروحات في الفلسفة والتربية",
        author: "Dr. Cheikh GUEYE",
        author_ar: "د. شيخ غي",
        price: 10000,
        summary:
            "Cet ouvrage s'adresse aux candidats préparant des examens ou concours impliquant la rédaction de dissertations philosophiques ou pédagogiques. Face à la rareté des ressources en langue arabe sur cette méthodologie, le Dr. Cheikh Gueye propose un guide complet alliant théorie, applications pratiques détaillées et exercices d'entraînement pour maîtriser cet exercice complexe.",
        summary_ar: "يوجه هذا الكتاب للمترشحين للامتحانات أو المسابقات التي تتطلب كتابة أطروحات فلسفية أو تربوية. نظراً لندرة الموارد باللغة العربية حول cette منهجية، يقدم الدكتور شيخ غي دليلاً شاملاً يجمع بين النظرية والتطبيقات العملية المفصلة والتمارين التدريبية لإتقان هذا التمرين المعقد.",
        coverImage: "/images/books/dissertations.jpg",
        audioSummary: "/audio/Dissertation.mpeg",
        previewImages: [
            "/images/books/dissertations.jpg",
            "/images/portrait-cheikh-gueye.jpg",
            "/images/books/dissertations.jpg",
            "/images/books/approche-pratique-arabe-2.jpg"
        ]
    },
    {
        id: "mukhtasar-al-akhdari",
        title: "La purification rituelle et la prière selon le rite malékite",
        title_ar: "الطهارة والصلاة حسب المذهب المالكي",
        author: "Dr. Cheikh GUEYE",
        author_ar: "د. شيخ غي",
        price: 10000,
        summary:
            "Le « Mukhtasar al-Akhdari » est un ouvrage fondamental du rite malékite, essentiel pour maîtriser les règles de purification et de prière. Cette nouvelle édition bilingue (Français/Arabe) propose une approche pratique par compétences, structurée en 160 situations-problèmes pour permettre une application réelle des connaissances.",
        summary_ar: "يعد «مختصر الأخضري» من أهم المراجع في الفقه المالكي لتعلم الطهارة والصلاة. يقدم هذا الكتاب ترجمة جديدة ومنهجاً تعليمياً حديثاً يعتمد على وضعيات مشكلة (160 وضعية) لتمكين الدارس من اكتساب مهارات عملية وتطبيقية صحيحة.",
        coverImage: "/images/books/mukhtasar.jpg",
        audioSummary: "/audio/Mukhtaser FR.mp3",
        audioSummary_ar: "/audio/Mukhtaser AR.mp3",
        introAudio: "/audio/Présentation alkhdari.mp3",
        previewImages: [
            "/images/books/mukhtasar.jpg",
            "/images/portrait-cheikh-gueye.jpg",
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
        ]
    },
];
