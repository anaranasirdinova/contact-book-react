import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="container">
                <ul className="nav-links">
                    <li><Link to="/">Contacts</Link></li>
                    <li><Link to="/add">Add</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;