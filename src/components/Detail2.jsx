import React, { useEffect, useState } from 'react';
import './Detail2.css'; // fichier CSS séparé

const Detail2 = () => {
  // état
  const [produit, setProduit] = useState('');
  const [quantite, setQuantite] = useState('');
  const [total, setTotal] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const savedProduit = localStorage.getItem("product");
    const savedQuantite = localStorage.getItem("quantity");
    const savedTotal = localStorage.getItem("total");

    if (savedProduit) setProduit(savedProduit);
    if (savedQuantite) setQuantite(savedQuantite);
    if (savedTotal) setTotal(savedTotal);
  }, []);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const placeOrder = () => {
    if (!produit || !quantite || !total) {
      alert("Commande incomplète !");
      return;
    }

    fetch("http://localhost:3000/valider-commande", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ produit, quantite, total })
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        localStorage.clear();
      })
      .catch(() => alert("Erreur lors de l'envoi de la commande"));
  };

  return (
    <div className="checkout-container detail">
      <h3>Checkout</h3>

      <div className="section-title">Adresse de livraison</div>
      <div className="info-box">
        <strong>Iris Watson</strong><br />
        <small>
         606‑3727 Ullamcorper Street<br />
         Roseville NH 11523<br />
         (786) 713‑8616
        </small>
      </div>

      <div className="section-title">Mode de livraison</div>
      <select className="form-select">
        <option>Pickup en magasin</option>
      </select>

      <div className="section-title">Mode de paiement</div>
      <select className="form-select" onChange={handlePaymentChange}>
        <option value="">Choisissez un mode de paiement</option>
        <option value="wave">Wave / Orange Money</option>
        <option value="paypal">PayPal</option>
      </select>
      {paymentMethod === "wave" && (
        <div className="payment-link">
          <a href="/modepayement" target="_blank" rel="noopener noreferrer">
            Payer avec Wave / Orange Money
          </a>
        </div>
      )}

      <div className="section-title">Récapitulatif de la commande</div>
      <div className="info-box">
        <div><strong>{produit || "Produit"}</strong></div>
        <small>Quantité : {quantite || "1"}</small>
      </div>

      <div className="total-section">
        <span><strong>TOTAL</strong></span>
        <span className="total-amount">${total || "0"}</span>
      </div>

      <button className="btn-commander" onClick={placeOrder}>
        COMMANDER
      </button>
    </div>
  );
};

export default Detail2;