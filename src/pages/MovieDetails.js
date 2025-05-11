import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';
import { Container, Typography, Button } from '@mui/material';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { addToFavorites } = useContext(MovieContext);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <Typography>Loading...</Typography>;

  const trailer = movie.videos.results.find(v => v.type === 'Trailer');

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{movie.title}</Typography>
      <Typography variant="body1" gutterBottom>{movie.overview}</Typography>
      <Typography variant="body2">Genres: {movie.genres.map(g => g.name).join(', ')}</Typography>
      {trailer && (
        <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${trailer.key}`} title="Trailer" allowFullScreen></iframe>
      )}
      <Button variant="contained" onClick={() => addToFavorites(movie)}>Add to Favorites</Button>
    </Container>
  );
};

export default MovieDetails;