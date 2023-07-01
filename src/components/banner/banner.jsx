import React from "react";
import bannerImgHome from "../../assets/image/Banner.png";
import bannerImgAbout from "../../assets/image/Banner_About.png";
import './banner.css'

function Banner (page) {

const test = page.page;
let test2 = "";
const titleClass = (page.page === "bannerImgHome" ? "Active" : "hidden") + " titleBanner";

if (test==="bannerImgHome"){
    test2 = bannerImgHome
} else {
    test2 = bannerImgAbout

}
    
    return (
        <div className="containerBanner">
            <img className="imgBanner" src={test2} alt="bannière de la page d'accueil" />
            <h1 className={titleClass}>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner