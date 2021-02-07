import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className = 'navbar_container'>
            <h1>Michael Cervantes</h1>
            <ul className = 'navbar_menu'>
                <Link to = "/" style={{ textDecoration: 'none' }}>
                    <li>About</li>
                </Link>
                <Link to = "/portfolio" style={{ textDecoration: 'none' }}>
                    <li>Portfolio</li>
                </Link>
                <Link to = "/contact" style={{ textDecoration: 'none' }}>
                    <li>Contact</li>
                </Link>
                
            </ul>
        </div>
    )
}
