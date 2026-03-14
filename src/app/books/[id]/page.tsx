import { books } from "@/data/books";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Headphones, ShoppingCart, MoveLeft, MessageSquare, Clock, ShieldCheck, Share2 } from "lucide-react";
import SituationCards from "@/components/SituationCards";
import CustomAudioPlayer from "@/components/CustomAudioPlayer";
import BookPreview from "@/components/BookPreview";
import BookDetailClient from "./BookDetailClient";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const book = books.find((b) => b.id === id);

    if (!book) {
        return {
            title: "Livre non trouvé",
        };
    }

    return {
        title: `${book.title} | Dr. Cheikh GUEYE`,
        description: book.summary.substring(0, 160),
        openGraph: {
            title: book.title,
            description: book.summary,
            images: [
                {
                    url: book.coverImage,
                    width: 800,
                    height: 1200,
                    alt: book.title,
                },
            ],
        },
    };
}

export default async function BookDetailPage({ params }: Props) {
    const { id } = await params;
    const book = books.find((b) => b.id === id);

    if (!book) {
        notFound();
    }

    return <BookDetailClient book={book} />;
}
