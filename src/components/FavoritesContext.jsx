// src/components/FavoritesContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Créer le contexte
const FavoritesContext = createContext();

// Hook personnalisé
export const useFavorites = () => useContext(FavoritesContext);

// Provider du contexte
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    // Charger depuis le localStorage (optionnel)
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Sauvegarder dans le localStorage à chaque changement
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find(fav => fav.id === item.id);
      if (exists) {
        return prev.filter(fav => fav.id !== item.id); // Supprimer
      } else {
        return [...prev, item]; // Ajouter
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
