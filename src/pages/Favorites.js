import React, { useContext } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { MovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Favorites</Typography>
      <Grid container spacing={2} justifyContent="center">
        {favorites.map(movie => (
          <Grid item key={movie.id}><MovieCard movie={movie} /></Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Favorites;