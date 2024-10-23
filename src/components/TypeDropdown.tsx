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
  types: Option[];
  onTypeSearch: (options: Set<string>) => void;
}

export const types = [
  { label: "Dogs", value: "dog" },
  { label: "Cats", value: "cat" },
  { label: "Exotic", value: "exotic" },
];

const TypeDropdown: React.FC<DropdownProps> = ({ types,onTypeSearch }) => {
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
      onTypeSearch(newSelection)
      return newSelection;
    });
  };

  return (
    <DropDowComponent>
      <button onClick={toggleDropdown}>
        Type
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
          {types.map((option) => (
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

export default TypeDropdown;
