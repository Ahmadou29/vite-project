// src/components/FavoritesModal.jsx
import React from 'react';
import { useFavorites } from './FavoritesContext';

const FavoritesModal = ({ show, onClose }) => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Mes Favoris</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {favorites.length === 0 ? (
              <p>Aucun produit dans vos favoris.</p>
            ) : (
              <div className="row">
                {favorites.map((item) => (
                  <div key={item.id} className="col-md-4 mb-4">
                    <div className="card h-100 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-img-top"
                        style={{ height: '250px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="fw-bold text-success">{item.price} €</p>
                        <button
                          className="btn btn-danger"
                          onClick={() => toggleFavorite(item)}
                        >
                          Retirer des favoris
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
