import './footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        
        <div className="footer">
            <div className="wrapper">
                
                <div className="itemContainer">
                    <GitHubIcon sx={{ fontSize: 50 }}  />
                </div>
                <div className="itemContainer">
                    <LinkedInIcon sx={{ fontSize: 50 }} color="primary" />
                </div>
            </div>
        </div>
    )
}