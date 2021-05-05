import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import BreedCard from '../../components/BreedCard/BreedCard';
import BreedsModel from '../../model/BreedsModel';
import Filter from '../../components/Filter/Filter';
import './BreedsPage.css';


function BreedsPage() {
    const [breeds, setBreeds] = useState([new BreedsModel(-1, "All", "")]);
    const [breedSelected, setBreedSelected] = useState(-1);
    
    const BreedCards = breedSelected != -1 ?
        (breeds.filter((breed) => breedSelected == breed.id).map((breed) => <BreedCard key={(breed.id).toString()} breed={breed}></BreedCard>)) :
        breeds.map((breed) => breed.id != -1 ? <BreedCard key={(breed.id).toString()} breed={breed}></BreedCard> : <></>);


    useEffect(() => {
        const getURL = "https://dog.ceo/api/breeds/list/all";
        axios.get(getURL).then(response => {
            const allBreeds = Object.keys(response.data.message);
            allBreeds.forEach((breed, index) => {
                const getBreedURL = "https://dog.ceo/api/breed/" + breed + "/images/random";
                axios.get(getBreedURL).then(response2 => {
                    let img = response2.data.message;
                    setBreeds(breeds => [...breeds, new BreedsModel(index, breed, img)]);
                });
            })
        });
    }, []);

    function handleBreedSelect(breedId) {
        setBreedSelected(breedId);
    }

    return (
        <div className="p-breeds">
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home"><i class="fas fa-paw"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Filter breeds={breeds} activeBreed={breeds[0]} handleBreedSelect={handleBreedSelect}></Filter>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                {/* <Filter breeds={breeds} activeBreed={breeds[0]} handleBreedSelect={handleBreedSelect}></Filter> */}
                <div id="main_cards">
                    {BreedCards}
                </div>
            </Container>
        </div>
    )
}

export default BreedsPage;