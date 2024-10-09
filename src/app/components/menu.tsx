'use client';
import MenuItem from './MenuItem';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function Menu() {
    return <nav className="flex items-center mr-auto object-contain landscape:w-6/12">
        <div className="rounded pr-3 bg-gray-500">
            <div className="rounded pr-3 bg-gray-600">
                <div className={`rounded flex flex-wrap text-xl tracking-widest shadow-sm bg-gray-700 space-x-10 pe-4 ps-4 portrait:object-contain ${poppins.className}`}>

                    <MenuItem slug="HireAddie" name="Hire Addie" highlight="400" />
                    <MenuItem slug="VideoGames" name="Video Games" highlight="500" />
                    <MenuItem slug="MarketplaceAssets" name="Marketplace Assets" highlight="600" />
                    <MenuItem slug="Contact" name="Contact" highlight="700" />

                </div>
            </div>
        </div>
    </nav>;
}