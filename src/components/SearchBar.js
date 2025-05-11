import React, { useContext, useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { MovieContext } from '../contexts/MovieContext';

const SearchBar = ({ onSearch }) => {
  const { updateLastSearch, lastSearch } = useContext(MovieContext);
  const [query, setQuery] = useState(lastSearch);

  const handleSearch = () => {
    updateLastSearch(query);
    onSearch(query);
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <TextField label="Search Movies" value={query} onChange={(e) => setQuery(e.target.value)} variant="outlined" />
      <Button variant="contained" onClick={handleSearch}>Search</Button>
    </Stack>
  );
};

export default SearchBar;
