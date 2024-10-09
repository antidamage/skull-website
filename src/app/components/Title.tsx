'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from "react";
interface Props {
    children?: ReactNode;
}

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function Title({ name }: { name: string }) {
    return (<>
        <div className="portrait:hidden landscape:flex landscape:flex-nowrap landscape:justify-end ml-5 landscape:-mt-7 rounded-lg mt-0 pb-0 bg-gray-600">
            <div className="landscape:flex rounded-lg mt-2 pb-0 bg-gray-700">
                <div className="landscape:flex font-extrabold leading-none tracking-tight text-4xl text-nowrap ps-10 pe-2 flex flex-nowrap justify-end rounded-lg mt-2 pb-0 bg-gray-800 pt-2   ">
                    {name}
                </div >
            </div >
        </div >
    </>);
}