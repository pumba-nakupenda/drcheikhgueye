import { books } from '@/data/books'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://drcheikhgueye.com'

    const bookUrls = books.map((book) => ({
        url: `${baseUrl}/books/${book.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...bookUrls,
    ]
}
