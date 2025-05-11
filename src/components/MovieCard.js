import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/movie/${movie.id}`)} sx={{ maxWidth: 200, cursor: 'pointer' }}>
      <CardMedia component="img" height="300" image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <CardContent>
        <Typography variant="subtitle1">{movie.title}</Typography>
        <Typography variant="body2">{movie.release_date?.slice(0, 4)} | ⭐{movie.vote_average}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
