'use client';
import { usePathname } from 'next/navigation';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function MenuItem({ slug, name }: { slug: string, name: string }) {
    const baseRoute = getBaseRoute();

    function getBaseRoute() {
        const paths = usePathname().split('/').filter(Boolean);
        return `/${paths[0]}`;
    }

    return (<>
        <a href={`/${slug}`} className={`
                text-nowrap
                mx-10
                ${baseRoute === "/" + slug ? 'active' : ''}
            `}>{name}</a >
    </>);
}