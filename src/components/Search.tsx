import React, { useState } from 'react';
import { SearchBar } from "../styles/Styles.modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface SearchProps {
    onSearch: (query: string) => void;
  }

  const Search: React.FC<SearchProps> = ({onSearch}) => {
    const [query, setQuery] = useState<string>('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    };
  
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          onSearch(query);
        }
      };
  
    return (
        <SearchBar>
        <button type="submit" className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>  
        <input
          type="text"
          value={query}
          onChange={handleChange}
         onKeyDown={handleKeyDown}
          placeholder="Search for pets"
        />
      </SearchBar>
    );
  };
  
  export default Search;
