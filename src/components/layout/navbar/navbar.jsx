import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar (){
    return (
        <nav className='navbarHeader'>
            <Link className='navbarLink' to="/" relative='path'>Accueil</Link>
            <Link className='navbarLink' to="/about" relative='path'>A propos</Link>
        </nav>
    )
}

export default Navbar;