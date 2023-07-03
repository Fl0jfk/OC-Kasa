import React from 'react';
import { Link } from 'react-router-dom';
import './errorPage.scss';

function ErrorPage (){
    return (
        <div className='error__page'>
            <h1 className='errorPage404'>404</h1>
            <p className='textErrorPage'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='linkErrorPageToHome' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default ErrorPage