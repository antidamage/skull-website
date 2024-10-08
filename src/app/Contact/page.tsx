import Title from '../components/Title';
import DefaultContent from '../components/DefaultContent';

export default function Contact({ }: {}) {
    return (<>
        <DefaultContent />
        <div className="flex-block justify-end landscape:ml-auto ps-10 landscape:mt-2 leading-none tracking-tight font-bold text-nowrap text-2xl portrait:p-10">
            <p className="ps-10 leading-none tracking-tight font-bold text-2xl portrait:text-base text-nowrap flex-nowrap portrait:w-8/12">Adeline Cook<br />
                <a className="hover:text-emerald-200 text-nowrap flex-nowrap flex-inline" href="mailto:adeline@skull.nz">
                    adeline@skull.nz&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline ml-auto portrait:w-6/12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </a>
                <br />
                <a className="hover:text-emerald-300 text-nowrap flex-nowrap" href="tel:+64212700222">
                    +64 21 2700 222&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline ml-auto portrait:w-6/12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </a>
                <br />
                <a href="https://discord.gg/RAEJEhW" className="hover:text-emerald-400 flex flex-nowrap align-baseline" target="_blank">
                    Discord&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline ml-auto mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </a>
            </p>
        </div>
        <Title name="Contact Addie" />
    </>);
}