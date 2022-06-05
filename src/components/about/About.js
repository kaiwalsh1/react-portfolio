import './about.scss'

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/kaiHeadshot.jpeg" alt="headshot"/>
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
                    {/* <div className="list">

                    </div> */}
                </div>
            </div>
        </div>
    )
}