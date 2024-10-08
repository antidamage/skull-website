'use client';
import { usePathname } from 'next/navigation';
import MenuItem from './menuitem';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function Menu() {
    return <nav className="flex items-center mx-auto">
        <div className={`flex flex-inline text-xl tracking-widest shadow-sm bg-slate-800 space-x-10 portrait:inline landscape:text-nowrap pe-5 ps-5 portrait:object-contain ${poppins.className}`}>

            <MenuItem slug="VideoGames" name="Video Games" />
            <MenuItem slug="MarketplaceAssets" name="Marketplace Assets" />
            <MenuItem slug="HireAddie" name="Hire Addie" />
            <MenuItem slug="Contact" name="Contact" />

        </div>
    </nav>;
}