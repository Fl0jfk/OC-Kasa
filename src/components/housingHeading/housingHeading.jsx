import React from "react";
import AuthorPrez from "../authorPrez/authorPrez";
import Stars from '../stars/stars';
import './housingHeading.scss'

function HousingHeading (props) {
    return (
        <section className="housingHeadingSection">
            <div>
                <h1>{props.title}</h1>
                <p>{props.location}</p>
                <ul className="ulHousingHeading">{props.tags}</ul>
            </div>
            <div>
                <AuthorPrez authorName={props.authorName.name} authorPicture={props.authorName.picture}/>
                <Stars stars={props.stars}/>
            </div>
        </section>
    )
}

export default HousingHeading;