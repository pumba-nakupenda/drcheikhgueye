import { redirect } from "next/navigation";
import { books } from "@/data/books";

export default function BooksPage() {
    redirect(`/books/${books[0].id}`);
}
