import {Link} from 'react-router-dom';
import React from 'react';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/district">District</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/test">Test</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;