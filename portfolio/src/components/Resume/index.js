import React from 'react';

function Resume(){
    return (
        <div className="resume">
            <h1 className='res'>Resume:</h1>
            <div className='ex'>
                <h3>Experience</h3>
            </div>
            <div className='work'>
                <p>Recovery Unplugged</p>
                <p>Executive Marketing Administrator</p>
                <p>Sept 2019 to December 2020</p>
            </div>
            <h3 className="skills">SKILLS:</h3>
            <div className="tech-skill">
     
                <p>React</p>
                <p>MongoDb</p>
                <p>Node</p>
                <p>Express.js</p>
                <p>MySQL</p>
                <p>JS</p>
                <p>HTML/CSS</p>
            </div>
        </div>
    )
}

export default Resume;