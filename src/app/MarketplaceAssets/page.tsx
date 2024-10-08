import Title from '../components/title';

export default function MarketplaceAssets() {
    return (<>
        <ul className="ps-10 leading-none tracking-tight font-bold text-nowrap text-2xl">
            <li><a href="https://www.unrealengine.com/marketplace/en-US/product/ce2cda95e5f54180b2cf7df24566bdf7" target="_blank">Advanced Cel Shader Lite</a></li>
            <li><a href="https://www.unrealengine.com/marketplace/en-US/product/advanced-cel-shader-pack" target="_blank">Advanced Cel Shader Essentials</a></li>
            <li className="text-gray-500">Advanced Optics [coming soon]</li>
            <li><a href="https://www.unrealengine.com/marketplace/en-US/product/regular-expression-blueprints" target="_blank">Regular Expression Blueprints</a></li>
            <li><a href="https://www.unrealengine.com/marketplace/en-US/product/advanced-glass-shader" target="_blank">Advanced Glass Shader</a></li>
            <li><a href="https://www.unrealengine.com/marketplace/en-US/product/advanced-fur-shader" target="_blank">Advanced Fur Shader</a></li>
            <li><a href="https://www.unrealengine.com/marketplace/en-US/product/advanced-space-shader" target="_blank">Advanced Space Shader</a></li>
        </ul>
        <Title name="Marketplace Assets" />
    </>)
}