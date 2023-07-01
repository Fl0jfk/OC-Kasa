import React, { useState } from "react";
import './scrollingMenu.css';
import '../../assets/fontawesome-free-6.4.0-web/css/solid.css';
import '../../assets/fontawesome-free-6.4.0-web/css/fontawesome.css';


function ScrollingMenu (props){

    const [isActive, setIsActive] = useState(false);

    const clickOnTitleBar = () => {
        setIsActive (!isActive);
    }
    
    const chevronClass = "fa-solid " + (isActive ? "fa-chevron-up" : "fa-chevron-down");
    const contentClass = (isActive ? "Active" : "hidden") + " scrollingMenuContent";
   
    return (
        <ul className="scrollingMenuPanel">
            <div onClick={clickOnTitleBar} className="scrollingMenuTitle">
                <span>{props.title}</span>
                <i className={chevronClass}></i>  
            </div>
            <li className={contentClass} > {props.content} </li>
        </ul>
    )
}

export default ScrollingMenu;   