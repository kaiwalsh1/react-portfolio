import './footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        
        <div className="footer">
            <div className="wrapper">
                <div className="itemContainer">
                    <GitHubIcon sx={{ fontSize: 65 }} href="https://github.com/kaiwalsh1" target="_blank" rel="noopener noreferrer"/>
                </div>
                <div className="itemContainer">
                    <LinkedInIcon sx={{ fontSize: 65 }} color="primary" className="linkedIn" href="https://www.linkedin.com/in/kai-walsh/" target="_blank" rel="noopener noreferrer"/>
                </div>
                <div className="itemContainer">
                <TwitterIcon sx={{ fontSize: 65 }} href="https://twitter.com/thequeerumbrel1" target="_blank"/>
                </div>
                
            </div>
        </div>
    )
}