import { Link } from "react-router-dom";
import './housingCard.scss'

function HousingCard(props){    
    return (
        <Link to={`/housing/${props.id}`}>
            <div className="housingCard">                
                <img className="imgHousing" src={props.imageUrl} alt={props.title} />               
                <p className="subtitleHousing">{props.title}</p> 
            </div>
        </Link>
    );
}

export default HousingCard;