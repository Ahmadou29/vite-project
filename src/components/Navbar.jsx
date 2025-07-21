import React from 'react'
import logo from "../assets/images/logo-removebg-preview (1).png";
// import logo from '../assets/images/src/assets/images/logo-removebg-preview (1).png'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div className="container  d-flex align-items-center ">
          <a className="navbar-brand" href="#">
            { <img src={logo} alt="" className="img-logo  order-md-1 order-2" /> }
        
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
            <span className="navbar-toggler-icon "></span>
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
                <Link className="nav-link fs-5" to="categorie/">Categorie</Link>
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
          <a className="nav-link fs-5" href="#">
            <i className="bi bi-cart"></i>
          </a>
        </div>
      </nav>
  )
}

export default Navbar