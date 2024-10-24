import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Pet } from "./Pets";
import {PetsProps} from "./AvailableScreen";
import { PetDetail } from "../styles/Styles.modules";

const PetDetails: React.FC<PetsProps> = ({ apiEndpoint }) => {
    let { id } = useParams();
    let petId = parseInt(id as string);

    const [pet, setPet] = useState<Pet>();

    useEffect(() => {
        const fetchPets = async () => {
          try {
            const response = await axios.get(`${apiEndpoint}`);
            const result = response.data;
            setPet(result.filter((pet:any) => pet.id === petId)[0]);
          } catch (error) {
            console.error("Error fetching pets ", error);
          }
        };
        fetchPets();
      }, [apiEndpoint]);

    return (
        <>
        { pet ? (
            <PetDetail>
                <p>{pet.name}</p>
                <p>{pet.species}</p>
                <p>{pet.birthYear}</p>
                <p>{pet.species}</p>
            </PetDetail>
        ) : (
            <div>Not found</div>
        ) }
        </>
    )
}

export default PetDetails;