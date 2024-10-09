'use client';
import { usePathname } from 'next/navigation';

interface SubMenuProps {
    href?: string,
    nth?: number,
    disabled?: boolean
}

export default function SubMenuItem({ href, nth, disabled, children }: React.PropsWithChildren<SubMenuProps>) {
    const currentSlug = GetSlug(1);
    function GetSlug(level: number) {
        const paths = usePathname().split('/').filter(Boolean);
        return paths[level];
    }

    let target: string = "_blank";
    let active: string = "";
    if (href) {
        if (Array.from(href as string)[0] === "/")
            target = "_self";
        if (usePathname() === href)
            active = "active";
    }

    return (<>
        <li className={`
            block
            ${active}
            [&.active]:text-emerald-${nth}
            [&.active]:text-gray-800x
            ${!disabled && nth ? "hover:text-emerald-" + nth : ""}
            ${disabled ? "text-gray-500" : ""}
        `}>
            <a href={href} target={target}>
                {children}
            </a>
        </li >
    </>);
}