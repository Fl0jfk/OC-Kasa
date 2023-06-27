import { Link } from "react-router-dom";

function HousingCard (props){
    return (
        <Link to={`/housing/${props.id}`}state={{housingId: props.id}}>
            <div>                
                <img src={props.imageUrl} alt={props.title} />               
                <p>{props.title}</p> 
            </div>
        </Link>
    )
}

export default HousingCard;