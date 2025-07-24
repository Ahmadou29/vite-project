import React from 'react';
import { useCart } from './CartContext';
import { Link} from 'react-router-dom';


const CartModal = ({ show, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  //  Calcul du prix total
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Mon Panier</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <p>Votre panier est vide.</p>
            ) : (
              <ul className="list-group">
                {cartItems.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{item.name}</strong><br />
                      <span>  ${item.price} </span>
                    </div>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Supprimer
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="modal-footer d-flex justify-content-between w-100">
            <strong className="me-auto">Total : $ {totalPrice.toFixed(2)}  </strong>
            <div>
              <button className="btn btn-secondary me-2" onClick={onClose}>Fermer</button>
              <Link  to="/detail2"  className="btn btn-primary" disabled={cartItems.length === 0}>
                Commander
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
