import React from 'react';
import './authorPrez.scss';

function AuthorPrez (props){
    const firstName = props.authorName.split(" ")[0];
    const lastName = props.authorName.split(" ")[1];
    return (
        <div className='housingAuthor'>
            <div>
                <p className='housingAuthorDetails'>{firstName}</p>
                <p className='housingAuthorDetails'>{lastName}</p>
            </div>
            <img className="housingAuthor" src={props.authorPicture} alt="Photographie de profil de l'auteur" />
        </div>
    )
}

export default AuthorPrez;