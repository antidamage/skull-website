import Title from '../components/title';

export default function VideoGames() {
    return (<>
        <ul className="ps-10 leading-none tracking-tight font-bold text-nowrap text-2xl">
            <li className="hover:text-emerald-200"><a href="https://www.poppyandbuddy.com/" target="_blank">Poppy and Buddy</a></li>
            <li className="hover:text-emerald-400"><a href="https://www.solitaireknights.com/" target="_blank">Solitaire Knights</a></li>
            <li className="text-gray-500">Apollo Marine Park [coming soon]</li>
            <li className="text-gray-500">Springmancer [coming soon]</li>
        </ul>
        <Title name="Video Games" />
    </>)
}