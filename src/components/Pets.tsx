import React, { useState, useEffect } from "react";
import axios from "axios";
import { PetComponent } from "../styles/Styles.modules";
import { useNavigate } from "react-router-dom";

export interface Pet {
  id: number;
  name: string;
  species: string;
  available: boolean;
  birthYear: number;
  dateAdded: string;
  photoUrl: string;
}

interface DataProps {
  apiEndpoint: string;
  serachQuery: string;
  selectedTypes: Set<string>;
  latestAdded: boolean;
}

const Pets: React.FC<DataProps> = ({
  apiEndpoint,
  serachQuery,
  selectedTypes,
  latestAdded,
}) => {
  const [showItems, setShowItems] = useState<Pet[]>([]);

  let filteredItems = showItems.filter((item) =>
    item.name.toLowerCase().includes(serachQuery.toLowerCase())
  );

  if (selectedTypes.size > 0) {
    filteredItems = showItems.filter((item) =>
      selectedTypes.has(item.species.toLowerCase())
    );
  }

  function getFormattedDate(dateString: string | number) {
    const date = new Date(dateString);
    return date;
  }

  const nav = useNavigate();

  const navigateToPet = (pet: Pet) => {
    nav(`/pet/${pet.id}`);
  };

  // if (latestAdded == true) {
  //   const sortedItems = showItems.sort(
  //     (a, b) =>
  //       getFormattedDate(a.dateAdded).getTime() - getFormattedDate(b.dateAdded).getTime()
  //   );
  //   filteredItems = sortedItems
  // }

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}`);
        const result = response.data;
        setShowItems(result);
      } catch (error) {
        console.error("Error fetching pets ", error);
      }
    };
    fetchPets();
  }, [apiEndpoint, serachQuery, selectedTypes, latestAdded]);
  return (
    <>
      <PetComponent>
        {filteredItems.map((item, index) => {
          return (
            <div key={item.id}>
              <div className="pet">
                <div className="petImage">
                  <img
                    src={item.photoUrl}
                    alt="img"
                    style={{
                      width: 350,
                      height: 350,
                      color: "#F8CF47",
                      borderRadius: 10,
                    }}
                  />
                </div>
                <div className="petInfo">
                  <h4>{item.name}</h4>
                </div>
                <button onClick={() => navigateToPet(item)}>View</button>
              </div>
            </div>
          );
        })}
      </PetComponent>
    </>
  );
};

export default Pets;
