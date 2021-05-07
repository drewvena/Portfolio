import React from 'react';
import nowPlaying from '../../assets/images/now-playing.png';
function Portfolio() {
    const projects = [
        {
            name: 'Now Playing',
            img: nowPlaying,
            description: 'Now Playing is a social media application where users post music they are listening to and other users can interact, comment and like each others posts!',
            tech: 'Handlebars, Express, Sequelize'
        },
        {
            name: 'Cinequiz',
            img: 'cinequiz',
            description: 'The Movie Game that uses a third party api to build a movie trivia game for the user to enjoy! All answers are responded to using a gif and highscores are logged for everyone, lets see who is best!',
            tech: 'HTML, CSS, JS, OMDb API, GIPHY API'
        }
    ];
    return (
        <section id="projects">
            {projects.map((project) => (
                <div className="Project">
                    <img className="port-img"src={project.img} alt={`${project.name}`} />
                    <h3 className="proj-d">{project.name}</h3>
                    <p className="proj-d">{project.description}</p>
                    <p className="proj-d">{project.tech}</p>
                </div>
            ))}
        </section>
    )
}
export default Portfolio;