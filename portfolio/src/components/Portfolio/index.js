import React from 'react';
import nowPlaying from '../../assets/images/now-playing.png';
import Cinequiz from '../../assets/images/cinequiz.png';
import Budget from '../../assets/images/budget.png';
import Nolo from '../../assets/images/nolo.png';
import Notes from '../../assets/images/note-taker.png';
import quiz from '../../assets/images/Screenshot.png';
function Portfolio() {
    const projects = [
        {
            name: 'Now Playing',
            img: nowPlaying,
            description: 'Now Playing is a social media application where users post music they are listening to and other users can interact, comment and like each others posts!',
            tech: 'Handlebars, Express, Sequelize',
            repository: 'https://github.com/drewvena/now-playing',
            deployed: 'https://nowplayingapp.herokuapp.com/'
            
        },
        {
            name: 'Cinequiz',
            img: Cinequiz,
            description: 'The Movie Game that uses a third party api to build a movie trivia game for the user to enjoy! All answers are responded to using a gif and highscores are logged for everyone, lets see who is best!',
            tech: 'HTML, CSS, JS, OMDb API, GIPHY API',
            repository: 'https://github.com/drewvena/git-it-right',
            deployed: 'https://drewvena.github.io/git-it-right/'
        },
        {
            name: 'Budget Tracker',
            img: Budget,
            description: 'This project uses mongodb, mongoose, express, service workers and a manifest to create an application to track your budget! The application has been deployed to heroku in connection with Mongo Atlas',
            tech: 'Mongodb, mongoose, express, service workers, heroku and Mongo Atlas',
            repository: 'https://github.com/drewvena/symmetrical-giggle',
            deployed: 'https://budget-tracker-man.herokuapp.com/'

        },
        {
            name: 'Nolo',
            img: Nolo,
            description: 'This project was built using Bootstrap, HTML and CSS, I built the page for my band and used github pages as the server to connect the domain for free hosting!',
            repository: 'https://github.com/drewvena/nolo',
            deployed: 'http://nolotheband.com/'
        },
        {
            name: 'Note Taker',
            img: Notes,
            description: 'This project uses express, path, nanoid and heroku to create a note taking application that has save and delete funcionality!',
            repository: 'https://github.com/drewvena/express-note-taker',
            deployed: 'https://notey-totey.herokuapp.com/'
        },
        {
            name: 'Coding Quiz',
            img: quiz,
            description: 'This project uses local storage along with JS, HTML and CSS to create a five question coding quiz that has a penalty for wrong answers(subtract in time remaining)',
            repository: 'https://github.com/drewvena/coding-quiz',
            deployed: 'https://drewvena.github.io/coding-quiz/'
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
                    <a className="proj-a" href={project.repository}>Repository</a>
                    <a className="proj-a" href={project.deployed}>Deployed App</a>
                </div>
            ))}
        </section>
    )
}
export default Portfolio;