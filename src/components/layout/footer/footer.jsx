import React from "react";
import LogoKasaBlack from '../../../assets/logo/logo_black.png';
import './footer.scss';
import { Link } from 'react-router-dom'

function Footer(){
    return (
        <footer className="footer">
            <Link to="/">
                <img className="footerLogo" src={LogoKasaBlack} alt="logo Kasa" />
            </Link>
            <p className="footerCopyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )  
}

export default Footer;