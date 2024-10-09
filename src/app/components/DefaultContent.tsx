'use client';
import { useState } from "react";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function Default() {
    return (<>
        <div className="inline-flex portrait:hidden">
            <Image
                src="/i/skull-slow.gif"
                alt=""
                width={400}
                height={400}
                className="mr-auto scale-x-[-1] opacity-40 filter blur-xs portrait:hidden"
            />
        </div>
    </>);
}