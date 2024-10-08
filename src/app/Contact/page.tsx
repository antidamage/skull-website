import Title from '../components/title';

export default function Contact({ }: {}) {
    return (<>
        <div className="flex block">
            <div className="">
                <p className="ps-10 leading-none tracking-tight font-bold text-lg text-nowrap">Adeline Cook<br />
                    <a href="mailto:adeline@skull.nz">adeline@skull.nz</a><br />
                    <a href="tel:+64212700222">+64 21 2700 222</a></p>

                <div className="flex inline mt-5">
                    <div className="ps-10 leading-none tracking-tight font-bold text-2x1 text-nowrap">
                        <div>
                            <a href="https://discord.gg/RAEJEhW" className="flex flex-nowrap align-baseline text-lg">
                                Discord
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 flex flex-nowrap ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Title name="Contact Addie" />

        </div>
    </>);
}