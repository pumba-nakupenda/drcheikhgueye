const FLAG_CODES: Record<string, string> = { fr: 'fr', en: 'gb', ar: 'sa' };

interface FlagProps {
    lang: string;
    size?: number;
    className?: string;
}

export default function Flag({ lang, size = 20, className = '' }: FlagProps) {
    const code = FLAG_CODES[lang] || lang;
    return (
        <img
            src={`https://flagcdn.com/w40/${code}.png`}
            srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
            width={size}
            height={Math.round(size * 0.75)}
            alt={lang.toUpperCase()}
            className={`inline-block rounded-sm ${className}`}
            style={{ width: size, height: 'auto' }}
            loading="lazy"
        />
    );
}
