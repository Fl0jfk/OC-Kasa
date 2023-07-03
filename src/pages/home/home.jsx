import React from 'react';
import Banner from '../../components/banner/banner';
import HousingGrid from '../../components/housingGrid/housingGrid';

function Home (){
    return (
        <div>
           <Banner local="homePage"/>
           <HousingGrid/>
        </div>
    )
}

export default Home