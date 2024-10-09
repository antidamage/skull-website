'use client';
import { usePathname } from 'next/navigation';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function MenuItem({ slug, name, highlight }: { slug: string, name: string, highlight: string }) {
    const currentSlug = GetSlug(0);
    function GetSlug(level: number) {
        const paths = usePathname().split('/').filter(Boolean);
        return paths[level];
    }

    return (<>
        <a href={`/${slug}`} className={`
                text-nowrap
                mx-10
                portrait:p-2
                portrait:ml-10
                [&.active]:text-gray-700
                [&.active]:bg-gray-200
                rounded
                pl-1
                pr-1
                ${currentSlug === slug ? 'active' : ''}
            `}>{name}</a >
    </>);
}