import React, { useEffect, useState } from 'react';
import './housingGrid.css';
import ApartmentCard from "../housingCard/housingCard";
import axios from 'axios';

function Annonce (){
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        axios
        .get("database.json")
        .then((res) => setApartments(res.data))
        .catch(err=>console.log(err))
    }, []);
    return (
     <section className="grid">
    {apartments.map((apartment) => (
    <ApartmentCard key={apartment.id} id={apartment.id} title={apartment.title} imageUrl={apartment.cover}/>
    ))}                
</section>
    )
}

export default Annonce;
