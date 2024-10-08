'use client';
import { usePathname } from 'next/navigation';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function Menu() {
    const baseRoute = getBaseRoute();

    function getBaseRoute() {
        const paths = usePathname().split('/').filter(Boolean);
        return `/${paths[0]}`;
    }

    return <nav className="flex items-center mx-auto">
        <div className={`
            flex
            text-xl 
            tracking-widest 
            shadow-sm 
            bg-violet-800 
            rounded-lg
            space-x-10
            ${poppins.variable}
        `}>
            <a href="/VideoGames" className={`
                mx-10
                ${baseRoute === '/VideoGames' ? 'active' : ''}
            `}>Video Games</a>

            <a href="/MarketplaceAssets" className={`
                mx-10
                ${baseRoute === '/MarketplaceAssets' ? 'active' : ''}
            `}>Marketplace Assets</a>

            <a href="/HireAddie" className={`
                mx-10
                ${baseRoute === '/HireAddie' ? 'active' : ''}
            `}>Hire Addie</a>

            <a href="/Contact" className={`
                mx-10
                ${baseRoute === '/Contact' ? 'active' : ''}
            `}>Contact</a>
        </div>
    </nav>;
}