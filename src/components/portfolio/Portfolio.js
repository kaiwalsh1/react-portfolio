import './portfolio.scss'
import { useEffect, useState } from 'react'
import PortfolioList from './PortfolioList'
import puppyLove from '../../assets/puppyLove.png';
import famYouly from '../../assets/famYOUly.png';
import corank from '../../assets/corank.png';
import weatherDashboard from '../../assets/weatherDashboard.png';
import noteTakerApp from '../../assets/noteTakerApp.png';


export default function Portfolio() {

    const [project, setProject] = useState('');

    const list = [
        {
            id: "1",
            image: puppyLove.png,
            title: "Puppy Love",
            github: 'https://github.com/EsotericZ/puppylove',
            deployed: 'https://esotericz.github.io/puppylove/',
        },
        {
            id: "2",
            image: famYouly.png,
            title: "FamYOUly",
            github: 'https://github.com/EsotericZ/famYOUly',
            deployed: 'https://evening-island-73261.herokuapp.com/login',
        },
        {
            id: "3",
            image: corank.png,
            title: "CO Racquetball Ranking Generator",
            github: 'https://github.com/EsotericZ/coRBallRank',
            deployed: 'https://corballrank.herokuapp.com/',
        },
        {
            id: "4",
            image: weatherDashboard.png,
            title: "Weather Dashboard",
            github: 'https://github.com/kaiwalsh1/WeatherDashboardAPIHomework',
            deployed: 'https://kaiwalsh1.github.io/WeatherDashboardAPIHomework/',
        },
        {
            id: "5",
            image: noteTakerApp.png,
            title: "CO Racquetball Ranking Generator",
            github: 'https://github.com/kaiwalsh1/NoteTakerHomework',
            deployed: 'https://note-taker-app-hw.herokuapp.com/',
        },
    ];

    return (
        <div className="portfolio" id="portfolio">
            <h1 className="portfolioHeader">Portfolio</h1>
                {list.map(item => (
                    <PortfolioList
                        id={list.id}
                        list={list}
                        image={item.image}
                        title={item.title}
                        github={item.github}
                        deployed={item.deployed}
                        // active={selected === item.id}
                        // setSelected={setSelected}
                    />
                ))}
        </div>
    )
}