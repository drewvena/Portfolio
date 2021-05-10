import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
function Footer(){
    return (
        <section id="footer" className='footer'>
            <a href="https://github.com/drewvena" target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/drew-vena-065b33191/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        </section>
    )
}
export default Footer