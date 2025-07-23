import React, { useState } from 'react';
import { db } from './firebase'; 
import { collection, addDoc } from "firebase/firestore";

export default function AjouterProduit() {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "produits"), {
        nom,
        prix: Number(prix),
        createdAt: new Date()
      });
      alert("Produit ajouté avec succès !");
      setNom('');
      setPrix('');
    } catch (error) {
      alert("Erreur lors de l'ajout : " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
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
      <button type="submit">Ajouter</button>
    </form>
  );
}
