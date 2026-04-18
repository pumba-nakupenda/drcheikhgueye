export type Language = 'fr' | 'ar' | 'en';

export const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "Auteur",
            books: "L'Ouvrage",
            contact: "Contact",
            whatsapp: "Commander",
        },
        hero: {
            transmission: "Nouvelle Édition Bilingue",
            explore: "Mukhtasar",
            infinity: "al-Akhdari",
            words: "Purification & Prière.",
            tagline: "La référence malékite de la purification rituelle et de la prière. 160 situations-problèmes, édition bilingue Français/Arabe par le Dr. Cheikh Gueye.",
            cta_ouvrage: "Commander l'Ouvrage",
            cta_auteur: "Découvrir l'Auteur",
            stats_publications: "Situations-problèmes",
            stats_polyglotte: "Édition bilingue + audio",
            quote: "L'excellence est un chemin vers la lumière.",
            scroll: "Défiler",
        },
        book_section: {
            badge: "L'Ouvrage",
            title: "Mukhtasar",
            subtitle: "al-Akhdari.",
            tagline: "Une édition de référence : purification rituelle et prière selon le rite malékite, structurée autour de 160 situations-problèmes.",
        },
        audio_bio_title: "Biographie Audio",
        audio_bio_subtitle: "Le parcours du Dr. Gueye",
        testimonials: {
            title: "Ce qu'en disent les",
            subtitle: "Lecteurs",
            badge: "Témoignages",
            items: [
                {
                    quote: "Enfin une édition qui allie la rigueur du texte malékite à une pédagogie moderne. Les 160 situations rendent les règles vivantes et applicables au quotidien.",
                    author: "Imam Ibrahima",
                    role: "Imam & Enseignant de fiqh"
                },
                {
                    quote: "La version bilingue Français/Arabe est un vrai plus pour les francophones qui veulent approfondir leur pratique sans passer par des traductions approximatives.",
                    author: "Ousmane Sy",
                    role: "Étudiant en sciences religieuses"
                },
                {
                    quote: "Un outil indispensable pour les imams et les enseignants de fiqh. La structure par situations-problèmes change la manière dont on transmet le Mukhtasar.",
                    author: "Dr. Amy Collé",
                    role: "Directrice d'Institut"
                },
                {
                    quote: "J'ai redécouvert les règles de la purification et de la prière avec une clarté que je n'avais jamais eue. Une édition qui rend le rite malékite accessible à tous.",
                    author: "Abdoulaye Wade",
                    role: "Fidèle"
                },
                {
                    quote: "La dimension audio permet d'apprendre même en déplacement. Méthode innovante pour un texte classique comme le Mukhtasar al-Akhdari.",
                    author: "Mame Diarra",
                    role: "Enseignante"
                },
                {
                    quote: "La rigueur du Dr. Gueye et sa maîtrise du texte arabe transparaissent à chaque page. Cette édition fera date pour le fiqh malékite francophone.",
                    author: "Cheikh Tidiane",
                    role: "Conférencier"
                }
            ]
        },
        about: {
            badge: "Biographie Officielle",
            title_prefix: "Docteur",
            quote: "La langue est un pont entre les cultures, un instrument de compréhension mutuelle et un outil d’élévation intellectuelle.",
            content: [
                "Le Dr Cheikh Gueye est originaire de Louga. Chercheur et pédagogue de renom, il se consacre depuis des décennies à l'amélioration de l'éducation en Afrique, en général, et au Sénégal en particulier où il a été le chef de l’actuelle division de l’enseignement arabe au Ministère de l’Education Nationale.",
                "Il a enseigné à tous les niveaux du système éducatif sénégalais, de l’élémentaire au supérieur, notamment à la FASTEF où il a eu à former, de 1986 à 2015, la plupart des élèves inspecteurs de l’enseignement élémentaire arabe.",
                "Son profil de trilingue le spécialise d’une part, dans l’enseignement et la recherche, de l’autre dans la traduction en et vers le français, l’anglais et l’arabe."
            ],
            blockquote: "Il a acquis une renommée internationale avec sa traduction du « Nectar cacheté : Ar Raheeq Al Makhtoum », biographie de référence du Prophète (psl), lauréate du premier prix mondial à La Mecque en 1997.",
            content_p2: "Cette biographie du Prophète (paix et salut sur lui), écrite par Cheikh Safi al-Rahman al-Moubarak Fawri, a été primée lors du concours organisé par la Ligue Mondiale Islamique. Son travail sur les textes religieux s'étend du fiqh malékite à la sira, avec une trentaine d'ouvrages traduits pour l'Arabie Saoudite, la Turquie et la Libye.",
            content_p3: "Reconnu pour son expertise, il figure également sur la liste des traducteurs agréés par le Bureau de Traduction et d'Interprétariat du Ministère Sénégalais des Affaires Étrangères.",
            expertise: "Domaines d'Expertise",
            expertise_items: [
                "Fiqh malékite & Sciences religieuses",
                "Traduction de textes sacrés",
                "Pédagogie par compétences"
            ],
            mission_title: "Mission",
            mission_text: "Rendre les sciences religieuses malékites accessibles par une pédagogie alliant rigueur textuelle et application pratique, pour les francophones et les arabophones."
        },
        contact: {
            badge: "Contact Direct",
            title: "Entrer en",
            title_highlight: "Contact.",
            tagline: "Pour toute commande d'ouvrage, demande de conférence ou collaboration académique.",
            phone: "Téléphone",
            whatsapp: "WhatsApp",
            whatsapp_status: "Réponse sous 24h",
            others: "Autres Informations",
            info_title: "Coordonnées",
            info_subtitle: "Retrouvez-nous sur nos différents canaux officiels.",
            form_name: "Nom Complet",
            form_name_placeholder: "Jean Dupont",
            form_email: "Email",
            form_email_placeholder: "jean@exemple.com",
            form_subject: "Sujet",
            form_message: "Votre Message",
            form_message_placeholder: "Comment pouvons-nous vous aider ?",
            form_submit: "Envoyer le Message",
            form_sending: "Envoi en cours...",
            form_success_title: "Message Envoyé !",
            form_success_text: "Merci pour votre message. Le Docteur Cheikh Gueye ou son secrétariat vous répondra dans les plus brefs délais.",
            form_another: "Envoyer un autre message",
            subjects: ["Commande de livre", "Demande de conférence", "Question académique", "Autre"],
        },
        faq: {
            badge: "Aide & Infos",
            title: "Questions",
            title_highlight: "Fréquentes",
            items: [
                {
                    question: "Comment puis-je commander l'ouvrage du Docteur ?",
                    answer: "La commande se fait simplement via WhatsApp. Cliquez sur le bouton 'Commander sur WhatsApp' présent sur la fiche du livre. Un message pré-rempli sera généré pour faciliter votre échange avec notre équipe."
                },
                {
                    question: "Quels sont les délais de livraison ?",
                    answer: "Pour les commandes à Dakar, la livraison se fait généralement sous 24h à 48h. Pour les envois internationaux, les délais varient selon la destination et vous seront communiqués lors de votre commande sur WhatsApp."
                },
                {
                    question: "À qui s'adresse cet ouvrage ?",
                    answer: "Le Mukhtasar al-Akhdari s'adresse à toute personne souhaitant maîtriser les règles de purification et de prière selon le rite malékite. L'approche par compétences avec 160 situations-problèmes le rend accessible aussi bien aux étudiants qu'aux fidèles."
                },
                {
                    question: "Existe-t-il des versions numériques (PDF/Ebook) ?",
                    answer: "Actuellement, nous privilégions le format papier pour garantir une meilleure expérience d'apprentissage. Cependant, vous pouvez écouter les résumés audio directement sur ce site."
                },
                {
                    question: "Comment organiser une conférence avec le Docteur ?",
                    answer: "Vous pouvez nous contacter via le formulaire de contact formel présent sur la page 'Contact' ou nous envoyer un email directement à contact@drcheikhgueye.com."
                }
            ]
        },
        books_page: {
            badge: "L'Ouvrage",
            title: "Mukhtasar",
            title_highlight: "al-Akhdari.",
            tagline: "La purification rituelle et la prière selon le rite malékite. Une édition bilingue (Français/Arabe) structurée autour de 160 situations-problèmes."
        },
        book_detail: {
            back: "Retour à l'accueil",
            audio_title: "Présentation Audio",
            audio_subtitle: "Écoutez le résumé",
            audio_error: "Votre navigateur ne supporte pas l'élément audio.",
            badge: "Ouvrage Académique",
            availability_label: "Disponibilité",
            availability_value: "En Stock (Dakar)",
            quality_label: "Qualité",
            quality_value: "Édition Premium",
            price_label: "Prix de l'unité",
            order_button: "Commander",
            whatsapp_status: "Réponse rapide WhatsApp",
            currency: "CFA",
            situations_title: "Exemples de situations problèmes",
            situation_label: "SITUATION",
            solution_label: "SOLUTION",
            clicks_to_see: "Cliquez pour voir la solution",
            preview_button: "Feuilleter le livre",
            preview_subtitle: "Aperçu de quelques pages",
            pdf_button: "Lire l'extrait (PDF)",
            pdf_close: "Fermer le lecteur"
        },
        footer: {
            rights: "Tous droits réservés.",
            designed_by: "Design & Développement par",
            location: "Basé à Dakar, Sénégal"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "Author",
            books: "The Book",
            contact: "Contact",
            whatsapp: "Order",
        },
        hero: {
            transmission: "New Bilingual Edition",
            explore: "Mukhtasar",
            infinity: "al-Akhdari",
            words: "Purification & Prayer.",
            tagline: "The Maliki reference on ritual purification and prayer. 160 problem-situations, bilingual French/Arabic edition by Dr. Cheikh Gueye.",
            cta_ouvrage: "Order the Book",
            cta_auteur: "Discover the Author",
            stats_publications: "Problem-situations",
            stats_polyglotte: "Bilingual edition + audio",
            quote: "Excellence is a path toward the light.",
            scroll: "Scroll",
        },
        book_section: {
            badge: "The Book",
            title: "Mukhtasar",
            subtitle: "al-Akhdari.",
            tagline: "A reference edition: ritual purification and prayer according to the Maliki rite, structured around 160 problem-situations.",
        },
        audio_bio_title: "Audio Biography",
        audio_bio_subtitle: "Dr. Gueye's journey",
        testimonials: {
            title: "What the",
            subtitle: "Readers say",
            badge: "Testimonials",
            items: [
                {
                    quote: "Finally an edition that combines the rigor of the Maliki text with modern pedagogy. The 160 situations bring the rules alive and make them applicable daily.",
                    author: "Imam Ibrahima",
                    role: "Imam & Fiqh Teacher"
                },
                {
                    quote: "The bilingual French/Arabic version is a real plus for French speakers who want to deepen their practice without relying on approximate translations.",
                    author: "Ousmane Sy",
                    role: "Student in religious sciences"
                },
                {
                    quote: "An indispensable tool for imams and fiqh teachers. The problem-situation structure changes the way we transmit the Mukhtasar.",
                    author: "Dr. Amy Collé",
                    role: "Institute Director"
                },
                {
                    quote: "I rediscovered the rules of purification and prayer with a clarity I had never had before. An edition that makes the Maliki rite accessible to everyone.",
                    author: "Abdoulaye Wade",
                    role: "Worshipper"
                },
                {
                    quote: "The audio dimension lets you learn even on the go. An innovative method for a classic text like the Mukhtasar al-Akhdari.",
                    author: "Mame Diarra",
                    role: "Teacher"
                },
                {
                    quote: "Dr. Gueye's rigor and mastery of the Arabic text shine through on every page. This edition will make history for French-speaking Maliki fiqh.",
                    author: "Cheikh Tidiane",
                    role: "Speaker"
                }
            ]
        },
        about: {
            badge: "Official Biography",
            title_prefix: "Doctor",
            quote: "Language is a bridge between cultures, an instrument of mutual understanding and a tool for intellectual elevation.",
            content: [
                "Dr. Cheikh Gueye is originally from Louga. A renowned researcher and educator, he has dedicated decades to improving education in Africa in general, and in Senegal in particular, where he headed the Arabic education division at the Ministry of National Education.",
                "He has taught at all levels of the Senegalese educational system, from primary to higher education, notably at FASTEF where he trained most of the Arabic elementary education inspectors from 1986 to 2015.",
                "His trilingual profile specializes him, on one hand, in teaching and research, and on the other, in translation to and from French, English and Arabic."
            ],
            blockquote: "He gained international renown with his translation of 'The Sealed Nectar: Ar Raheeq Al Makhtoum', the reference biography of the Prophet (pbuh), winner of the first world prize in Mecca in 1997.",
            content_p2: "This biography of the Prophet (peace and blessings be upon him), written by Sheikh Safi al-Rahman al-Mubarakpuri, was awarded at the competition organized by the Muslim World League. His work on religious texts spans Maliki fiqh to sira, with about thirty books translated for Saudi Arabia, Turkey and Libya.",
            content_p3: "Recognized for his expertise, he also appears on the list of translators accredited by the Translation and Interpretation Bureau of the Senegalese Ministry of Foreign Affairs.",
            expertise: "Areas of Expertise",
            expertise_items: [
                "Maliki Fiqh & Religious Sciences",
                "Translation of Sacred Texts",
                "Competency-Based Pedagogy"
            ],
            mission_title: "Mission",
            mission_text: "Making Maliki religious sciences accessible through a pedagogy that combines textual rigor and practical application, for both French and Arabic speakers."
        },
        contact: {
            badge: "Direct Contact",
            title: "Get in",
            title_highlight: "Touch.",
            tagline: "For any book order, conference request or academic collaboration.",
            phone: "Phone",
            whatsapp: "WhatsApp",
            whatsapp_status: "Response within 24h",
            others: "Other Information",
            info_title: "Contact Details",
            info_subtitle: "Find us on our various official channels.",
            form_name: "Full Name",
            form_name_placeholder: "John Doe",
            form_email: "Email",
            form_email_placeholder: "john@example.com",
            form_subject: "Subject",
            form_message: "Your Message",
            form_message_placeholder: "How can we help you?",
            form_submit: "Send Message",
            form_sending: "Sending...",
            form_success_title: "Message Sent!",
            form_success_text: "Thank you for your message. Dr. Cheikh Gueye or his secretariat will reply to you as soon as possible.",
            form_another: "Send another message",
            subjects: ["Book order", "Conference request", "Academic question", "Other"],
        },
        faq: {
            badge: "Help & Info",
            title: "Frequently Asked",
            title_highlight: "Questions",
            items: [
                {
                    question: "How can I order Dr. Cheikh Gueye's book?",
                    answer: "Ordering is done simply via WhatsApp. Click the 'Order on WhatsApp' button on the book page. A pre-filled message will be generated to facilitate your exchange with our team."
                },
                {
                    question: "What are the delivery times?",
                    answer: "For orders in Dakar, delivery is generally within 24 to 48 hours. For international shipments, times vary by destination and will be communicated to you when you place your order on WhatsApp."
                },
                {
                    question: "Who is this book for?",
                    answer: "The Mukhtasar al-Akhdari is intended for anyone wishing to master the rules of purification and prayer according to the Maliki rite. The competency-based approach with 160 problem-situations makes it accessible to both students and worshippers."
                },
                {
                    question: "Are there digital versions (PDF/Ebook)?",
                    answer: "Currently, we favor the paper format to ensure a better learning experience. However, you can listen to audio summaries directly on this site."
                },
                {
                    question: "How to organize a conference with the Doctor?",
                    answer: "You can contact us via the formal contact form on the 'Contact' page or send an email directly to contact@drcheikhgueye.com."
                }
            ]
        },
        books_page: {
            badge: "The Book",
            title: "Mukhtasar",
            title_highlight: "al-Akhdari.",
            tagline: "Ritual purification and prayer according to the Maliki rite. A bilingual edition (French/Arabic) structured around 160 problem-situations."
        },
        book_detail: {
            back: "Back to Home",
            audio_title: "Audio Presentation",
            audio_subtitle: "Listen to the summary",
            audio_error: "Your browser does not support the audio element.",
            badge: "Academic Work",
            availability_label: "Availability",
            availability_value: "In Stock (Dakar)",
            quality_label: "Quality",
            quality_value: "Premium Edition",
            price_label: "Unit Price",
            order_button: "Order",
            whatsapp_status: "Quick WhatsApp Response",
            currency: "CFA",
            situations_title: "Problem situation examples",
            situation_label: "SITUATION",
            solution_label: "SOLUTION",
            clicks_to_see: "Click to see the solution",
            preview_button: "Browse the book",
            preview_subtitle: "Preview of some pages",
            pdf_button: "Read excerpt (PDF)",
            pdf_close: "Close reader"
        },
        footer: {
            rights: "All rights reserved.",
            designed_by: "Design & Development by",
            location: "Based in Dakar, Senegal"
        }
    },
    ar: {
        nav: {
            home: "الرئيسية",
            about: "الكاتب",
            books: "الكتاب",
            contact: "اتصل بنا",
            whatsapp: "اطلب الكتاب",
        },
        hero: {
            transmission: "طبعة ثنائية اللغة جديدة",
            explore: "مختصر",
            infinity: "الأخضري",
            words: "الطهارة والصلاة.",
            tagline: "المرجع المالكي في أحكام الطهارة والصلاة. 160 وضعية-مشكلة، طبعة ثنائية اللغة عربي/فرنسي من إعداد الدكتور شيخ غي.",
            cta_ouvrage: "اطلب الكتاب",
            cta_auteur: "اكتشف الكاتب",
            stats_publications: "وضعيات-مشكلة",
            stats_polyglotte: "طبعة ثنائية اللغة + صوتي",
            quote: "التميز طريق نحو النور.",
            scroll: "مرر للأسفل",
        },
        book_section: {
            badge: "الكتاب",
            title: "مختصر",
            subtitle: "الأخضري.",
            tagline: "طبعة مرجعية: أحكام الطهارة والصلاة حسب المذهب المالكي، منظمة حول 160 وضعية-مشكلة.",
        },
        audio_bio_title: "السيرة الصوتية",
        audio_bio_subtitle: "مسار الدكتور شيخ غي",
        testimonials: {
            title: "ماذا يقول",
            subtitle: "القراء",
            badge: "شهادات",
            items: [
                {
                    quote: "أخيراً طبعة تجمع بين دقة النص المالكي ومنهج بيداغوجي حديث. الوضعيات الـ160 تجعل الأحكام حية وقابلة للتطبيق يومياً.",
                    author: "الإمام إبراهيم",
                    role: "إمام ومدرس فقه"
                },
                {
                    quote: "الطبعة ثنائية اللغة عربي/فرنسي إضافة حقيقية للناطقين بالفرنسية الذين يريدون تعميق ممارستهم دون المرور بترجمات تقريبية.",
                    author: "عثمان سي",
                    role: "طالب علوم شرعية"
                },
                {
                    quote: "أداة لا غنى عنها للأئمة ومدرسي الفقه. هيكلة الكتاب بالوضعيات-المشكلات غيّرت طريقة تدريس المختصر.",
                    author: "د. آمي كولي",
                    role: "مديرة معهد"
                },
                {
                    quote: "اكتشفت من جديد أحكام الطهارة والصلاة بوضوح لم أعهده من قبل. طبعة تجعل المذهب المالكي في متناول الجميع.",
                    author: "عبد الله واد",
                    role: "مصلٍّ"
                },
                {
                    quote: "البُعد الصوتي يتيح التعلم حتى أثناء التنقل. منهج مبتكر لنص كلاسيكي كمختصر الأخضري.",
                    author: "مامي ديارا",
                    role: "مدرسة"
                },
                {
                    quote: "دقة الدكتور شيخ غي وإتقانه للنص العربي يظهران في كل صفحة. ستكون هذه الطبعة علامة فارقة للفقه المالكي الفرنكوفوني.",
                    author: "شيخ تيجان",
                    role: "محاضر"
                }
            ]
        },
        about: {
            badge: "السيرة الذاتية الرسمية",
            title_prefix: "الدكتور",
            quote: "اللغة جسر بين الثقافات، وأداة للتفاهم المتبادل ووسيلة للارتقاء الفكري.",
            content: [
                "الدكتور شيخ غي ينحدر من مدينة لوغا. باحث وتربوي مرموق، كرس عقوداً من حياته لتحسين التعليم في أفريقيا بشكل عام، وفي السنغال بشكل خاص، حيث كان رئيساً لقسم التعليم العربي الحالي بوزارة التربية الوطنية.",
                "قام بالتدريس في جميع مستويات النظام التعليمي السنغالي، من الابتدائي إلى العالي، لا سيما في كلية العلوم والتقنيات للتربية والتعليم (FASTEF) حيث قام بتكوين معظم المفتشين في التعليم الابتدائي العربي في البلاد من عام 1986 إلى 2015.",
                "تخصصه كمتعدد لغات (ثلاث لغات) يجعله متخصصاً من ناحية في التدريس والبحث، ومن ناحية أخرى في الترجمة من وإلى الفرنسية والإنجليزية والعربية."
            ],
            blockquote: "اكتسب شهرة عالمية من خلال ترجمته لكتاب «الرحيق المختوم»، السيرة النبوية المرجعية، والتي فاز عنها بالجائزة العالمية الأولى في مكة المكرمة عام 1997.",
            content_p2: "هذه السيرة النبوية (صلى الله عليه وسلم)، التي كتبها الشيخ صفي الرحمن المباركفوري، توجت في المسابقة التي نظمتها رابطة العالم الإسلامي. يمتد عمله على النصوص الدينية من الفقه المالكي إلى السيرة، مع حوالي ثلاثين مؤلفاً مترجماً للمملكة العربية السعودية وتركيا وليبيا.",
            content_p3: "تقديراً لخبرته، يظهر اسمه أيضاً في قائمة المترجمين المعتمدين لدى مكتب الترجمة والترجمة الفورية بوزارة الشؤون الخارجية السنغالية.",
            expertise: "مجالات الخبرة",
            expertise_items: [
                "الفقه المالكي والعلوم الشرعية",
                "ترجمة النصوص المقدسة",
                "البيداغوجيا بالكفاءات"
            ],
            mission_title: "المهمة",
            mission_text: "جعل العلوم الشرعية المالكية في متناول الجميع عبر منهج يجمع بين الدقة النصية والتطبيق العملي، للناطقين بالفرنسية والعربية."
        },
        contact: {
            badge: "اتصال مباشر",
            title: "ابق على",
            title_highlight: "تواصل.",
            tagline: "لأي طلب كتاب، طلب محاضرة أو تعاون أكاديمي.",
            phone: "الهاتف",
            whatsapp: "واتساب",
            whatsapp_status: "الرد خلال 24 ساعة",
            others: "معلومات أخرى",
            info_title: "معلومات الاتصال",
            info_subtitle: "تجدوننا عبر مختلف القنوات الرسمية.",
            form_name: "الاسم الكامل",
            form_name_placeholder: "عبد الله محمد",
            form_email: "البريد الإلكتروني",
            form_email_placeholder: "abdallah@example.com",
            form_subject: "الموضوع",
            form_message: "رسالتكم",
            form_message_placeholder: "كيف يمكننا مساعدتكم؟",
            form_submit: "إرسال الرسالة",
            form_sending: "جاري الإرسال...",
            form_success_title: "تم إرسال الرسالة!",
            form_success_text: "شكراً لرسالتكم. سيرد عليكم الدكتور شيخ غي أو سكرتاريته في أقرب وقت ممكن.",
            form_another: "إرسال رسالة أخرى",
            subjects: ["طلب كتاب", "طلب محاضرة", "سؤال أكاديمي", "أخرى"],
        },
        faq: {
            badge: "المساعدة والمعلومات",
            title: "الأسئلة",
            title_highlight: "الشائعة",
            items: [
                {
                    question: "كيف يمكنني طلب كتاب الدكتور؟",
                    answer: "يمكن الطلب ببساطة عبر واتساب. انقر على زر 'اطلب عبر واتساب' الموجود في صفحة الكتاب. سيتم إنشاء رسالة جاهزة لتسهيل تواصلك مع فريقنا."
                },
                {
                    question: "ما هي مواعيد التسليم؟",
                    answer: "بالنسبة للطلبات في دكار، يتم التسليم عادة خلال 24 إلى 48 ساعة. أما للشحنات الدولية، فتختلف المواعيد حسب الوجهة وسيتم إبلاغكم بها عند الطلب عبر واتساب."
                },
                {
                    question: "لمن يتوجه هذا الكتاب؟",
                    answer: "يتوجه مختصر الأخضري إلى كل من يرغب في إتقان أحكام الطهارة والصلاة حسب المذهب المالكي. المقاربة بالكفاءات مع 160 وضعية-مشكلة تجعله متاحاً للطلاب والمصلين على حد سواء."
                },
                {
                    question: "هل توجد نسخ رقمية (PDF/Ebook)؟",
                    answer: "حالياً، نفضل التنسيق الورقي لضمان تجربة تعلم أفضل. ومع ذلك، يمكنك الاستماع إلى ملخصات صوتية مباشرة على هذا الموقع."
                },
                {
                    question: "كيف يمكن تنظيم محاضرة مع الدكتور؟",
                    answer: "يمكنكم التواصل معنا عبر نموذج الاتصال الرسمي الموجود في صفحة 'اتصل بنا' أو إرسال بريد إلكتروني مباشرة إلى contact@drcheikhgueye.com."
                }
            ]
        },
        books_page: {
            badge: "الكتاب",
            title: "مختصر",
            title_highlight: "الأخضري",
            tagline: "الطهارة والصلاة حسب المذهب المالكي. طبعة ثنائية اللغة (عربي/فرنسي) منظمة حول 160 وضعية-مشكلة."
        },
        book_detail: {
            back: "الرجوع إلى الرئيسية",
            audio_title: "عرض صوتي",
            audio_subtitle: "استمع إلى الملخص",
            audio_error: "متصفحك لا يدعم تشغيل الصوت.",
            badge: "مؤلف أكاديمي",
            availability_label: "التوفر",
            availability_value: "متوفر (دكار)",
            quality_label: "الجودة",
            quality_value: "طبعة فاخرة",
            price_label: "سعر الوحدة",
            order_button: "اطلب الآن",
            whatsapp_status: "رد سريع عبر واتساب",
            currency: "فرنك",
            situations_title: "أمثلة على وضعيات مشكلة",
            situation_label: "الوضعية",
            solution_label: "الحل",
            clicks_to_see: "انقر لرؤية الحل",
            preview_button: "تصفح الكتاب",
            preview_subtitle: "معاينة بعض الصفحات",
            pdf_button: "قراءة مقتطف (PDF)",
            pdf_close: "إغلاق القارئ"
        },
        footer: {
            rights: "جميع الحقوق محفوظة.",
            designed_by: "تصميم وتطوير",
            location: "مقرنا في دكار، السنغال"
        }
    }
};
