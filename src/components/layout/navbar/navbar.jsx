import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navbar.scss";

function Navbar (){
    const whatPageActive = useLocation();
    const [isActive, setIsActive] = useState("/");

    useEffect (() => {
        setIsActive(whatPageActive.pathname);
    }, [whatPageActive]);

   const onHomePage = (isActive === "/" ? "active" : "");
   const onAboutPage = (isActive === "/about" ? "active" : "");

    return (
        <nav className='navbarHeader'>
            <Link  className={onHomePage} to="/" relative='path'>Accueil</Link>
            <Link  className={onAboutPage} to="/about" relative='path'>À propos</Link>
        </nav>
    )
}

export default Navbar;