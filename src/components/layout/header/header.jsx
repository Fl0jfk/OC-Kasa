import React from "react";
import LogoKasa from '../../../assets/logo/logo.png';
import Navbar from "../navbar/navbar";
import './header.scss';
import { Link } from "react-router-dom";

function Header(){
    return (
        <header className="header">
            <div className="headerContainerLogo">
                <Link to="/"><img className="headerLogo" src={LogoKasa} alt="logo kasa"/></Link>
            </div>
            <Navbar/>
        </header>
    )
}

export default Header;