import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BreedCard from '../../components/BreedCard/BreedCard';
import BreedModel from '../../model/BreedModel';
import './BreedsPage.css';


function BreedsPage() {
    const [breeds, setBreeds] = useState([]);
    const BreedCards = breeds !== undefined ? breeds.map((breed) => <BreedCard breed={breed}></BreedCard>) : [];


    useEffect(() => {
        const getURL = "https://dog.ceo/api/breeds/list/all";
        axios.get(getURL).then(response => {
            const allBreeds = Object.keys(response.data.message);
            allBreeds.forEach ((breed, index) => {
                const getBreedURL = "https://dog.ceo/api/breed/" + breed + "/images/random";
                axios.get(getBreedURL).then(response2 => {
                    console.log(response2.data);
                    let img = response2.data.message;
                    setBreeds(breeds => [...breeds, new BreedModel(index, breed, img)]);
                });
            })
        });
    }, []);

    return (
        <div className="p-breeds">
            <Container>
                Dog Book
                <div id="main_cards">
                    {BreedCards}
                </div>
            </Container>
        </div>
    )
}

export default BreedsPage;