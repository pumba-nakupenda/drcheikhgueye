import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ReadingProgress from "@/components/ReadingProgress";
import MobileNavBar from "@/components/MobileNavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dr. Cheikh Gueye | Traducteur, Auteur & Phénoménologue",
    description: "Site officiel du Dr. Cheikh Gueye, traducteur et auteur spécialisé dans l'initiation à l'arabe et la lecture du Saint Coran. Découvrez ses ouvrages et son engagement pour la transmission du savoir.",
    keywords: ["Dr. Cheikh Gueye", "Traducteur Arabe", "Coran", "Linguistique Arabe", "Sénégal", "Phénoménologie du sacré", "Apprendre l'arabe"],
    authors: [{ name: "Dr. Cheikh Gueye" }],
    openGraph: {
        title: "Dr. Cheikh Gueye | L'Art de la Transmission",
        description: "Explorez l'univers intellectuel et spirituel du Dr. Cheikh Gueye.",
        url: "https://drcheikhgueye.com",
        siteName: "Dr. Cheikh Gueye",
        locale: "fr_FR",
        type: "website",
    },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="h-full" suppressHydrationWarning>
            <body className={`${inter.className} flex flex-col h-full bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500`}>
                <LanguageProvider>
                    <ReadingProgress />
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                    <BackToTop />
                    <MobileNavBar />
                </LanguageProvider>
            </body>
        </html>
    );
}
