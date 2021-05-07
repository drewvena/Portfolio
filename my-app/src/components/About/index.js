  
import React from 'react';
import headshot from '../../assets/images/headshot.jpg';

function About() {
    
    return (
        <section id="about">
            <img className="drew" src={headshot} alt="headshot" width="25%" />
            <div className="about-text">
                <p>
                My name is Drew Vena, I am a full stack web developer who learned the tricks of the trade through a bootcamp by The University of Texas.  
                </p>
            </div>
        </section>
    )
}
export default About;