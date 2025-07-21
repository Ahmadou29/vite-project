import React, { useState } from "react";
import img from "../assets/image/men-new-gallery/tof-1.jpg"; // Exemple d'import d'image

// https://fakestoreapi.com/products
// Nombre d'images pa
const galleryData = {
  "woman-new": 36,
  "woman-accessories": 36,
  "woman-shoes": 36,
  "men-new": 36,
  "men-accessories": 36,
  "men-shoes": 36,
  "kids-new": 36,
  "kids-accessories": 36,
  "kids-shoes": 36,
};


// Pour récupérer dossier + préfixe nom fichiers selon catégorie
function getFolderAndPrefix(id) {
  switch (id) {
    case "men-shoes":
      return { folder: "men-shoes-gallery", prefix: "men-shoes" };
    case "woman-shoes":
      return { folder: "woman-shoes-gallery", prefix: "chaussure" };
    case "kids-shoes":
      return { folder: "kids-shoes-gallery", prefix: "kidshoes" };
    case "men-new":
      return { folder: "men-new-gallery", prefix: "tof-" };
    case "men-accessories":
      return { folder: "men-accessories-gallery", prefix: "accc" };
    case "woman-new":
      return { folder: "woman-new-gallery", prefix: "femme" };
    case "woman-accessories":
      return { folder: "woman-accessories-gallery", prefix: "accessoir" };
    case "kids-new":
      return { folder: "kids-new-gallery", prefix: "kid" };
    case "kids-accessories":
      return { folder: "kids-accessories-gallery", prefix: "access" };
    default:
      return { folder: "", prefix: "" };
  }
}

function Categorie() {
  const [category, setCategory] = useState("woman");
  const [subCategory, setSubCategory] = useState("new");
  const [pages, setPages] = useState({});

  const imagesPerPage = 12;

  const key = `${category}-${subCategory}`;
  const totalImages = galleryData[key] || 0;
  const totalPages = Math.ceil(totalImages / imagesPerPage);
  const currentPage = pages[key] || 1;

  const { folder, prefix } = getFolderAndPrefix(key);
  const startIndex = (currentPage - 1) * imagesPerPage + 1;
  const endIndex = Math.min(startIndex + imagesPerPage - 1, totalImages);

  // Changement de page
  function changePage(newPage) {
    if (newPage < 1 || newPage > totalPages) return;
    setPages((prev) => ({ ...prev, [key]: newPage }));
  }

  // Changement catégorie principale
  function onCategoryChange(cat) {
    setCategory(cat);
    setSubCategory("new");
    setPages((prev) => ({ ...prev, [`${cat}-new`]: 1 }));
  }

  // Changement sous-catégorie
  function onSubCategoryChange(subCat) {
    setSubCategory(subCat);
    setPages((prev) => ({ ...prev, [`${category}-${subCat}`]: 1 }));
  }

  // Gestion favoris (simple alert)
  function toggleFavorite(index) {
    alert(`Produit #${index} de ${key} ajouté aux favoris !`);
  }

  return (
    <div className="container my-5">
      {/* Onglets catégories */}
      <ul className="nav nav-tabs justify-content-center mb-3">
        {["woman", "men", "kids"].map((cat) => (
          <li className="nav-item" key={cat}>
            <button
              className={`nav-link ${category === cat ? "active" : ""}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Sous-onglets */}
      <ul className="nav nav-pills justify-content-center mb-4">
        {["new", "accessories", "shoes"].map((sub) => (
          <li className="nav-item" key={sub}>
            <button
              className={`nav-link ${subCategory === sub ? "active" : ""}`}
              onClick={() => onSubCategoryChange(sub)}
            >
              {sub === "new"
                ? "New Apparel"
                : sub.charAt(0).toUpperCase() + sub.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Galerie images */}
      <div className="row">
        {Array.from({ length: endIndex - startIndex + 1 }, (_, i) => {
          const imgIndex = startIndex + i;
          // Exemple noms fichiers : prefix + numéro + .jpg
          const filename = prefix ? `${prefix}${imgIndex}.jpg` : `${imgIndex}.jpg`;
          // Le chemin d'accès (adapter selon où tu mets tes images dans public/)
          // const imgSrc = `image/${folder}/${filename}`;

          return (
            <div className="col-md-4 mb-4" key={imgIndex}>
              <div className="card h-100 shadow-sm text-center">
              {/* <img
  src={`/image/${folder}/${filename}`}
  alt={`Produit ${imgIndex}`}
  className="card-img-top"
  style={{ objectFit: "cover", height: "200px" }}
/> */}

                { <img
                  src={img}
                  alt={`Produit ${imgIndex}`}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                /> }
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
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => changePage(currentPage - 1)}
              aria-label="Page précédente"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
          </li>

          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <li
                key={pageNum}
                className={`page-item ${pageNum === currentPage ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => changePage(pageNum)}
                >
                  {pageNum}
                </button>
              </li>
            );
          })}

          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => changePage(currentPage + 1)}
              aria-label="Page suivante"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Categorie;