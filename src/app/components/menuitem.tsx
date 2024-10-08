'use client';
import { usePathname } from 'next/navigation';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function MenuItem({ slug, name }: { slug: string, name: string }) {
    const baseRoute = GetBaseRoute();

    function GetBaseRoute() {
        const paths = usePathname().split('/').filter(Boolean);
        return `/${paths[0]}`;
    }

    return (<>
        <a href={`/${slug}`} className={`
                text-nowrap
                mx-10
                portrait:p-2
                portrait:ml-10
                [&.active]:bg-gray-200
                [&.active]:text-gray-700
                rounded
                pl-1
                pr-1
                ${baseRoute === "/" + slug ? 'active' : ''}
            `}>{name}</a >
    </>);
}