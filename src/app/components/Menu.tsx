'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import MenuItem from './MenuItem';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function Menu() {
    const [currentslug, setCurrentslug] = useState(usePathname().split('/').filter(Boolean)[0]);

    const setActive = (slug: string) => {
        setCurrentslug(slug);
    }

    return <nav className="flex items-center mr-auto object-contain landscape:w-6/12">
        <div className="rounded pr-3 bg-gray-500">
            <div className="rounded pr-3 bg-gray-600">
                <div className={`rounded flex flex-wrap tracking-widest shadow-sm bg-gray-700 pe-3 ps-3 portrait:object-contain ${poppins.className}`}>

                    <MenuItem slug="HireAddie" name="Hire Addie" currentslug={currentslug} setActive={setActive} />
                    <MenuItem slug="VideoGames" name="Video Games" currentslug={currentslug} setActive={setActive} />
                    <MenuItem slug="MarketplaceAssets" name="Marketplace Assets" currentslug={currentslug} setActive={setActive} />
                    <MenuItem slug="Contact" name="Contact" currentslug={currentslug} setActive={setActive} />

                </div>
            </div>
        </div>
    </nav>;
}