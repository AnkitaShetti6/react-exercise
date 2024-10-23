import React, { useState } from "react";
import {
  DropDowComponent,
  DropDowComponentItem,
} from "../styles/Styles.modules";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
}

export const options = [
  { label: "Small pets", value: "option1" },
  { label: "Medium pets", value: "option2" },
  { label: "Big pets", value: "option3" },
  { label: "From small home", value: "option4" },
  { label: "From big home", value: "option5" },
  { label: "Older", value: "option6" },
];

const CategoryDropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(
    new Set()
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(value)) {
        newSelection.delete(value);
      } else {
        newSelection.add(value);
      }
      return newSelection;
    });
  };

  return (
    <DropDowComponent>
      <button onClick={toggleDropdown}>
        Category
        <img
          style={{
            color:"grey",
            paddingTop: "2px",
            marginLeft: "2px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
          src="./icons/down.svg"
          alt="img"
        />
      </button>

      {isOpen && (
        <DropDowComponentItem>
          {options.map((option) => (
            <label key={option.value}>
              <input
                type="checkbox"
                checked={selectedOptions.has(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
              {option.label}
            </label>
          ))}
        </DropDowComponentItem>
      )}
    </DropDowComponent>
  );
};

export default CategoryDropdown;
