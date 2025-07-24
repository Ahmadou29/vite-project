import React, { useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

export default function SupprimerProduit() {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Veuillez saisir l'ID du produit à supprimer");
      return;
    }

    try {
      await deleteDoc(doc(db, 'produits', id));
      alert('Produit supprimé avec succès !');
      setId('');
    } catch (error) {
      alert("Erreur lors de la suppression : " + error.message);
    }
  };

  return (
    <form onSubmit={handleDelete} style={{ marginTop: '1rem' }}>
      <input
        type="text"
        placeholder="ID du produit à supprimer"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <button type="submit" style={{ backgroundColor: 'red', color: 'white' }}>
        Supprimer
      </button>
    </form>
  );
}