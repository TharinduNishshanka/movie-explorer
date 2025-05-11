import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [darkMode, setDarkMode] = useState(false);
  const [lastSearch, setLastSearch] = useState(localStorage.getItem('lastSearch') || '');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const addToFavorites = (movie) => {
    const updated = [...favorites, movie];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const removeFromFavorites = (id) => {
    const updated = favorites.filter(m => m.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const updateLastSearch = (query) => {
    setLastSearch(query);
    localStorage.setItem('lastSearch', query);
  };

  return (
    <MovieContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, darkMode, toggleDarkMode, lastSearch, updateLastSearch }}>
      {children}
    </MovieContext.Provider>
  );
};
