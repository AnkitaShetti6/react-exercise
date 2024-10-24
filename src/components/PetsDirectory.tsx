import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PetsDirectoryComponent } from "../styles/Styles.modules";
import { useNavigate } from "react-router-dom";

interface PetsDirectoryProps {
  imageSrc: string;
  title: string;
  description: string;
}

const PetsDirectory: React.FC<PetsDirectoryProps> = ({
  imageSrc,
  title,
  description,
}) => {
  const navigate = useNavigate();
  const showPets = () => {
    navigate("/available-screen/available");
  };

  return (
    <PetsDirectoryComponent>
      <img src={imageSrc} alt="Descriptive" className="image" />
      <div className="directory">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <button onClick={showPets}>See all</button>
      </div>
    </PetsDirectoryComponent>
  );
};

export default PetsDirectory;
