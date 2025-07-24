import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import accessImage from '../assets/image/kids-accessories-gallery/access1.jpg';

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 120;
  const productName = "Recycle Boucle Knit Cardigan Pink";

  const updateLocalStorage = (qty) => {
    localStorage.setItem("quantity", qty);
    localStorage.setItem("total", qty * pricePerItem);
    localStorage.setItem("product", productName);
  };

  const increment = () => {
    if (quantity < 100) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      updateLocalStorage(newQty);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      updateLocalStorage(newQty);
    }
  };

  useEffect(() => {
    updateLocalStorage(quantity);
  }, []);

  return (
    <div className="checkout-container detail">
      <h3 className="text-center">CHECKOUT</h3>

      <div className="product-info">
        <img src={accessImage} alt="Produit" className="product-img" />
        <div>
          <h6 className="lameri">LAMEREI</h6>
          <small>{productName}</small>
          <div className="qty-controls">
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
          </div>
          <div className="price">${pricePerItem}</div>
        </div>
      </div>

      <hr />

      <div className="promo">Add promo code</div>

      <div className="delivery">
        <span>Delivery</span>
        <span>Free</span>
      </div>

      <hr />

      <div className="total">
        <span>EST. TOTAL</span>
        <span className='total-price'>${quantity * pricePerItem}</span>
      </div>

      <div className="bouton">
        <Link to="/detail2">
          <button className="checkout-btn">CHECKOUT</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
