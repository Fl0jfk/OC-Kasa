import React from "react";
import bannerImg from "../../assets/image/Banner.png";
import './banner.css'

function Banner () {
    return (
        <div className="containerBanner">
            <img className="imgBanner" src={bannerImg} alt="bannière de la page d'accueil" />
            <h1 className="titleBanner">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner