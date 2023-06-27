import React, { useEffect, useState } from 'react';
import './housingGrid.css';
import HousingCard from "../housingCard/housingCard";

function HousingGrid() {
    const [apartments, setApartments] = useState([]);
    useEffect (fetchApartments, []);
    
    function fetchApartments(){
        fetch("../../../database.json")
            .then(res => res.json())
            .then((data) => setApartments(data))
            .catch(console.error);           
    }
    return <section className="container">
                {apartments.map((apartment) => (
                <HousingCard key={apartment.id} id={apartment.id} title={apartment.title} imageUrl={apartment.cover}/>
                ))}                
            </section>
}

export default HousingGrid;