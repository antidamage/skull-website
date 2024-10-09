'use client';
import { usePathname } from 'next/navigation';

import SubMenuItem from './SubMenuItem';

export default function MarketplaceAssetsNenu() {
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
        <ul className="flex-block justify-end ml-auto ps-10 landscape:-mt-7 leading-none tracking-tight font-bold text-nowrap text-2xl portrait:mt-5 portrait:p-10">
            <SubMenuItem href="https://www.unrealengine.com/marketplace/en-US/product/ce2cda95e5f54180b2cf7df24566bdf7" nth={200}>Advanced Cel Shader Lite</SubMenuItem>
            <SubMenuItem href="https://www.unrealengine.com/marketplace/en-US/product/advanced-cel-shader-pack" nth={300}>Advanced Cel Shader Essentials</SubMenuItem>
            <SubMenuItem href="https://www.unrealengine.com/marketplace/en-US/product/advanced-cel-shader-pack" nth={400}>Advanced Cel Shader Essentials</SubMenuItem>
            <SubMenuItem href="https://www.unrealengine.com/marketplace/en-US/product/regular-expression-blueprints" nth={500}>Regular Expression Blueprints</SubMenuItem>
            <SubMenuItem href="https://www.unrealengine.com/marketplace/en-US/product/advanced-glass-shader" nth={600}>Advanced Glass Shader</SubMenuItem>
            <SubMenuItem href="https://www.unrealengine.com/marketplace/en-US/product/advanced-fur-shader" nth={700}>Advanced Fur Shader</SubMenuItem>
            <SubMenuItem href="https://www.unrealengine.com/marketplace/en-US/product/advanced-space-shader" nth={800}>Advanced Space Shader</SubMenuItem>
            <SubMenuItem nth={900} disabled>Advanced Optics [coming soon]</SubMenuItem>
        </ul>
    </>);
}