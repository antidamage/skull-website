'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubMenuProps {
    submenuhref?: string,
    nth?: number,
    disabled?: boolean
}

export default function SubMenuItem({ submenuhref, nth, disabled, children }: React.PropsWithChildren<SubMenuProps>) {
    if (!submenuhref) submenuhref = "";

    const currentSlug = GetSlug(1);
    function GetSlug(level: number) {
        const paths = usePathname().split('/').filter(Boolean);
        return paths[level];
    }

    let target: string = "_blank";
    let active: string = "";
    if (submenuhref) {
        if (Array.from(submenuhref as string)[0] === "/")
            target = "_self";
    }
    if (usePathname() === submenuhref as string)
        active = "active";

    if (!disabled) {
        return (<>
            <li className={`
                block
                portrait:text-base
                portrait:border
                portrait:border-emerald-${nth}
                portrait:rounded
                portrait:p-2
                portrait:mb-2
                ${active}
                [&.active]:text-emerald-${nth}
                [&.active]:text-gray-800
                hover:text-emerald-${nth}
            `}>
                <Link href={submenuhref as string} target={target}>
                    {children}
                </Link>
            </li >
        </>);

    } else {
        return (<>
            <li className={`
                block
                portrait:text-base
                text-gray-500
            `}>
                {children}
            </li >
        </>);
    }
}