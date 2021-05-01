import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router";

export default function BreedPage() {

    const { breed } = useParams();
    const [imgList, setImgList] = useState();

    const cardTitle=breed.charAt(0).toUpperCase() + breed.slice(1);
    const images = imgList ? imgList.map(img => <Image src={img} fluid />) : [];
    
    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed + "/images").then(res => {
            const imgs = res.data.message;
            setImgList(imgs);
        });

    },[breed]);



    return (
        imgList ? <div className="p-breed">
                    <div className="display-3 headline">{cardTitle}</div>
                    <Container>
                        { images }
                    </Container>                        
                  </div> 
                : 
                  <div></div>
    );
}