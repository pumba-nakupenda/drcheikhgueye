export default function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <span className="text-zinc-400 text-sm">
                        Basé à Dakar, Sénégal
                    </span>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-base text-zinc-400">
                        &copy; {new Date().getFullYear()} Dr. Cheikh Gueye. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
