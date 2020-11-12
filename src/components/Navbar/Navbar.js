import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';
import logo from '../../logo.svg';
import HamburgerToggleButton from '../HamburgerMenu/HamburgerToggleButton';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
            <div>
                <HamburgerToggleButton click={props.hamburgerMenuClickHandler}/>
            </div>
            <div className="navbar-logo">
                <img src={logo} className="App-logo nav" alt="logo" />
                <Link to="/"><a>Sepehr Ataei</a></Link>
            </div>
            <div className="spacer"/>
                <div className="navbar_navigation-items">
                    <ul>
                        <Link to="/ReceptiveField">
                            <li><a>Receptive Field</a></li>
                        </Link>
                        <Link to="/ConvVisualizer">
                            <li><a>Conv2D Visualizer</a></li>
                        </Link>
                        <Link to="/Resume">
                            <li><a>Resume</a></li>
                        </Link>
                    </ul>
                </div>
        </nav>
    </header>
);

export default navbar