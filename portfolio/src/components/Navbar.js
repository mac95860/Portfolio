import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className = 'navbar_container'>
            <h1>Navbar</h1>
            <ul className = 'navbar_menu'>
                <Link to = "/">
                    <li>About</li>
                </Link>
                <Link to = "/portfolio">
                    <li>Portfolio</li>
                </Link>
                <Link to = "/contact">
                    <li>Contact</li>
                </Link>
                
            </ul>
        </div>
    )
}
