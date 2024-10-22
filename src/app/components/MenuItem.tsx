import Link from 'next/link';

interface MenuItemProps {
    slug: string,
    name: string,
    currentslug: string,
    setActive: any
};

export default function MenuItem({ slug, name, currentslug, setActive }: MenuItemProps) {
    return (<>
        <Link
            className={`
                text-nowrap
                mx-2
                portrait:p-2
                portrait:ml-5
                [&.active]:text-gray-700
                [&.active]:bg-gray-200
                rounded
                pl-1
                pr-1
                text-lg

                ${currentslug == slug ? 'active' : 'inactive'}
            `}
            onClick={() => setActive(slug as string)}
            href={`/${slug}`}
        >{name}</Link>
    </>);
}