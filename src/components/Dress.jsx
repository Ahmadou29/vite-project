import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CollectionOctobre.css";

// Importation directe des images si elles sont dans /src/assets
import img1 from "../assets/images/Collection/rectangle 344 (15).png";
import img2 from "../assets/images/Collection/rectangle 344 (8).png";
import img3 from "../assets/images/Collection/rectangle 344 (9).png";
import img4 from "../assets/images/Collection/rectangle 344 (10).png";
import img5 from "../assets/images/Collection/rectangle 344 (11).png";
import img6 from "../assets/images/Collection/rectangle 344 (12).png";
import img7 from "../assets/images/Collection/rectangle 344 (13).png";
import img8 from "../assets/images/Collection/rectangle 344 (14).png";

const products = [img1, img2, img3, img4, img5, img6, img7, img8];

const Dress = () => {
  return (
    <div className="bg-light py-4">
      <div className="container">
        <div className="row g-3">
          {products.map((image, index) => (
            <div className="col-6 col-md-3" key={index}>
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="img-fluid"
                style={{ height: "50vh", objectFit: "cover", width: "100%" }}
              />
              <div className="pt-2">
                <h6 className="text-dark">October collection</h6>
                <p className="mb-0 text-dark">Reversible angora cardigan</p>
                <p className="mb-0 text-danger fw-semibold">$120</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
          <span className="bg-dark text-white px-3 py-1 rounded">1</span>
          <span className="bg-light text-dark px-3 py-1 rounded">2</span>
          <span className="bg-light text-dark px-3 py-1 rounded">3</span>
          <span className="bg-light text-dark px-3 py-1 rounded">4</span>
          <span className="bg-light text-dark px-3 py-1 rounded">5</span>
          <i className="bi bi-chevron-right text-dark fs-5"></i>
        </div>
      </div>
    </div>
  );
};

export default Dress;
