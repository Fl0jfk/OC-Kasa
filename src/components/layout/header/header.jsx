import React from "react";
import LogoKasa from '../../../assets/logo/logo.png';
import Navbar from "../navbar/navbar";
import './header.css'

function Header(){
    return (
        <header>
            <div className="containerLogoHeader">
                <img className="logoHeader" src={LogoKasa} alt="logo kasa"/>
            </div>
            <Navbar/>
        </header>
    )
}

export default Header;