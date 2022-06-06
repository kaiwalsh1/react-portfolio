import GitHubIcon from '@mui/icons-material/GitHub';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { createTheme } from '@mui/material/styles';




export default function PortfolioList(list) {
    // {id, title, deployed, image, github, active, setSelected}

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
    );

    console.log(list);
    return (
        // <div className="container" 
        //     // style={{ display: 'flex', height: '100%' }}
        //     style={{ width: '100%' }}
        //     sx={{ display: 'flex' }}
        // >
            <Card sx={{ maxWidth: 275 }}
                className="card" 
                sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    bgcolor: '#1a9363'
                }}
                // style={{ flexGrow: 1 }}
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
                        <a href={list.github} className="btn" target='_blank'>
                            <Button variant="contained" size="large" className="buttons">GitHub</Button>
                        </a>

                        <Button variant="contained" size="large" className="buttons">Deployed App</Button>
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