import { Card } from "react-bootstrap";
import './BreedCard.css';

function BreedCard({breed}){
    return(
        <div className="c-breed">
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={breed.img} />
                <Card.Body>
                    <Card.Title>{breed.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BreedCard;