// src/components/ModifierProduit.jsx
// import React, { useState } from 'react';

// export default function ModifierProduit() {
//   const [id, setId] = useState('');
//   const [nouveauNom, setNouveauNom] = useState('');
//   const [nouveauPrix, setNouveauPrix] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Produit modifié :', { id, nouveauNom, nouveauPrix });
//     // Ajoute ici la logique pour modifier le produit
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
//       <input
//         type="text"
//         placeholder="ID du produit"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Nouveau nom"
//         value={nouveauNom}
//         onChange={(e) => setNouveauNom(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Nouveau prix"
//         value={nouveauPrix}
//         onChange={(e) => setNouveauPrix(e.target.value)}
//       />
//       <button type="submit">Modifier</button>
//     </form>
//   );
// }

// import React, { useState } from 'react';
// import { doc, updateDoc } from 'firebase/firestore';
// import { db } from './firebase';

// export default function ModifierProduit() {
//   const [id, setId] = useState('');
//   const [nouveauNom, setNouveauNom] = useState('');
//   const [nouveauPrix, setNouveauPrix] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!id) {
//       alert("Veuillez saisir l'ID du produit à modifier");
//       return;
//     }

//     try {
//       const produitRef = doc(db, 'produits', id);

//       // Prépare un objet avec seulement les champs modifiés
//       const updates = {};
//       if (nouveauNom) updates.nom = nouveauNom;
//       if (nouveauPrix) updates.prix = Number(nouveauPrix);

//       await updateDoc(produitRef, updates);

//       alert('Produit modifié avec succès !');

//       setId('');
//       setNouveauNom('');
//       setNouveauPrix('');
//     } catch (error) {
//       alert("Erreur lors de la modification : " + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
//       <input
//         type="text"
//         placeholder="ID du produit"
//         value={id}
//         onChange={e => setId(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Nouveau nom"
//         value={nouveauNom}
//         onChange={e => setNouveauNom(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Nouveau prix"
//         value={nouveauPrix}
//         onChange={e => setNouveauPrix(e.target.value)}
//       />
//       <button type="submit">Modifier</button>
//     </form>
//   );
// }



import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

export default function ModifierProduit() {
  const [id, setId] = useState('');
  const [nouveauNom, setNouveauNom] = useState('');
  const [nouveauPrix, setNouveauPrix] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Veuillez saisir l'ID du produit à modifier");
      return;
    }

    try {
      const produitRef = doc(db, 'produits', id);
      const updates = {};
      if (nouveauNom) updates.nom = nouveauNom;
      if (nouveauPrix) updates.prix = Number(nouveauPrix);

      await updateDoc(produitRef, updates);

      alert('Produit modifié avec succès !');

      setId('');
      setNouveauNom('');
      setNouveauPrix('');
    } catch (error) {
      alert("Erreur lors de la modification : " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      <input
        type="text"
        placeholder="ID du produit"
        value={id}
        onChange={e => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nouveau nom"
        value={nouveauNom}
        onChange={e => setNouveauNom(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nouveau prix"
        value={nouveauPrix}
        onChange={e => setNouveauPrix(e.target.value)}
      />
      <button
        type="submit"
        style={{
          backgroundColor: 'blue',
          color: '#fff',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Modifier
      </button>
    </form>
  );
}
