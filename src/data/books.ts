export interface Book {
    id: string;
    title: string;
    author: string;
    price: number;
    summary: string;
    coverImage: string;
    audioSummary?: string;
}

export const books: Book[] = [
    {
        id: "approache-arabe",
        title: "Approche pratique de l'initiation à l'arabe et à la lecture du Saint Coran",
        author: "Dr. Cheikh GUEYE",
        price: 10000,
        summary:
            "Ce livre est une méthode d'initiation pratique à la langue arabe et à la lecture du Saint Coran. Il propose une approche pédagogique innovante pour faciliter l'apprentissage des bases de la langue sacrée.",
        coverImage: "/images/books/approche-pratique-arabe-2.jpg",
        audioSummary: "/audio/apprendre-arabe.mp3",
    },
];
