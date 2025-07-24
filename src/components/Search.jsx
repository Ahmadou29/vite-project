import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./recherche.css"; 

const Search = () => {
  return (
    <div className="container search-container py-4">
      {/* Barre de recherche */}
      <div className="search-box position-relative">
        <i className="bi bi-search  translate-middle-y ms-2 text-secondary"></i>
        <input
          type="text"
          className="form-control ps-5"
          placeholder="search items"
          autoFocus
        />
        <i className="bi bi-x text-dark   translate-middle-y me-2"></i>
        <p className="text-secondary mt-2">popular search items</p>
      </div>

      {/* Mots-clés */}
      <div className="keywords border-0 mt-4  gap-2">
        {["Trend", "Dress", "Bag", "Tshirt", "Beauty", "Accessoires"].map(
          (keyword) => (
            <button key={keyword} className="btn btn-light text-dark">
              {keyword}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Search;
