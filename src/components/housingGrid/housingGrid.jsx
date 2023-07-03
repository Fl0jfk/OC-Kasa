import React from 'react';
import './housingGrid.scss';
import HousingCard from "../housingCard/housingCard";
import database from '../../database.json';

function Annonce (){
    return (
     <section className="grid">
    {database.map((housing) => (
    <HousingCard key={housing.id} id={housing.id} title={housing.title} imageUrl={housing.cover}/>
    ))}                
</section>
    )
}

export default Annonce;
