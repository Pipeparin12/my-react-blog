import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const navLinks = [
    {
        titles: 'Home',
        path: '/'
    },
    {
        titles: 'Blog',
        path: '/blog'
    },
    {
        titles: 'Login',
        path: '/login'
    },
]

export default function Navigation({user}) {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className="site-navigation">
            <span className="menu-title">Blog</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                { navLinks.map((link, index) => (              
                    <li key={index}>
                        <Link to={link.path}>{link.titles}</Link>
                    </li>
                    ))
                }
                </ul>
                <span className="menu-avatar-container">
                <span className="menu-avatar-name">{ `${user.firstName} ${user.lastName}` }</span>
                </span>
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
        </nav>
    )
}