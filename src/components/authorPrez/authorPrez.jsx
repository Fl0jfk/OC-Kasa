import React from 'react'

function AuthorPrez (props){
    return (
        <div>
            <p>{props.authorName}</p>
            <img src={props.authorPicture} alt="Photographie de profil de l'auteur" />
        </div>
    )
}

export default AuthorPrez;