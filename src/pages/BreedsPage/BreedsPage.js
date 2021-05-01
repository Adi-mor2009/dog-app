import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BreedCard from '../../components/BreedCard/BreedCard';
import BreedModel from '../../model/BreedModel';
import Filter from '../../components/Filter/Filter';
import './BreedsPage.css';


function BreedsPage() {
    const [breeds, setBreeds] = useState([new BreedModel(-1, "All", "")]);
    const [breedSelected, setBreedSelected] = useState(-1);
    const BreedCards = breedSelected != -1 ? 
                    (breeds.filter((breed) => breedSelected == breed.id).map((breed) => <BreedCard key={(breed.id).toString()} breed={breed}></BreedCard>)) :
                    breeds.map((breed) => breed.id != -1 ? <BreedCard key={(breed.id).toString()} breed={breed}></BreedCard> : <></>);


    useEffect(() => {
        const getURL = "https://dog.ceo/api/breeds/list/all";
        axios.get(getURL).then(response => {
            const allBreeds = Object.keys(response.data.message);
            allBreeds.forEach ((breed, index) => {
                const getBreedURL = "https://dog.ceo/api/breed/" + breed + "/images/random";
                axios.get(getBreedURL).then(response2 => {
                    let img = response2.data.message;
                    setBreeds(breeds => [...breeds, new BreedModel(index, breed, img)]);
                });
            })
        });
    }, []);

    function handleBreedSelect(breedId) {
        console.log(breedId);
        setBreedSelected(breedId);
    }

    return (
        <div className="p-breeds">
            <Container>
                <Filter breeds={breeds} activeBreed={breeds[0]} handleBreedSelect={handleBreedSelect}></Filter>
                Dog Book
                <div id="main_cards">
                    {BreedCards}
                </div>
            </Container>
        </div>
    )
}

export default BreedsPage;