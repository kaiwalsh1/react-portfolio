import './header.scss'
import { Person, Email } from '@mui/icons-material';

export default function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">Kai Walsh</a>
                    {/* <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+44 924 12 74</span>
                    </div> */}
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

                <div className="right">
                    <div className="itemContainer">
                    <a href="mailto:kai@kaiconsulting.co" id="mail"><Email className="icon"/></a>
                        <span>kai@kaiconsulting.co</span>
                    </div>
                </div>
            </div>
        </div>
    )
}