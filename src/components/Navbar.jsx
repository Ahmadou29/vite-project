import React, { useState } from 'react';
import logo from "../assets/images/logo-removebg-preview (1).png";
import { Link } from 'react-router-dom';
import './Navbar.css';
import CartModal from './CartModal';
import { useCart } from './CartContext';

const Navbar = () => {
  
  const [showCartModal, setShowCartModal] = useState(false);
  const { cartCount } = useCart(); // Utilisation

  const openCartModal = () => setShowCartModal(true);
  const closeCartModal = () => setShowCartModal(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="img-logo order-md-1 order-2" />
          </a>
          <button
            className="navbar-toggler order-1 order-md-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 nav1">
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/categorie">Categorie</Link>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <a className="nav-link me-3 fs-5" href="#">
            Se connecter
          </a>

          {/* Icône panier avec badge */}
          <div className="position-relative">
            <button className="nav-link fs-5 btn p-0 border-0 bg-transparent" onClick={openCartModal}>
              <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
            </button>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Modal Panier */}
      <CartModal show={showCartModal} onClose={closeCartModal} />
    </>
  );
};

export default Navbar;
