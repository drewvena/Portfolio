import React from 'react';

function Nav(props) {
    const links = [
        {
            name: 'About Me',
            id: '#about-me',
        },
        {
            name: 'Portfolio',
            id: '#portfolio',
        },
        {
            name: 'Contact',
            id: '#contact',
        },
        {
            name: 'Resume',
            id: '#resume',
        }
    ]
    return (
        <nav className="header">
            <ul className="links">
                {links.map((link) => (
                    <li>
                        <a className="linkers" href={link.id} id={link.id} onClick={() => (
                            props.setPage(link.name)
                            )
                        }>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Nav;