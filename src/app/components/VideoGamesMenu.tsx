'use client';
import { usePathname } from 'next/navigation';

import SubMenuItem from './SubMenuItem';

export default function VideoGameNenu() {
    const currentSlug = GetSlug(1);
    function GetSlug(level: number) {
        const paths = usePathname().split('/').filter(Boolean);
        return paths[level];
    }

    function GetPathDepth() {
        const paths = usePathname().split('/').filter(Boolean);
        return paths.length;
    }

    return (<>
        <ul className="flex-block justify-end ml-auto ps-10 landscape:mt-2 leading-none tracking-tight font-bold text-nowrap text-2xl portrait:mt-5 portrait:p-10">
            <SubMenuItem href="https://poppyandbuddy.com" nth={200}>Poppy and Buddy</SubMenuItem>
            <SubMenuItem href="https://solitaireknights.com" nth={300}>Solitaire Knights</SubMenuItem>
            <SubMenuItem disabled>Apollo Marine Park [coming soon]</SubMenuItem>
            <SubMenuItem disabled>Springmancer [coming soon]</SubMenuItem>
        </ul >
    </>);
}