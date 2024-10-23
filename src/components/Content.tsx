import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Search from "./Search";
import { ContentItem } from "../styles/Styles.modules";
import TypeDropdown, { types } from "./TypeDropdown";
import CategoryDropdown, { options } from "./CategoryDropdown";
import Pets from "./Pets";


const Content = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set(''));
  const [latest, setLatest] = useState<boolean>(false);
 
  const handleSearch = (query: string) => {
    setQuery(query);
  };
  
  const handleTypeSearch = (types: Set<string>) => {
    setSelectedTypes(types);
  };
  
  const latestAdded = () => {
   setLatest(true)
  };


  return (
    <ContentItem>
      <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
        Pets
      </Typography>

      <Search onSearch={handleSearch} />

      <div className="container">
        <TypeDropdown types= {types} onTypeSearch={handleTypeSearch} />
        <CategoryDropdown options={options} />
        <button onClick={latestAdded}>Latest added</button>
      </div>

      <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
        Results
      </Typography>
      <Pets apiEndpoint="https://660579c92ca9478ea1806a31.mockapi.io/api/v1/pets" serachQuery={query} selectedTypes={selectedTypes} latestAdded={latest}/>
    </ContentItem>
  );
};

export default Content;
