/** @format */
import React, { useState } from 'react';
import { galleries } from '../utils/galleryImports';
import { BsCart } from 'react-icons/bs';
import { LuHeart, LuHeartOff } from 'react-icons/lu';
import './Categorie.css';
import { useCart } from './CartContext';
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const imagesPerPage = 12;

const Categorie = () => {
  const [category, setCategory] = useState('woman');
  const [subCategory, setSubCategory] = useState('new');
  const [pages, setPages] = useState({});
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState({}); // ← un objet pour gérer les favoris par produit

  const navigate = useNavigate();

  const key = `${category}-${subCategory}`;
  const images = galleries[key] || [];
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const currentPage = pages[key] || 1;

  const start = (currentPage - 1) * imagesPerPage;
  const displayed = images.slice(start, start + imagesPerPage);

  const handleAddToCart = (index) => {
    const product = {
      id: index,
      name: `Produit ${index}`,
      price: (20 + index).toFixed(2),
    };
    addToCart(product);
  };

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const changePage = (n) => {
    if (n >= 1 && n <= totalPages) {
      setPages((prev) => ({ ...prev, [key]: n }));
    }
  };

  const onCategoryChange = (cat) => {
    setCategory(cat);
    setSubCategory('new');
    setPages((prev) => ({ ...prev, [`${cat}-new`]: 1 }));
  };

  const onSubCategoryChange = (sub) => {
    setSubCategory(sub);
    setPages((prev) => ({ ...prev, [key]: 1 }));
  };

  return (
    <div className="container my-5 nav2">
      {/* Catégories */}
      <ul className="nav nav-tabs justify-content-center mb-3">
        {['woman', 'men', 'kids'].map((cat) => (
          <li className="nav-item" key={cat}>
            <button
              className={`nav-link ${category === cat ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat[0].toUpperCase() + cat.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Sous-catégories */}
      <ul className="nav nav-pills justify-content-center mb-4">
        {['new', 'accessories', 'shoes'].map((sub) => (
          <li className="nav-item" key={sub}>
            <button
              className={`nav-link ${subCategory === sub ? 'active' : ''}`}
              onClick={() => onSubCategoryChange(sub)}
            >
              {sub === 'new' ? 'New Apparel' : sub[0].toUpperCase() + sub.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Galerie */}
      <div className="row">
        {displayed.map((src, idx) => {
          const imageIndex = start + idx + 1;
          const isFav = favorites[imageIndex];

          return (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm text-center">
                <img
                  src={src.default || src}
                  alt={`Produit ${imageIndex}`}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '400px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Product {imageIndex}</h5>
                  <p className="fw-bold text-success mb-2">
                    Price: {(20 + imageIndex).toFixed(2)} $
                  </p>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-outline-danger me-1"
                      onClick={() => handleAddToCart(imageIndex)}
                      style={{ fontSize: '13px' }}
                    >
                      <BsCart /> Cart
                    </button>

                    <button
                      onClick={() => toggleFavorite(imageIndex)}
                      className={`btn ${isFav ? 'btn-danger' : 'btn-outline-danger'}`}
                      style={{ fontSize: '13px' }}
                    >
                      {isFav ? <LuHeart /> : <LuHeartOff />} Favs
                    </button>
                    <button
                      className="btn btn-outline-danger ms-1"
                      style={{ fontSize: '13px' }}
                      onClick={() =>
                        navigate(`/detail/${category}/${subCategory}/${imageIndex}`)
                      }
                    >
                      <IoEyeOutline /> Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
            <button
              className="page-link"
              onClick={() => changePage(currentPage - 1)}
            >
              «
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i + 1}
              className={`page-item ${currentPage === i + 1 && 'active'}`}
            >
              <button className="page-link" onClick={() => changePage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
            <button
              className="page-link"
              onClick={() => changePage(currentPage + 1)}
            >
              »
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Categorie;
