// /** @format */

// // import React from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { galleries } from '../utils/galleryImports';

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const imageIndex = parseInt(id, 10);

// //   const allImages = Object.values(galleries).flat();
// //   const productImage = allImages[imageIndex - 1];

// //   if (!productImage) {
// //     return <div className="container mt-5">Produit non trouvé.</div>;
// //   }

// //   return (
// //     <div className="container mt-5">
// //       <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>← Retour</button>
// //       <div className="card mx-auto shadow" style={{ maxWidth: '600px' }}>
// //         <img
// //           src={productImage.default || productImage}
// //           alt={`Produit ${id}`}
// //           className="card-img-top"
// //           style={{ objectFit: 'cover', height: '400px' }}
// //         />
// //         <div className="card-body text-center">
// //           <h4 className="card-title">Produit {id}</h4>
// //           <p className="text-success fw-bold">Prix : {(20 + imageIndex).toFixed(2)} €</p>
// //           <p className="card-text">
// //             Ceci est une description détaillée du produit. Vous pouvez personnaliser ce texte.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetail;

// // import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { galleries } from '../utils/galleryImports';
// import { FaStar } from 'react-icons/fa6';
// import { FaStarHalfStroke } from 'react-icons/fa6';
// import { IoIosStarOutline } from 'react-icons/io';
// import './ProductDetail.css';
// import React, { useState } from 'react';

// const ProductDetail = () => {
//   const { category, subCategory, id } = useParams();
//   const key = `${category}-${subCategory}`;
//   const images = galleries[key] || [];
//   const index = parseInt(id) - 1;
//   const imageUrl = images[index];
//   const navigate = useNavigate();
//   const [selectedSize, setSelectedSize] = useState(null);

  

//   if (!imageUrl) {
//     return <p className="text-center text-danger">Image introuvable.</p>;
//   }

//   return (
//     <div className="container my-5 ">
//       <button
//         className="btn btn-outline-danger mb-3"
//         onClick={() => navigate(-1)}
//         style={{ marginTop: '30px' }}>
//         ← Retour
//       </button>

//       <h2 className="text-center mb-4 text-success">Détails du produit {id}</h2>
//       <div className="text-center d-flex justify-content-around">
//         <img
//           src={imageUrl}
//           alt={`Produit ${id}`}
//           style={{ maxWidth: '80%', height: '50%', borderRadius: '10px' }}
//         />

//         <div className="me-5">
//           <div className="text-warning mt-2">
//             <FaStar />
//             <FaStar />
//             <FaStarHalfStroke />
//             <IoIosStarOutline />
//             <IoIosStarOutline />
//           </div>
//           <p className="mt-3 fw-bold text-success">
//             Prix : {(20 + parseInt(id)).toFixed(2)} €
//           </p>

//           <div className="product-sizes mt-3">
//             <h6 className="mb-2">Choose your size:</h6>
//             <div className="d-flex justify-content-center gap-2 mt-2">
//               {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
//                 <button
//                   key={size}
//                   className={`btn size-btn ${
//                     selectedSize === size ? 'selected' : ''
//                   }`}
//                   onClick={() => setSelectedSize(size)}>
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <p className="lead mt-3">
//             Discover our latest collection designed for comfort, <br />
//             style, and everyday elegance. Perfect for any occasion
//           </p>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
/** @format */

import React, { useState,} from 'react';
import { useParams, useNavigate , Link } from 'react-router-dom';
import { galleries } from '../utils/galleryImports';
import { FaStar } from 'react-icons/fa6';
import { FaStarHalfStroke } from 'react-icons/fa6';
import { IoIosStarOutline } from 'react-icons/io';
import './ProductDetail.css';

const ProductDetail = () => {
  const { category, subCategory, id } = useParams();
  const key = `${category}-${subCategory}`;
  const images = galleries[key] || [];
  const index = parseInt(id) - 1;
  const imageUrl = images[index];
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);

  if (!imageUrl) {
    return <p className="text-center text-danger">Image introuvable.</p>;
  }

  return (
    <div className="container my-5"> 
      <button
        className="btn btn-outline-danger mb-3"
        onClick={() => navigate(-1)}
        style={{ marginTop: '40px', position: 'relative', float: 'left' }}
      >
        ← Retour
      </button>

      <h2 className="text-center mb-4 text-success pt-5">Détails du produit {id}</h2>

      <div className="text-center d-flex justify-content-around flex-wrap">
        <img
          src={imageUrl}
          alt={`Produit ${id}`}
          style={{ maxWidth: '80%', height: '50%', borderRadius: '10px' }}
        />

        <div className="me-5 mt-5">
          <div className="text-warning mt-2">
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </div>

          <p className="mt-3 fw-bold text-success">
            Prix : {(20 + parseInt(id)).toFixed(2)} €
          </p>

          <div className="product-sizes mt-3">
            <h6 className="mb-2">Choose your size:</h6>
            <div className="d-flex justify-content-center gap-2 mt-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`btn size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="lead mt-4">
            Discover our latest collection designed for comfort, <br />
            style, and everyday elegance. Perfect for any occasion.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-danger" onClick={() => navigate(-1)}>
              Fermer
            </button>
            <Link to="/detail2" className="btn btn-success">Commander</Link>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

