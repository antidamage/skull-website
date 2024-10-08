'use client';
import { usePathname } from 'next/navigation';
import MenuItem from './menuitem';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function Menu() {
    return <nav className="flex items-center mx-auto">
        <div className="rounded pr-3 bg-gray-500">
            <div className="rounded pr-3 bg-gray-600">
                <div className={`rounded flex flex-wrap text-xl tracking-widest shadow-sm bg-gray-700 space-x-10 pe-4 ps-4 portrait:object-contain ${poppins.className}`}>

                    <MenuItem slug="VideoGames" name="Video Games" highlight="200" />
                    <MenuItem slug="MarketplaceAssets" name="Marketplace Assets" highlight="400" />
                    <MenuItem slug="HireAddie" name="Hire Addie" highlight="600" />
                    <MenuItem slug="Contact" name="Contact" highlight="800" />

                </div>
            </div>
        </div>
    </nav>;
}