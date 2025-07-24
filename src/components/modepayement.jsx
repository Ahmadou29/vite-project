// src/components/Paiement.jsx
import React from 'react';

const Paiement = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Page Mode de Paiement</h2>
      <button
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: '#1A77F2',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '15px'
        }}
        onClick={() => window.open('https://paydunya.com/demo-wave', '_blank')}
      >
        Payer avec Wave
      </button>

      <button
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: '#F26522',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => window.open('https://paydunya.com/demo-orange', '_blank')}
      >
        Payer avec Orange Money
      </button>
    </div>
  );
};

export default Paiement;
