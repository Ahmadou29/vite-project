import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './TableShop.css';

import image1 from '../assets/images/accessoires/accessoire-1.jpg';
import image2 from '../assets/images/accessoires/accessoire-2.jpg';
import image3 from '../assets/images/accessoires/accessoire-3.jpg';
import image4 from '../assets/images/accessoires/accessoire-4.jpg';
import image5 from '../assets/images/accessoires/accessoire-5.jpg';

import image16 from '../assets/images/accessoires/accessoire-6.jpg';
import image17 from '../assets/images/accessoires/accessoire-7.jpg';
import image18 from '../assets/images/accessoires/accessoire-8.jpg';
import image19 from '../assets/images/accessoires/accessoire-9.jpg';
import image20 from '../assets/images/accessoires/accessoire-10.jpg';

import image6 from '../assets/images/femmes/femme-1.jpg';
import image7 from '../assets/images/femmes/femme-2.jpg';
import image8 from '../assets/images/femmes/femme-3.jpg';
import image9 from '../assets/images/femmes/femme-4.jpg';
import image10 from '../assets/images/femmes/femme-5.jpg';

import image11 from '../assets/images/femmes/femme-6.jpg';
import image12 from '../assets/images/femmes/femme-7.jpg';
import image13 from '../assets/images/femmes/femme-8.jpg';
import image14 from '../assets/images/femmes/femme-9.jpg';
import image15 from '../assets/images/femmes/femme-10.jpg';

import image21 from '../assets/images/homme/homme-1.jpg';
import image22 from '../assets/images/homme/homme-2.jpg';
import image23 from '../assets/images/homme/homme-3.jpg';
import image24 from '../assets/images/homme/homme-4.jpg';
import image25 from '../assets/images/homme/homme-5.jpg';
import image26 from '../assets/images/homme/homme-6.jpg';
import image27 from '../assets/images/homme/homme-7.jpg';
import image28 from '../assets/images/homme/homme-8.jpg';
import image29 from '../assets/images/homme/homme-9.jpg';
import image30 from '../assets/images/homme/homme-10.jpg';

import image31 from '../assets/images/montre/montre-1.jpg';
import image32 from '../assets/images/montre/montre-2.jpg';
import image33 from '../assets/images/montre/montre-3.jpg';
import image34 from '../assets/images/montre/montre-4.jpg';
import image35 from '../assets/images/montre/montre-5.jpg';
import image36 from '../assets/images/montre/montre-6.jpg';
import image37 from '../assets/images/montre/montre-7.jpg';
import image38 from '../assets/images/montre/montre-8.jpg';
import image39 from '../assets/images/montre/montre-9.jpg';
import image40 from '../assets/images/montre/montre-10.jpg';

import image41 from '../assets/images/lunette/lunette-1.jpg';
import image42 from '../assets/images/lunette/lunette-2.jpg';
import image43 from '../assets/images/lunette/lunette-3.jpg';
import image44 from '../assets/images/lunette/lunette-4.jpg';
import image45 from '../assets/images/lunette/lunette-5.jpg';
import image46 from '../assets/images/lunette/lunette-6.jpg';
import image47 from '../assets/images/lunette/lunette-7.jpg';
import image48 from '../assets/images/lunette/lunette-8.jpg';
import image49 from '../assets/images/lunette/lunette-9.jpg';
import image50 from '../assets/images/lunette/lunette-10.jpg';
import image51 from '../assets/images/lunette/lunette-11.jpg';
import image52 from '../assets/images/lunette/lunette-12.jpg';


const tabs = [
  { id: "fashion", label: "Fashion" },
  { id: "promo", label: "Promo" },
  { id: "lookbook", label: "Lookbook" },
];
  
const fashionItems = [
  { img: image1, price: 3, },
  { img: image2, price: 25 },
  { img: image3, price: 25 },
  { img: image4, price: 25 },
  { img: image5, price: 25 },

  { img: image6, price: 25 },
  { img: image7, price: 25 },
  { img: image8, price: 25 },
  { img: image9, price: 25 },
  { img: image10, price: 25 },

  { img: image11, price: 25 },
  { img: image12, price: 25 },
  { img: image13, price: 25 },
  { img: image14, price: 25 },
  { img: image15, price: 25 },

   { img: image16, price: 25 },
  { img: image17, price: 25 },
  { img: image18, price: 25 },
  { img: image19, price: 25 },
  { img: image20, price: 25 },


   { img: image21, price: 25 },
  { img: image22, price: 25 },
  { img: image23, price: 25 },
  { img: image24, price: 25 },
  { img: image25, price: 25 },
   { img: image26, price: 25 },
  { img: image27, price: 25 },
  { img: image28, price: 25 },
  { img: image29, price: 25 },
  { img: image30, price: 25 },

    { img: image31, price: 25 },
    { img: image32, price: 25 },
    { img: image33, price: 25 },
    { img: image34, price: 25 },
    { img: image35, price: 25 },
    { img: image36, price: 25 },
    { img: image37, price: 25 },
    { img: image38, price: 25 },
    { img: image39, price: 25 }, 
    { img: image40, price: 25 },  
    
      { img: image41, price: 25 },
    { img: image42, price: 25 },
    { img: image43, price: 25 },
    { img: image44, price: 25 },
    { img: image45, price: 25 },
    { img: image46, price: 25 },
    { img: image47, price: 25 },
    { img: image48, price: 25 },
    { img: image49, price: 25 }, 
    { img: image50, price: 25 }, 
    { img: image51, price: 25 },
    { img: image52, price: 25 }, 


  // { img: "images/femme (11).jpg", price: 20 },
  // { img: "images/femme (16).jpg", price: 18 },
  // Ajoute les autres items Fashion ici selon ton HTML
];

const promoItems = [
  {
    img: "images/montre (11).jpg",
    oldPrice: 15,
    newPrice: 10,
  },
  {
    img: "images/montre (12).jpg",
    oldPrice: 20,
    newPrice: 15.5,
  },
  {
    img: "images/femme (1).jpg",
    oldPrice: 30,
    newPrice: 25,
  },
  // Continue avec tous les autres produits promo...
];

const lookbookItems = [
  { img: "images/lunettes (18).jpg", price: 5.95 },
  { img: "images/lunette (17).jpg", price: 5.95 },
  { img: "images/pexels homme (1).jpg", price: 8.95 },
  { img: "images/accessoire 1.jpg", price: 8.95 },
  // Continue avec tous les autres items Lookbook...
];

export default function TabsShop() {
  const [activeTab, setActiveTab] = useState("fashion");

  return (
    <div className="container mt-5">
      
      {/* Nav tabs */}
      <ul className="nav nav-tabs" id="shopTabs" role="tablist">
        {tabs.map(({ id, label }) => (
          <li key={id} className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === id ? "active" : ""}`}
              id={`${id}-tab`}
              type="button"
              role="tab"
              aria-controls={`${id}-pane`}
              aria-selected={activeTab === id}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab panes */}
      <div className="tab-content mt-4" id="shopTabsContent">
        {/* Fashion */}
        <div
          className={`tab-pane fade ${activeTab === "fashion" ? "show active" : ""}`}
          id="fashion-pane"
          role="tabpanel"
          aria-labelledby="fashion-tab"
        >
          <div className="row">
            {fashionItems.map(({ img, price }, idx) => (
              <div key={idx} className="col-md-3 py-3">
                <div className="card shadow-lg p-3">
                  <a href="#">
                    <img src={img} alt="fashion item" className="card-img-top" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">${price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo */}
        <div
          className={`tab-pane fade ${activeTab === "promo" ? "show active" : ""}`}
          id="promo-pane"
          role="tabpanel"
          aria-labelledby="promo-tab"
        >
          <div className="row">
            {promoItems.map(({ img, oldPrice, newPrice }, idx) => (
              <div key={idx} className="col-md-3 py-3">
                <div className="card shadow-lg p-3">
                  <a href="#">
                    <img src={img} alt="promo item" className="card-img-top" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title text-decoration-line-through">${oldPrice}</h5>
                    <p className="card-text text-danger">${newPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lookbook */}
        <div
          className={`tab-pane fade ${activeTab === "lookbook" ? "show active" : ""}`}
          id="lookbook-pane"
          role="tabpanel"
          aria-labelledby="lookbook-tab"
        >
          <div className="row">
            {lookbookItems.map(({ img, price }, idx) => (
              <div key={idx} className="col-md-3 py-3">
                <a href="#">
                  <img src={img} alt="lookbook item" className="img-fluid" />
                </a>
                <div className="py-3 shadow-lg">
                  <a href="#">
                    <span className="fw-bold">${price}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Tab, Tabs } from 'react-bootstrap';

// const EcommerceFashion = () => {
//   // Données pour la section Fashion
//   const fashionProducts = [
//     // Enfants
//     { 
//       id: 1, 
//       img: "images/enfant 1.jpg", 
//       title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS", 
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus animi quae quasi, unde excepturi!", 
//       price: "$5.95",
//       category: "enfant"
//     },
//     { 
//       id: 2, 
//       img: "images/enfant 12.jpg", 
//       title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS", 
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus animi quae quasi, unde excepturi!", 
//       price: "$14.95",
//       category: "enfant"
//     },
//     // Ajoutez tous les autres produits enfants ici...
    
//     // Hommes
//     { 
//       id: 101, 
//       img: "images/homme 7.jpg", 
//       title: "5 FALL LOOKS I'M LOVING", 
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt rerum, magnam neque sed repellendus maiores.", 
//       price: "$9.95",
//       category: "homme"
//     },
//     // Ajoutez tous les autres produits hommes ici...
    
//     // Femmes
//     { 
//       id: 201, 
//       img: "images/femme (4).jpg", 
//       title: "5 FALL LOOKS I'M LOVING", 
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt rerum, magnam neque sed repellendus maiores.", 
//       price: "$9.95",
//       category: "femme"
//     },
//     // Ajoutez tous les autres produits femmes ici...
    
//     // Accessoires
//     { 
//       id: 301, 
//       img: "images/lunettes (10).jpg", 
//       title: "5 FALL LOOKS I'M LOVING", 
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt rerum, magnam neque sed repellendus maiores.", 
//       price: "$9.95",
//       category: "accessoire"
//     },
//     // Ajoutez tous les autres produits accessoires ici...
//   ];

//   // Données pour la section Promo
//   const promoProducts = [
//     {
//       id: 1001,
//       img: "images/pexels-charles-parker-5859674.jpg",
//       oldPrice: "$20",
//       newPrice: "$10"
//     },
//     {
//       id: 1002,
//       img: "images/pexels-krishna-kids-photography-2148372889-32902105.jpg",
//       oldPrice: "$100",
//       newPrice: "$50"
//     },
//     // Ajoutez tous les autres produits en promo ici...
//   ];

//   return (
//     <section id="blog" className="text-center bg-purple">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-12">
//             <Tabs
//               defaultActiveKey="fashion"
//               id="uncontrolled-tab-example"
//               className="nav-tabs justify-content-center fixed-top bg-white mb-3"
//             >
//               <Tab eventKey="fashion" title="Fashion">
//                 <h1 className="fw-lighter mt-5 pt-3 fw-bolder text-danger titre">Fashion</h1>
                
//                 {/* Section Enfants */}
//                 <div className="row mt-4 justify-content-center text-center">
//                   {fashionProducts
//                     .filter(product => product.category === "enfant")
//                     .map(product => (
//                       <div className="col-md-3 mb-4" key={product.id}>
//                         <a href="#">
//                           <img src={product.img} alt={product.title} className="img-fluid" />
//                         </a>
//                         <div className="py-3 text-dark">
//                           <h5 className="text-center text-dark">{product.title}</h5>
//                           <p className="fs-5">{product.desc}</p>
//                           <span className="fw-bold text-danger">{product.price}</span>
//                         </div>
//                       </div>
//                     ))}
//                 </div>

//                 {/* Section Hommes */}
//                 <h1 className="titre">Homme</h1>
//                 <div className="row mt-4 justify-content-center text-center">
//                   {fashionProducts
//                     .filter(product => product.category === "homme")
//                     .map(product => (
//                       <div className="col-md-3 mb-4" key={product.id}>
//                         <a href="#">
//                           <img src={product.img} alt={product.title} className="img-fluid" />
//                         </a>
//                         <div className="py-3 text-dark">
//                           <h5 className="text-center text-dark">{product.title}</h5>
//                           <p className="fs-5">{product.desc}</p>
//                           <span className="fw-bold text-danger">{product.price}</span>
//                         </div>
//                       </div>
//                     ))}
//                 </div>

//                 {/* Section Femmes */}
//                 <h1 className="titre">Femmes</h1>
//                 <div className="row mt-4 justify-content-center text-center">
//                   {fashionProducts
//                     .filter(product => product.category === "femme")
//                     .map(product => (
//                       <div className="col-md-3 mb-4" key={product.id}>
//                         <a href="#">
//                           <img src={product.img} alt={product.title} className="img-fluid" />
//                         </a>
//                         <div className="py-3 text-dark">
//                           <h5 className="text-center text-dark">{product.title}</h5>
//                           <p className="fs-5">{product.desc}</p>
//                           <span className="fw-bold text-danger">{product.price}</span>
//                         </div>
//                       </div>
//                     ))}
//                 </div>

//                 {/* Section Accessoires */}
//                 <h1 className="titre">Accessoires</h1>
//                 <div className="row mt-4 justify-content-center text-center">
//                   {fashionProducts
//                     .filter(product => product.category === "accessoire")
//                     .map(product => (
//                       <div className="col-md-3 mb-4" key={product.id}>
//                         <a href="#">
//                           <img src={product.img} alt={product.title} className="img-fluid" />
//                         </a>
//                         <div className="py-3 text-dark">
//                           <h5 className="text-center text-dark">{product.title}</h5>
//                           <p className="fs-5">{product.desc}</p>
//                           <span className="fw-bold text-danger">{product.price}</span>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               </Tab>

//               <Tab eventKey="promo" title="Promo">
//                 <h1 className="fw-lighter mt-5 py-3 fw-bolder text-danger titre">Promo</h1>
//                 <div className="row">
//                   <div className="row row-cols-1 g-2">
//                     {promoProducts.map(product => (
//                       <div className="col-md-3 py-2" key={product.id}>
//                         <div className="card shadow-lg p-3">
//                           <a href="#">
//                             <img src={product.img} className="card-img-top" alt="Produit en promotion" />
//                           </a>
//                           <div className="card-body">
//                             <h5 className="card-title text-decoration-line-through">{product.oldPrice}</h5>
//                             <p className="card-text text-danger">{product.newPrice}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </Tab>

//               <Tab eventKey="lookbook" title="Lookbook">
//                 <h1 className="fw-lighter mt-5 py-3 fw-bolder text-danger titre">Lookbook</h1>
//                 <div className="row">
//                   {/* Ajoutez ici le contenu de votre lookbook */}
//                   <p className="text-center">Contenu du lookbook à venir...</p>
//                 </div>
//               </Tab>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EcommerceFashion;
