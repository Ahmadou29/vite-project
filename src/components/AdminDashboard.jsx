

// export default function AdminDashboard() {
//   return (
//     <div>
//       <h1>Panneau Admin</h1>
//       <p>Bienvenue dans l’espace de gestion.</p>
//     </div>
//   );
// }

// je le commente
// import { useEffect, useState } from "react";
// import { auth } from "./firebase";
// import { onAuthStateChanged } from "firebase/auth";

// export default function AdminDashboard() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (u) => {
//       setUser(u);
//     });
//     return () => unsub();
//   }, []);

//   return (
//     <div className="bg-dark">
//       gjjjj
//     </div>
//   );
// }

// src/components/AdminDashboard.jsx
// commentaire
// import React from 'react';

// export default function AdminDashboard() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Bienvenue sur le tableau de bord Admin</h2>
      
//       <div style={{ marginTop: '2rem' }}>
//         {/* Tu pourras remplacer ces boutons par des composants plus complets */}
//         <button style={{ marginRight: '1rem' }}>Ajouter un produit</button>
//         <button style={{ marginRight: '1rem' }}>Modifier un produit</button>
//         <button>Supprimer un produit</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import AjouterProduit from './AjouterProduit';
import ModifierProduit from './ModifierProduit';
import SupprimerProduit from './SupprimerProduit';

export default function AdminDashboard() {
  const [action, setAction] = useState(null);

  const renderForm = () => {
    switch (action) {
      case 'ajouter':
        return <AjouterProduit />;
      case 'modifier':
        return <ModifierProduit />;
      case 'supprimer':
        return <SupprimerProduit />;
      default:
        return <p>Choisis une action pour commencer.</p>;
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Bienvenue sur le tableau de bord Admin</h2>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => setAction('ajouter')} style={{ marginRight: '1rem' }}>
          Ajouter un produit
        </button>
        <button onClick={() => setAction('modifier')} style={{ marginRight: '1rem' }}>
          Modifier un produit
        </button>
        <button onClick={() => setAction('supprimer')}>
          Supprimer un produit
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {renderForm()}
      </div>
    </div>
  );
}
