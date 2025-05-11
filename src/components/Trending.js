import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/tmdb';
import MovieCard from './MovieCard';
import { Grid, Typography } from '@mui/material';

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>Trending Movies</Typography>
      <Grid container spacing={2} justifyContent="center">
        {movies.map(movie => (
          <Grid item key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Trending;