
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Importation des images
import imgHero from "../assets/images/Collection/image20.png";
import rect344 from "../assets/images/Collection/rectangle 344.png";
import rect344_1 from "../assets/images/Collection/rectangle 344 (1).png";
import rect344_4 from "../assets/images/Collection/Rectangle 344 (4).png";
import rect344_5 from "../assets/images/Collection/Rectangle 344 (5).png";
import rect344_6 from "../assets/images/Collection/Rectangle 344 (6).png";
import rect344_7 from "../assets/images/Collection/Rectangle 344 (7).png";
import rect440 from "../assets/images/Collection/Rectangle 440.png";
import rect441 from "../assets/images/Collection/Rectangle 441.png";

const CollectionOctobre = () => {
  // Tableau des images de la grille principale
  const mainImages = [rect344, rect344_1, rect344_4, rect344_5];
  // Tableau des images "You May Also Like"
  const suggestedImages = [rect344_6, rect344_7, rect440, rect441];

  return (
    <div className="bg-dark py-4">
      {/* Top Navbar */}
      <div className="container py-3 d-flex justify-content-between align-items-center">
        <div className="text-center">
          {/* <h5 className="mb-0">Fashion</h5>
          <small>October Collection</small> */}
        </div>
        <div className="header-icons">
          <a href="/search" className="btn btn-dark">
            <i className="bi bi-search"></i>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container hero-image">
        <img src={imgHero} alt="October Collection" className="mb-4 w-100" />
      </div>

      {/* Grid Preview */}
      <div className="container grid-products">
        <div className="row g-2">
          {mainImages.map((img, index) => (
            <div className="col-md-3" key={index}>
              <img
                src={img}
                alt={`Product ${index + 1}`}
                style={{ height: "50vh" }}
                className="w-100"
              />
              <div className="p-0">
                <h6 className="mt-3 ">October collection</h6>
                <p className="mb-0 ">reversible angora cardigan</p>
                <p className="mb-0" style={{ color: "rgb(239, 131, 131)" }}>
                  $120
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* You May Also Like */}
      <section>
        <h3 className="text-center  mt-4">YOU MAY ALSO LIKE</h3>
        <hr />
        <div className="container grid-products mt-3">
          <div className="row g-2">
            {suggestedImages.map((img, index) => (
              <div className="col-md-3" key={index}>
                <img
                  src={img}
                  alt={`Product ${index + 5}`}
                  style={{ height: "50vh" }}
                  className="w-100"
                />
                <div className="p-0">
                  <h6 className="mt-3 ">October collection</h6>
                  <p className="mb-0 ">reversible angora cardigan</p>
                  <p className="mb-0" style={{ color: "rgb(239, 131, 131)" }}>
                    $120
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionOctobre;
