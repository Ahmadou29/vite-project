import React from 'react'

function Card(img, imgIndex, folder, toggleFavorite) {
  return (
    <div className="card h-100 shadow-sm text-center">
                <img
                  src={img}
                  alt={`Produit ${imgIndex}`}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Lame{imgIndex}</h5>
                  <p className="card-text">
                    Reversible angora cardigan {imgIndex} dans la catégorie{" "}
                    {folder.replace("-gallery", "")}.
                  </p>
                  <p className="fw-bold text-success mb-2">
                    Prix : {(20 + imgIndex).toFixed(2)} €
                  </p>
                  <button
                    className="btn btn-outline-danger w-100"
                    onClick={() => toggleFavorite(imgIndex)}
                  >
                    <i className="bi bi-heart"></i> Ajouter aux favoris
                  </button>
                </div>
              </div>
  )
}

export default Card