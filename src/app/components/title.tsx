'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from "react";
interface Props {
    children?: ReactNode;
}

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function Title({ name, children }: { name: string, children?: any }) {
    return (<>
        <div className="mb-4 font-extrabold leading-none tracking-tight text-4xl text-nowrap ps-10 pe-2 flex flex-nowrap justify-end">
            {name}{children}
        </div>
    </>);
}