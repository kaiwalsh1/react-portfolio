import GitHubIcon from '@mui/icons-material/GitHub';

export default function PortfolioList(list) {
    // {id, title, deployed, image, github, active, setSelected}

    console.log(list);
    return (
        <div className="projectContainer">
            <div className="portfolioTitle">
                <h1>{list.title}</h1>
            </div>
            <div className="portfolioCardBody">
                <img>{list.image}</img>

            </div>
            <div className="itemContainer">
                <GitHubIcon sx={{ fontSize: 40 }} 
                    // onClick={() => window.open({list.github}, '_blank')}
                    href={list.github} target="_blank" rel="noopener noreferrer"
                />
            </div>
            <div className="itemContainer">
                <span>
                    <button>Deployed</button>
                </span>
            </div>


        </div>


        // <li className={active ? "portfolioList active" : "portfolioList"}
        //     onClick={() => setSelected(id)}
        // >
        //    {title}
        //    {image}
        // </li>
    )
}