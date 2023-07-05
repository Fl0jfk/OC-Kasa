import React from "react";
import './stars.scss'

function Stars (props) {
    return (
        <div className="housingRatingStars">
                        { [1, 2, 3, 4, 5].map((number) => (
                        <span key={number} className={props.stars >= number ? "valid" : ""}><i className="fa-solid fa-star"></i></span>                                               
                        ))}                        
                    </div>
    )
}

export default Stars;