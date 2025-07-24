import React, { useState } from 'react';
import { db } from './firebase'; 
import { collection, addDoc } from "firebase/firestore";

export default function AjouterProduit() {
  const [produit, setProduit] = useState('');
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "produits"), {
        produit,
        nom,
        prix: Number(prix),
        createdAt: new Date()
      });
      alert("Produit ajouté avec succès !");
      setProduit('');
      setNom('');
      setPrix('');
    } catch (error) {
      alert("Erreur lors de l'ajout : " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}
    >
      <input
        type="text"
        placeholder="URL de la photo"
        value={produit}
        onChange={(e) => setProduit(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nom du produit"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Prix"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        required
      />
      <button
        type="submit"
        style={{
          backgroundColor: 'green',
          color: '#fff',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Ajouter
      </button>
    </form>
  );
}