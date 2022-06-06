import './footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Person, Email } from '@mui/icons-material';

export default function Footer() {
    return (

        <div className="footer">
            <div className="navBarBottom">
                <div className="itemContainer container-fluid">
                    <a href="https://github.com/kaiwalsh1" target="_blank" className="github">
                        <GitHubIcon sx={{ fontSize: 65 }} />
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/kai-walsh/" target="_blank" className="linkedIn">
                        <LinkedInIcon sx={{ fontSize: 65 }} />
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="https://twitter.com/thequeerumbrel1" target="_blank" className="twitter">
                        <TwitterIcon sx={{ fontSize: 65 }} />
                    </a>
                </div>

            </div>
        </div>
    )
}