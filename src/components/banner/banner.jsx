import React, { useState } from "react";
import './banner.scss';
import bannerHome from '../../assets/image/Banner.png';
import bannerAbout from '../../assets/image/Banner_About.png';
import '../../assets/fontawesome-free-6.4.0-web/css/solid.css';
import '../../assets/fontawesome-free-6.4.0-web/css/fontawesome.css';

function Banner (props) {

const imageBanner = props.json;
const imageBannerLocal = props.local;
const [onPageImg, setOnPageImg] = useState(0);

const getClassName = (index) => {
    if (index === onPageImg) return " show";
    return "";
}

const nextPicture = () => {
    setOnPageImg ((onPageImg + 1) % imageBanner.length);
}
const previousPicture = () => {
    const newPicture = onPageImg - 1;
    if (newPicture < 0 ) {
        setOnPageImg(imageBanner.length -1);
        return;
    }
    setOnPageImg (onPageImg - 1);
}

const imgNotLocal = () => {
    return imageBanner && imageBanner.length > 0;
}

const imgOrCarousel = () => {
    if(!imgNotLocal()) {
        if(imageBannerLocal === "homePage") {
        return (
                <>
                    <img src={bannerHome} className=" show" alt="Img de bannière" />
                    <h1 className="titleBanner">Chez vous, partout et ailleurs</h1>
                </>
        );
        } else if (imageBannerLocal ==="aboutPage");
        return  <img src={bannerAbout} className=" show" alt="Img de bannière" />;
    } else {
    return imageBanner.map((pic, index) => (
        <img key={pic} src={pic} alt="Img de bannière" className={getClassName(index)} />
    ))};
}    

return(
    <div className="imgBanner">
        {imgNotLocal() && (
            <>
            <span className="slideNumber">{onPageImg + 1}/{imageBanner.length}</span>               
            <button className="btn btnNext" onClick={nextPicture}><i className="fa-solid fa-chevron-right"></i></button>
            <button className="btn btnPrevious" onClick={previousPicture}><i className="fa-solid fa-chevron-left"></i></button>
            </>
        )}
        <div className="imgContainer"> {imgOrCarousel()} </div>            
    </div>
);
};

export default Banner;