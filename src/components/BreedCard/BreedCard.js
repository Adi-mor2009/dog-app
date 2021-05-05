import { useState } from "react";
import { Card } from "react-bootstrap";
import { Redirect, useHistory } from "react-router";
import './BreedCard.css';

function BreedCard({breed}){
    const [redirectTo, setRedirectTo] = useState("");
    const history = useHistory();
    if (redirectTo) {
        return <Redirect to={'/breeds/' + redirectTo}/>
    } else {
        return(
            <div className="c-breed">
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={breed.img} onClick={() => {
                        history.push('/breeds/' + breed.name);
                        setRedirectTo('/breeds/' + breed.name);
                    }}/>
                    <Card.Body>
                        <Card.Title>{breed.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default BreedCard;