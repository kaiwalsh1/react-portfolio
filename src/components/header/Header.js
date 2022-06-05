import './header.scss'
import { Person, Email } from '@mui/icons-material';
import { useState } from 'react'

export default function Header({setCurrentPage}) {
// const [activeHeader, setActiveHeader] = useState('#about');

    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#about" 
                        className="logo"
                    >Kai Walsh</a>

                    <div className="menuContainer">
                        <a href="#about" 
                            className="menuItem"
                            onClick={() => setCurrentPage('About')}
                        >About Me</a>
                    </div>
                    <div className="menuContainer">
                        <a href="#portfolio" 
                            className="menuItem"
                            onClick={() => setCurrentPage('Portfolio')}
                        >Portfolio</a>
                    </div>
                    <div className="menuContainer">
                        <a href="#contact" 
                            className="menuItem"
                            onClick={() => setCurrentPage('Contact')}
                        >Contact Me</a>
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