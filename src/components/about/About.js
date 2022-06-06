import './about.scss'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/kaiHeadshot.jpeg" alt="headshot" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Kai Walsh</h1>
                    <h3>Web Developer | Social Entrepreneur</h3>
                    <div className="paragraph">
                        <p>
                            I am currently a social entrepreneur and digital marketing strategist.
                            I founded the <a href="https://queerumbrella.com/">Queer Umbrella</a>, an organization aiming to make queer
                            community accessible – by cultivating physical and digital spaces for
                            queer empowerment.
                        </p>
                        <p>
                            I enrolled at the University of Denver boot camp October 2021 to begin
                            my career as a <b>Full-Stack Web Developer</b>.
                        </p>
                    </div>
                    <div className="containerSection">
                        <div className="leftSection">
                            <div className="resume">
                                <Stack spacing={2} direction="row">
                                    <a href="./assets/KaiWalshResume.pdf" target="_blank">
                                        <Button variant="contained" className="button" sx={{ fontSize: 20 }}>Download my resume</Button>
                                    </a>
                                </Stack>
                            </div>
                        </div>
                        <div className="middleSection">
                            <div className="list">
                                <h2>Languages</h2>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>JQuery</li>
                                    <li>Node.js</li>
                                    <li>React</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="rightSection">
                            <div className="list">
                                <h2>Databases</h2>
                                <ul>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>Express.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}