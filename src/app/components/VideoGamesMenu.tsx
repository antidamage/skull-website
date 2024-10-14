import SubMenuItem from './SubMenuItem';

export default function VideoGameNenu() {

    return (<>
        <ul className="flex-block justify-end ml-auto ps-10 landscape:mt-2 leading-none tracking-tight font-bold text-nowrap text-2xl portrait:mt-5 portrait:p-10">
            <SubMenuItem submenuhref="https://poppyandbuddy.com" nth={200}>Poppy and Buddy</SubMenuItem>
            <SubMenuItem submenuhref="https://solitaireknights.com" nth={300}>Solitaire Knights</SubMenuItem>
            <SubMenuItem disabled>Apollo Marine Park [coming soon]</SubMenuItem>
            <SubMenuItem disabled>Springmancer [coming soon]</SubMenuItem>
        </ul >
    </>);
}