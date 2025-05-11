import React, { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../api/tmdb';
import Trending from '../components/Trending';

const Home = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const data = await searchMovies(query);
    setResults(data);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar onSearch={handleSearch} />
      {results.length > 0 ? (
        <>
          <Typography variant="h5" gutterBottom mt={4}>Search Results</Typography>
          <Grid container spacing={2} justifyContent="center">
            {results.map(movie => (
              <Grid item key={movie.id}><MovieCard movie={movie} /></Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Trending />
      )}
    </Container>
  );
};

export default Home;
