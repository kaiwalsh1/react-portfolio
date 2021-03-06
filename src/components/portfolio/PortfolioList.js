// import GitHubIcon from '@mui/icons-material/GitHub';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
// import { createTheme } from '@mui/material/styles';




export default function PortfolioList(list) {
    // {id, title, deployed, image, github, active, setSelected}

    console.log(list);
    return (
            <Card
                className="card" 
                sx={{
                    maxWidth: 275,
                    display: 'flex',
                    flexWrap: 'nowrap',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    bgcolor: '#458DA5',
                }}
            >
                <CardContent className="cardContent">
                    <Typography variant="h5" component="div">
                        {list.title}
                    </Typography>
                    <CardMedia
                        className="imgContainer"
                        component="img"
                        height="180"
                        image={list.image}
                        alt={list.title}
                    />
                    <CardActions>
                        {/* <Link to={this.list.github} onClick={() => setButton(true)}></Link> */}
                        <a href={list.github} className="btn" target='_blank' rel="noopener noreferrer">
                            <Button variant="contained" size="large" className="buttons">GitHub</Button>
                        </a>

                        <a href={list.deployed} className="btn" target='_blank' rel="noopener noreferrer">
                            <Button variant="contained" size="large" className="buttons">Deployed App</Button>
                        </a>
                    </CardActions>
                </CardContent>
            </Card>
        // </div>



        // <div className="projectContainer">
        //     <div className="portfolioTitle">
        //         <h1>{list.title}</h1>
        //     </div>
        //     <div className="portfolioCardBody">
        //         <div className="imgContainer">
        //             <img src={list.image} alt={list.title} />
        //         </div>

        //     </div>
        //     <div className="itemContainer">
        //         <GitHubIcon sx={{ fontSize: 40 }}
        //             // onClick={() => window.open({list.github}, '_blank')}
        //             href={list.github} target="_blank" rel="noopener noreferrer"
        //         />
        //     </div>
        //     <div className="itemContainer">
        //         <span>
        //             <button>Deployed</button>
        //         </span>
        //     </div>


        // </div>


        // <li className={active ? "portfolioList active" : "portfolioList"}
        //     onClick={() => setSelected(id)}
        // >
        //    {title}
        //    {image}
        // </li>
    )
}