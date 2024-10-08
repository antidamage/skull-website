import Image from 'next/image';
import Title from '../components/title';

import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function HireAddie({ }: {}) {
    return (<>
        <Image
            src="/i/addie.png"
            width={300}
            height={500}
            alt="Adeline Cook"
            className="flex-inline ps-10 object-cover"
        />
        <p className={`max-w-prose text-pretty ps-10 tracking-widest text-s font-thin ${poppins.className}`}>
            Adeline is a game developer who is all about turning caffeine and code into epic adventures. With over a decade of Unreal Engine wizardry, she's here to make your game dreams come true — whether it's crafting jaw-dropping mechanics, fine-tuning immersive worlds, or bringing those “wouldn't it be cool if...” moments to life. Let's team up and create something unforgettable. Ready to hit start? 🎮✨
            <br /><br />
            Addie is also a talented web developer who regularly runs the gamut of dev-ops, server admin, database admin, frontend and backend.
            <br /><br />
            <a className="flex flex-nowrap align-baseline text-lg font-bold hover:text-emerald-200" href="https://docs.google.com/document/d/1TZotQfqw4h_oAkPLhlSFk2TJ6eQkrNEJ1GGCGape8cA/edit?usp=sharing" target="_blank">
                Adeline Cook - Curriculum Vitae
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 flex flex-nowrap ml-2 text-nowrap">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                </svg>
            </a>
            <br />
            <a className="flex flex-nowrap align-baseline text-base font-bold hover:text-emerald-400" href="https://github.com/antidamage/skull-website" target="_blank">
                This website uses Next.js and Tailwind - Github
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 flex flex-nowrap ml-2 text-nowrap">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </a>

        </p>
        <Title name="Hire Addie" />
    </>);
}   