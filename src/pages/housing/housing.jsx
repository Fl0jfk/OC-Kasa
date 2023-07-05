import Banner from '../../components/banner/banner';
import { useParams } from 'react-router-dom';
import database from '../../database.json';
import ScrollingMenu from '../../components/scrollingMenu/scrollingMenu';
import ErrorPage from '../errorPage/errorPage';
import HousingHeading from '../../components/housingHeading/housingHeading';
import './housing.scss';

function HousingPage (){
    
    const { id } = useParams();
    const housingPageActive = database.find((database) => database.id === id )

    if (!housingPageActive) {
        return <ErrorPage/>;
    }
    return (
        <section> 
            <Banner json={housingPageActive.pictures}/>
            <HousingHeading title={housingPageActive.title} location={housingPageActive.location} tags={housingPageActive.tags.map((tag, id) => (
                    <li key={id}>{tag}</li>
                ))} authorName={housingPageActive.host} stars={housingPageActive.rating}/>
            <div className='housing'>
                <ScrollingMenu title="Description" content={housingPageActive.description}/>
                <ScrollingMenu title="Équipements" content={housingPageActive.equipments.map((equipment, id) => (
                    <li key={id}>{equipment}</li>
                ))}/> 
            </div>        
        </section>
       )
}

export default HousingPage
