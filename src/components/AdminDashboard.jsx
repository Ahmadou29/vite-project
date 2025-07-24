import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import AjouterProduit from './AjouterProduit';
import ModifierProduit from './ModifierProduit';
import SupprimerProduit from './SupprimerProduit';

export default function AdminDashboard() {
  const [action, setAction] = useState(null);
  const [produits, setProduits] = useState([]);
  const [showProduits, setShowProduits] = useState(false);

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

  const handleToggleProduits = async () => {
    if (!showProduits && produits.length === 0) {
      try {
        const querySnapshot = await getDocs(collection(db, 'produits'));
        const produitsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProduits(produitsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    }
    setShowProduits(!showProduits); // toggle l'affichage
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '2rem auto',
      border: '2px solid #aaa',
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h2>Bienvenue sur le tableau de bord Admin</h2>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => setAction('ajouter')} style={{ marginRight: '1rem', backgroundColor: 'green', color: '#fff' }}>
          Ajouter un produit
        </button>
        <button onClick={() => setAction('modifier')} style={{ marginRight: '1rem', backgroundColor: 'blue', color: '#fff' }}>
          Modifier un produit
        </button>
        <button onClick={() => setAction('supprimer')} style={{ marginRight: '1rem', backgroundColor: 'red', color: '#fff' }}>
          Supprimer un produit
        </button>
      </div>

      <div style={{
        marginTop: '2rem',
        border: '1px solid #ccc',
        padding: '1.5rem',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
      }}>
        {renderForm()}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button
          onClick={handleToggleProduits}
          style={{ backgroundColor: 'green', color: '#fff', padding: '0.7rem 1.5rem', borderRadius: '5px' }}
        >
          {showProduits ? 'Masquer les produits' : 'Afficher les produits déjà ajoutés'}
        </button>
      </div>

      {showProduits && (
        <div style={{ marginTop: '2rem' }}>
          <h4>Liste des produits enregistrés :</h4>
          {produits.length > 0 ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#eee' }}>
                  <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
                  <th style={{ padding: '10px', border: '1px solid #ccc' }}>Nom</th>
                  <th style={{ padding: '10px', border: '1px solid #ccc' }}>Prix</th>
                  <th style={{ padding: '10px', border: '1px solid #ccc' }}>Image</th>
                </tr>
              </thead>
              <tbody>
                {produits.map((produit) => (
                  <tr key={produit.id}>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{produit.id}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{produit.nom}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{produit.prix}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                      {produit.produit ? (
                        <img
                          src={produit.produit}
                          alt={produit.nom}
                          style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
                        />
                      ) : (
                        <span style={{ color: '#888' }}>Pas d'image</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Aucun produit trouvé.</p>
          )}
        </div>
      )}
    </div>
  );
}