import React from "react";
import { CategoryComponent } from "../styles/Styles.modules";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  { title: "All pets", value: "all", image: "./icons/heart.svg" },
  { title: "Location speific", value: "location", image: "./icons/pin.svg" },
  { title: "Age specific", value: "age", image: "./icons/clock.svg" },
  {
    title: "Available now",
    value: "available",
    image: "./icons/confettie.svg",
  },
  {
    title: "For small or big homes",
    value: "smallOrBig",
    image: "./icons/home.svg",
  },
];
const Categories = () => {
  const navigate = useNavigate();

  return (
    <CategoryComponent>
      {categories.map((item, index) => {
        const showPets = () => {
          navigate(`/available-screen/${item.value}`);
        };
        return (
          <div className="category">
            <div className="imageContainer">
              <img
                className="image"
                onClick={showPets}
                src={item.image}
                alt="img"
              />
            </div>
            <div className="title">
              <Typography>{item.title}</Typography>
            </div>
          </div>
        );
      })}
    </CategoryComponent>
  );
};

export default Categories;
