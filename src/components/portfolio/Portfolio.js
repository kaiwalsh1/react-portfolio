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
            image: './assets/puppyLove.png',
            title: "Puppy Love",
            github: 'https://github.com/EsotericZ/puppylove',
            deployed: 'https://esotericz.github.io/puppylove/',
        },
        {
            id: "2",
            image: './assets/famYouly.png',
            title: "FamYOUly",
            github: 'https://github.com/EsotericZ/famYOUly',
            deployed: 'https://evening-island-73261.herokuapp.com/login',
        },
        {
            id: "3",
            image: './assets/corank.png',
            title: "CO Racquetball Ranking Generator",
            github: 'https://github.com/EsotericZ/coRBallRank',
            deployed: 'https://corballrank.herokuapp.com/',
        },
        {
            id: "4",
            image: './assets/weatherDashboard.png',
            title: "Weather Dashboard",
            github: 'https://github.com/kaiwalsh1/WeatherDashboardAPIHomework',
            deployed: 'https://kaiwalsh1.github.io/WeatherDashboardAPIHomework/',
        },
        {
            id: "5",
            image: './assets/noteTakerApp.png',
            title: "CO Racquetball Ranking Generator",
            github: 'https://github.com/kaiwalsh1/NoteTakerHomework',
            deployed: 'https://note-taker-app-hw.herokuapp.com/',
        },
    ];

    return (
        <div className="portfolio" id="portfolio">
            <h1 className="portfolioHeader">Portfolio</h1>
            <div className="container">
                {list.map(item => (
                    <PortfolioList
                        sx={{ justifyContent: 'flex-start' }}
                        sx={{ flexWrap: 'wrap' }}
                        id={list.id}
                        list={list}
                        image={item.image}
                        title={item.title}
                        github={item.github}
                        deployed={item.deployed}
                        key={list.id}
                        // active={selected === item.id}
                        // setSelected={setSelected}
                    />
                ))}
            </div>
        </div>
    )
}