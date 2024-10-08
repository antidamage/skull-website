import Image from 'next/image'

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
        <p className={`text-pretty ps-10 tracking-widest text-s font-thin ${poppins.className}`}>
            Hey peeps!
            <br />
            Addie is a game developer who is all about turning caffeine and code into epic adventures. With over a decade of Unreal Engine wizardry, she's here to make your game dreams come true — whether it's crafting jaw-dropping mechanics, fine-tuning immersive worlds, or bringing those “wouldn't it be cool if...” moments to life. Let's team up and create something unforgettable. Ready to hit start? 🎮✨
            <br /><br />

            <a className="font-extrabold text-base text-nowrap content-baseline" href="https://docs.google.com/document/d/1TZotQfqw4h_oAkPLhlSFk2TJ6eQkrNEJ1GGCGape8cA/edit?usp=sharing">
                Adeline Cook - Curriculum Vitae
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline ml-1 pb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                </svg>
            </a>
        </p>
        <h1 className="mb-4 font-extrabold leading-none tracking-tight text-4xl text-nowrap ps-10 pe-2">Hire Addie</h1>
    </>);
}   