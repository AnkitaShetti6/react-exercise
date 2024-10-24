import React, { useState, useEffect } from "react";
import { AvailablePets } from "../styles/Styles.modules";
import { Pet } from "./Pets";
import axios from "axios";
import { useParams } from "react-router-dom";

const showDetails = () => {
  console.log("Details clicked");
};

export interface PetsProps {
  apiEndpoint: string;
}

const AvailableScreen: React.FC<PetsProps> = ({ apiEndpoint }) => {
  const { option } = useParams<{ option: string }>();
  let available: boolean;
  if (option == "available") {
    available = true;
  }
  const [showItems, setShowItems] = useState<Pet[]>([]);
  let filteredItems = showItems.filter((item) => item.available == available);
  const displayItems = filteredItems.length == 0 ? showItems : filteredItems;
  useEffect(() => {
    const fetchAvailablePets = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}`);
        const result = response.data;
        setShowItems(result);
      } catch (error) {
        console.error("Error fetching pets ", error);
      }
    };
    fetchAvailablePets();
  }, [apiEndpoint]);
  return (
    <AvailablePets>
      {displayItems.map((items, index) => {
        return (
          <div key={items.id}>
            <div className="pet">
              <div className="petImage">
                <img
                  src={items.photoUrl}
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
                <h4>{items.name}</h4>
              </div>
              <button onClick={showDetails}>View</button>
            </div>
          </div>
        );
      })}
    </AvailablePets>
  );
};

export default AvailableScreen;
