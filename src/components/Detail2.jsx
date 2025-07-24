import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Detail2 = () => {
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
    const selected = e.target.value;
    setPaymentMethod(selected);
  };

  const placeOrder = () => {
    if (!produit || !quantite || !total) {
      alert("Commande incomplète !");
      return;
    }

    fetch("http://localhost:3000/valider-commande", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ produit, quantite, total })
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        localStorage.clear();
      })
      .catch(err => {
        console.error(err);
        alert("Erreur lors de l'envoi de la commande");
      });
  };

  return (
    <div className="checkout-container mt-5 pt-5 detail container">
      <h3 className="text-center">Checkout</h3>

      <div className="section-title">Shipping Address</div>
      <div className="mb-2">
        <strong>Iris Watson</strong><br />
        <small>
          606-3727 Ullamcorper Street<br />
          Roseville NH 11523<br />
          (786) 713-8616
        </small>
      </div>

      <div className="section-title mt-3">Shipping Method</div>
      <div className="mb-3">
        <select className="form-select">
          <option>Pickup at store</option>
          <option>Delivery</option>
          
        </select>
      </div>

      <div className="section-title">Payment Method</div>
      <div className="mb-3">
        <select className="form-select" onChange={handlePaymentChange}>
          <option value="">Select payment method</option>
          <option value="wave ou orange money">wave ou orange money</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      {paymentMethod === "wave ou orange money" && (
        <div className="mt-2">
          <a
            href="modepayement"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accéder au paiement Wave ou Orange Money
          </a>
        </div>
      )}

      <div className="section-title">Order Summary</div>
      <div className="mb-2">
        <div><strong>{produit || "Produit"}</strong></div>
        <small>Quantité : <span>{quantite || "1"}</span></small>
      </div>

      <div className="total-section mt-2">
        <span><strong>TOTAL</strong></span>
        <span className="total-amount">${total || "0"}</span>
      </div>

      <Link to="/success" className="btn btn-success mt-3">COMMANDER</Link>
    </div>
  );
};

export default Detail2;
