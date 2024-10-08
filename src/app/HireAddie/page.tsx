import Image from 'next/image'

export default function HireAddie({ }: {}) {
    return (
        <>
            <h1 className="mb-4 font-extrabold leading-none tracking-tight lg:text-4xl">Hire Addie</h1>
            <Image
                src="/i/addie.png"
                width={300}
                height={500}
                alt="Adeline Cook"
                className="flex-inline"
            />
            <p className="text-pretty">Hey peeps!</p>
            <p className="text-pretty">I'm a game developer who is all about turning caffeine and code into epic adventures. With over a decade of Unreal Engine wizardry, I'm here to make your game dreams come true — whether it's crafting jaw-dropping mechanics, fine-tuning immersive worlds, or bringing those “wouldn't it be cool if...” moments to life. Let's team up and create something unforgettable. Ready to hit start? 🎮✨</p>
            <p className="text-pretty"><a href="https://docs.google.com/document/d/1TZotQfqw4h_oAkPLhlSFk2TJ6eQkrNEJ1GGCGape8cA/edit?usp=sharing">Adeline Cook - Curriculum Vitae</a></p>
        </>
    );
}   