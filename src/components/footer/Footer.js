import './footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (

        <div className="footer">
            <div className="navBarBottom">
                <div className="itemContainer container-fluid">
                    <a href="https://github.com/kaiwalsh1" target="_blank" rel="noopener noreferrer" className="github">
                        <GitHubIcon sx={{ fontSize: 65 }} />
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/kai-walsh/" target="_blank" rel="noopener noreferrer" className="linkedIn">
                        <LinkedInIcon sx={{ fontSize: 65 }} />
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="https://twitter.com/thequeerumbrel1" target="_blank" rel="noopener noreferrer" className="twitter">
                        <TwitterIcon sx={{ fontSize: 65 }} />
                    </a>
                </div>

            </div>
        </div>
    )
}