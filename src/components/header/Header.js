import './header.scss'
import { Person, Email } from '@mui/icons-material';
import { useState } from 'react'

export default function Header() {
const [activeHeader, setActiveHeader] = useState(true);

    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#about"
                        onClick={() => setActiveHeader('#')}
                        className={activeNav === '#' ? 'active' : ''}
                    >Kai Walsh</a>
                    <div className="menuContainer">
                        <a href="#about" className="menuItem"
                            
                        >About Me</a>
                    </div>
                    <div className="menuContainer">
                        <a href="#portfolio" className="menuItem">Portfolio</a>
                    </div>
                    <div className="menuContainer">
                        <a href="#contact" className="menuItem">Contact Me</a>
                    </div>
                </div>

                <div className="right">
                    <div className="itemContainer">
                        <a href="mailto:kai@kaiconsulting.co" id="mail"><Email className="icon" /></a>
                        <span>kai@kaiconsulting.co</span>
                    </div>
                </div>
            </div>
        </div>
    )
}