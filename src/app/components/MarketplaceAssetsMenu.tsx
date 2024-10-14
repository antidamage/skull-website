import SubMenuItem from './SubMenuItem';

export default function MarketplaceAssetsNenu() {

    return (<>
        <ul className="flex-block justify-end ml-auto ps-10 landscape:mt-2 leading-none tracking-tight font-bold text-nowrap text-2xl portrait:mt-5 portrait:p-10">
            <SubMenuItem submenuhref="https://www.unrealengine.com/marketplace/en-US/product/ce2cda95e5f54180b2cf7df24566bdf7" nth={200}>Advanced Cel Shader Lite</SubMenuItem>
            <SubMenuItem submenuhref="https://www.unrealengine.com/marketplace/en-US/product/advanced-cel-shader-pack" nth={200}>Advanced Cel Shader Essentials</SubMenuItem>
            <SubMenuItem submenuhref="https://www.unrealengine.com/marketplace/en-US/product/advanced-cel-shader-pack" nth={300}>Advanced Cel Shader Essentials</SubMenuItem>
            <SubMenuItem submenuhref="https://www.unrealengine.com/marketplace/en-US/product/regular-expression-blueprints" nth={400}>Regular Expression Blueprints</SubMenuItem>
            <SubMenuItem submenuhref="https://www.unrealengine.com/marketplace/en-US/product/advanced-glass-shader" nth={500}>Advanced Glass Shader</SubMenuItem>
            <SubMenuItem submenuhref="https://www.unrealengine.com/marketplace/en-US/product/advanced-fur-shader" nth={600}>Advanced Fur Shader</SubMenuItem>
            <SubMenuItem submenuhref="https://www.unrealengine.com/marketplace/en-US/product/advanced-space-shader" nth={700}>Advanced Space Shader</SubMenuItem>
            <SubMenuItem nth={700} disabled>Advanced Optics [coming soon]</SubMenuItem>
        </ul>
    </>);
}