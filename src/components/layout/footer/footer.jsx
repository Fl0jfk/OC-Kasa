import React from "react";

import LogoKasaBlack from '../../../assets/logo/logo_black.png';
import './footer.scss'

function Footer(){
    return (
        <footer>
            <img className="footerLogo" src={LogoKasaBlack} alt="logo Kasa" />
            <p className="footerCopyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )  
}

export default Footer;