import React from "react";
import "./home.css";
import logo from "../assets/images/logo-removebg-preview (1).png";

import image1 from "../assets/images/seo-tips-for-fashion-e-commerce-website.webp";
import image2 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
import image3 from "../assets/images/seo-tips-for-fashion-e-commerce-website.webp";
import image4 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
import image5 from "../assets/images/seo-tips-for-fashion-e-commerce-website.webp";
import image6 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
import image7 from "../assets/images/seo-tips-for-fashion-e-commerce-website.webp";
import image8 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
import image9 from "../assets/images/seo-tips-for-fashion-e-commerce-website.webp";
import image10 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
import image11 from "../assets/images/seo-tips-for-fashion-e-commerce-website.webp";
import image12 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
import image13 from "../assets/images/seo-tips-for-fashion-e-commerce-website.webp";
import image14 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
import image15 from "../assets/images/seo-tips-for-fashion-e-commerce-website.webp";
import image16 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
import image17 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
import image18 from "../assets/images/seo-tips-for-fashion-e-commerce-website.webp";
import image19 from "../assets/images/beautiful-young-asian-teen-seller-260nw-2362989449.webp";
// importe les autres images aussi si besoin

function Accueil() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div className="container  d-flex align-items-center ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="img-logo  order-md-1 order-2" />
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
                <a
                  className="nav-link active fs-5"
                  aria-current="page"
                  href="./Accueil.jsx"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="./Blog.jsx">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="./Categories.jsx">
                  Categories
                </a>
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

      <section>
        <div
          id="carouselExampleInterval"
          className="carousel slide  "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner py-5 mt-5">
            <div
              className="carousel-item  text-center  vh-100 slide-1 active"
              data-bs-interval="10000"
            >
              <div className="container  h-100 d-flex align-items-center justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <h1 className="display-1 fw-bold text-dark">
                      Luxury Fashion & Accessoires
                    </h1>
                    <a
                      href="#"
                      className="btn btn-navbar rounded-pill bouton-acc px-5  py-2 bg-dark fs-4 text-white "
                    >
                      Explore collections
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item   text-center  slide-2  vh-100"
              data-bs-interval="2000"
            >
              <div className="container  h-100 d-flex align-items-center justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <h1 className="display-1 fw-bold text-dark">
                      Luxury Fashion & Accessoires
                    </h1>
                    <a
                      href="#"
                      className="btn btn-navbar rounded-pill bouton-acc px-5  py-2 bg-dark fs-4 text-white"
                    >
                      Explore collections
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev avant"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden bg-primary">Previous</span>
          </button>
          <button
            className="carousel-control-next apres"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="collections">
        <div className="conainer mt-5">
          <h2 className="text-center  text-uppercase">New Arrival</h2>
          <div className="d-flex justify-content-center align-items-center mb-4 position-relative">
            <hr className="w-25" />
            <div className="ligne"></div>
          </div>

          <ul
            className="nav nav-pills mb-3 justify-content-center py-5"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item  link-colect" role="presentation">
              <button
                className="nav-link active"
                id="pills-Starters-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Starters"
                type="button"
                role="tab"
                aria-controls="pills-Starters"
                aria-selected="true"
              >
                All
              </button>
            </li>

            <li className="nav-item link-colect" role="presentation">
              <button
                className="nav-link  "
                id="pills-Breakfast-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Breakfast"
                type="button"
                role="tab"
                aria-controls="pills-Breakfast"
                aria-selected="false"
              >
                Apparel
              </button>
            </li>
            <li className="nav-item link-colect" role="presentation">
              <button
                className="nav-link "
                id="pills-Lunch-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Lunch"
                type="button"
                role="tab"
                aria-controls="pills-Lunch"
                aria-selected="false"
              >
                Dress
              </button>
            </li>
            <li className="nav-item link-colect" role="presentation">
              <button
                className="nav-link"
                id="pills-Dinner-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Dinner"
                type="button"
                role="tab"
                aria-controls="pills-Dinner"
                aria-selected="false"
              >
                Tshirt
              </button>
            </li>
            <li className="nav-item link-colect" role="presentation">
              <button
                className="nav-link"
                id="pills-Dinner-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Dinner"
                type="button"
                role="tab"
                aria-controls="pills-Dinner"
                aria-selected="false"
              >
                Bag
              </button>
            </li>
          </ul>
          <div className="tab-content " id="pills-tabContent">
            <div
              className="tab-pane fade show "
              id="pills-Starters"
              role="tabpanel"
              aria-labelledby="pills-Starters-tab"
              tabindex="0"
            >
              <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-5">
                  <div className="col">
                    <div className="justify-content-center">
                      <img
                        src="Images/girl1-a91d48b4.png"
                        alt=""
                        className="image-menu "
                      />
                      <div className="text-center">
                        <h5>
                          WN reversible angora <br /> cardigan
                        </h5>
                        <span className="text-danger fw-bold fs-4">$120</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl2-47d9e9b0.png"
                      alt=""
                      className="image-menu img-fluid"
                    />
                    <div className="text-center">
                      <h5>
                        21WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl3-40737473.png"
                      alt=" "
                      className="image-menu img-fluid"
                    />
                    <div className="text-center">
                      <h5>
                        WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl3-40737473.png"
                      alt=" "
                      className="image-menu img-fluid"
                    />
                    <div className="text-center">
                      <h5>Oblong Bag</h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show active"
              id="pills-Breakfast"
              role="tabpanel"
              aria-labelledby="pills-Breakfast-tab"
              tabindex="0"
            >
              <div className="container">
                <div className="row row-cols-2 justify-content-center row-cols-md-4 g-5 ">
                  <div className="col">
                    <div className="justify-content-center">
                      <img
                        src="Images/girl1-a91d48b4.png"
                        alt=""
                        className="image-menu "
                      />
                      <div className="text-center">
                        <h5>
                          WN reversible angora <br /> cardigan
                        </h5>
                        <span className="text-danger fw-bold fs-4">$120</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl2-47d9e9b0.png"
                      alt=""
                      className="image-menu img-fluid"
                    />
                    <div className="text-center">
                      <h5>
                        21WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl3-40737473.png"
                      alt=" "
                      className="image-menu img-fluid"
                    />
                    <div className="text-center">
                      <h5>
                        WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl3-40737473.png"
                      alt=" "
                      className="image-menu img-fluid"
                    />
                    <div className="text-center">
                      <h5>Oblong Bag</h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show "
              id="pills-Lunch"
              role="tabpanel"
              aria-labelledby="pills-Lunch-tab"
              tabindex="0"
            >
              <div className="container ">
                <div className="row row-cols-2 row-cols-md-4 g-5 ">
                  <div className="col">
                    <div className="justify-content-center">
                      <img
                        src="Images/girl1-a91d48b4.png"
                        alt=""
                        className="image-menu "
                      />
                      <div className="text-center">
                        <h5>
                          WN reversible angora <br /> cardigan
                        </h5>
                        <span className="text-danger fw-bold fs-4">$120</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl2-47d9e9b0.png"
                      alt=""
                      className="image-menu img-fluid"
                    />
                    <div className="text-center">
                      <h5>
                        21WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl3-40737473.png"
                      alt=" "
                      className="image-menu img-fluid"
                    />
                    <div className="text-center">
                      <h5>
                        WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl3-40737473.png"
                      alt=" "
                      className="image-menu img-fluid"
                    />
                    <div className="text-center">
                      <h5>Oblong Bag</h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show "
              id="pills-Dinner"
              role="tabpanel"
              aria-labelledby="pills-Dinner-tab"
              tabindex="0"
            >
              <div className="container ">
                <div className="row row-cols-2 row-cols-md-4 g-5 ">
                  <div className="col-md-3">
                    <div className="justify-content-center">
                      <img
                        src="Images/girl1-a91d48b4.png"
                        alt=""
                        className="image-menu "
                      />
                      <div className="text-center">
                        <h5>
                          WN reversible angora <br /> cardigan
                        </h5>
                        <span className="text-danger fw-bold fs-4">$120</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="Images/girl3-40737473.png"
                      alt=""
                      className="image-menu "
                    />
                    <div className="text-center">
                      <h5>
                        21WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="Images/girl2-47d9e9b0.png"
                      alt=" "
                      className="image-menu "
                    />
                    <div className="text-center">
                      <h5>
                        WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="Images/girl3-40737473.png"
                      alt=" "
                      className="image-menu "
                    />
                    <div className="text-center">
                      <h5>Oblong Bag</h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show "
              id="pills-Dinner"
              role="tabpanel"
              aria-labelledby="pills-Dinner-tab"
              tabindex="0"
            >
              <div className="container ">
                <div className="row row-cols-2 row-cols-md-4 g-5 ">
                  <div className="col">
                    <div className="justify-content-center">
                      <img
                        src="Images/girl2-47d9e9b0.png"
                        alt=""
                        className="image-menu "
                      />
                      <div className="text-center">
                        <h5>
                          WN reversible angora <br /> cardigan
                        </h5>
                        <span className="text-danger fw-bold fs-4">$120</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl1-a91d48b4.png"
                      alt=""
                      className="image-menu "
                    />
                    <div className="text-center">
                      <h5>
                        21WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl2-47d9e9b0.png"
                      alt=" "
                      className="image-menu "
                    />
                    <div className="text-center">
                      <h5>
                        WN reversible angora <br /> cardigan
                      </h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="Images/girl3-40737473.png"
                      alt=" "
                      className="image-menu "
                    />
                    <div className="text-center">
                      <h5>Oblong Bag</h5>
                      <span className="text-danger fw-bold fs-4">$120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 text-center P-4">
          <div className=" mb-4  d-flex justify-content-center  align-items-center">
            <a href="#" className="text-decoration-none fs-2  text-dark">
              Explore More{" "}
              <span className="ms-1">
                <i className="bi bi-arrow-right "></i>
              </span>
            </a>
          </div>

          <div className="d-flex justify-content-center align-items-center mb-4 position-relative">
            <hr className="w-25" />
            <div className="ligne"></div>
          </div>
          <div className="row justify-content-center align-items-center gx-5 gy-3">
            <div className="col-auto">
              <p className="fw-bold m-0">
                <img
                  src="Images/prada-logo-black-and-white.png"
                  alt=""
                  className="img-fluid image-marque"
                />
              </p>
            </div>
            <div className="col-auto">
              <p className="fw-bold m-0">
                <img
                  src="Images/875-875-capture-d-e-cran-2018-08-03-a-13-18-47_c048605b21956f554a2635e60998754f.png"
                  alt=""
                  className="img-fluid image-marque"
                />
              </p>
            </div>
            <div className="col-auto">
              <p className="fw-bold m-0">
                <img
                  src="Images/boss-hugo-boss-logo-svg-vector.svg"
                  alt=""
                  className="img-fluid image-marque"
                />
              </p>
            </div>
            <div className="col-auto">
              <p className="fst-italic m-0">
                <img
                  src="Images/cartier-2-logo-png-transparent.png"
                  alt=""
                  className="img-fluid image-marque"
                />
              </p>
            </div>
            <div className="col-auto">
              <p className="m-0" style="letter-spacing: 0.4rem;">
                <img
                  src="Images/gucci-logo-png_seeklogo-64069.png"
                  alt=""
                  className="img-fluid image-marque"
                />
              </p>
            </div>
            <div className="col-auto">
              <p className="m-0">
                <img
                  src="Images/tiffany-co-logo-png-transparent.png"
                  alt=""
                  className="img-fluid image-marque"
                />
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-4 position-relative">
            <hr className="w-25" />
            <div className="ligne"></div>
          </div>
        </div>

        <div className="container my-5">
          <h4 className="text-center mb-5">COLLECTIONS</h4>
          <div className="row g-4">
            <div className="col-md-6 position-relative">
              <img
                src="Images/accuiel-collect2.jpg"
                className="img-fluid w-100"
                alt="October Collection"
              />
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h1 className="display-1 fw-bold opacity-25 m-0 fs-2">10</h1>
                <h4 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
                  October
                  <br />
                  <small className="fw-light fs-2">COLLECTION</small>
                </h4>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <img
                src="Images/accuiel-collect2.jpg"
                className="img-fluid w-100"
                alt="Autumn Collection"
              />
              <div className="position-absolute top-50 start-50 translate-middle text-dark text-center">
                <h3 className="fw-bold m-0 fs-2">Autumn</h3>
                <small className="fw-light fs-2">COLLECTION</small>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 position-relative">
              <img
                src="Images/accuiel-collect1.jpg"
                className="img-fluid w-100 rounded"
                alt="Video Preview"
              />
              <a
                href="#"
                className="position-absolute top-50 start-50 translate-middle"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
              >
                <button className="btn btn-light rounded-circle shadow-lg bouton-video">
                  <i className="bi bi-play-fill fs-1"></i>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="videoModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark border-0">
              <div className="modal-body p-0">
                <video controls autoplay className="w-100">
                  <source src="chemin/vers/ta-video.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5 mt-5 mb-5">
        <div className="container pov">
          <div>
            <h3 className="text-center">JUST FOR YOU</h3>
            <div className="d-flex justify-content-center align-items-center mb-4 position-relative">
              <hr className="w-25" />
              <div className="ligne"></div>
            </div>
          </div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row row-cols-2 row-cols-md-4 g-5">
                  <div className="col">
                    <div className="">
                      <img
                        src="./Images/girl2-47d9e9b0.png"
                        className="imgs img-fluid"
                        alt="..."
                      />
                      <div className="text-center ">
                        <h6 className=" text-center mb-0">
                          Harris tweed Three button
                        </h6>
                        <p className="card-text mb-0">Jacket</p>
                        <p className="mb-0  text-warning">$120</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <img
                        src="./Images/girl1-a91d48b4.png"
                        className="imgs img-fluid"
                        alt="..."
                      />
                      <div className="text-center">
                        <h6 className=" text-center mb-0">
                          Harris tweed Three button
                        </h6>
                        <p className="card-text mb-0">Jacket</p>
                        <p className="mb-0 text-warning">$120</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <img
                        src="./Images/girl2-47d9e9b0.png"
                        className="imgs img-fluid"
                        alt="..."
                      />
                      <div className="text-center">
                        <h6 className=" text-center mb-0">
                          Harris tweed Three button
                        </h6>
                        <p className="card-text mb-0">Jacket</p>
                        <p className="mb-0 text-warning">$120</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <img
                        src="./Images/girl3-40737473.png"
                        className="imgs img-fluid"
                        alt="..."
                      />
                      <div className="text-center">
                        <h6 className=" text-center mb-0">
                          Harris tweed Three button
                        </h6>
                        <p className="card-text mb-0">Jacket</p>
                        <p className="mb-0 text-warning">$120</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-2 row-cols-md-4 g-5">
                <div className="col">
                  <div className="">
                    <img
                      src="./Images/girl2-47d9e9b0.png"
                      className="imgs img-fluid"
                      alt="..."
                    />
                    <div className="text-center">
                      <h4 className=" text-center mb-0">
                        Harris tweed Three button
                      </h4>
                      <p className="card-text mb-0">Jacket</p>
                      <p className="mb-0 text-warning">$120</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="">
                    <img
                      src="./Images/girl4-a8b3d73f.png"
                      className="imgs img-fluid"
                      alt="..."
                    />
                    <div className="text-center">
                      <h6 className=" text-center mb-0">
                        Harris tweed Three button
                      </h6>
                      <p className="card-text mb-0">Jacket</p>
                      <p className="mb-0 text-warning">$120</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="">
                    <img
                      src="./Images/girl2-47d9e9b0.png"
                      className="imgs img-fluid"
                      alt="..."
                    />
                    <div className="text-center">
                      <h6 className=" text-center mb-0">
                        Harris tweed Three button
                      </h6>
                      <p className="card-text mb-0">Jacket</p>
                      <p className="mb-0 text-warning">$120</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="">
                    <img
                      src="./Images/girl1-a91d48b4.png"
                      className="imgs img-fluid"
                      alt="..."
                    />
                    <div className="text-center">
                      <h6 className=" text-center mb-0">
                        Harris tweed Three button
                      </h6>
                      <p className="card-text mb-0">Jacket</p>
                      <p className="mb-0 text-warning">$120</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-2 row-cols-md-4 g-5">
                <div className="col">
                  <div className="">
                    <img
                      src="./Images/girl4-a8b3d73f.png"
                      className="imgs img-fluid"
                      alt="..."
                    />
                    <div className="text-center">
                      <h6 className=" text-center mb-0">
                        Harris tweed Three button
                      </h6>
                      <p className="card-text mb-0">Jacket</p>
                      <p className="mb-0 text-warning">$120</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="">
                    <img
                      src="./Images/girl2-47d9e9b0.png"
                      className="imgs img-fluid"
                      alt="..."
                    />
                    <div className="text-center">
                      <h6 className=" text-center mb-0">
                        Harris tweed Three button
                      </h6>
                      <p className="card-text mb-0">Jacket</p>
                      <p className="mb-0 text-warning">$120</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="">
                    <img
                      src="./Images/girl1-a91d48b4.png"
                      className="imgs img-fluid"
                      alt="..."
                    />
                    <div className="text-center">
                      <h6 className=" text-center mb-0">
                        Harris tweed Three button
                      </h6>
                      <p className="card-text mb-0">Jacket</p>
                      <p className="mb-0 text-warning">$120</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="">
                    <img
                      src="./Images/girl2-47d9e9b0.png"
                      className="imgs img-fluid"
                      alt="..."
                    />
                    <div className="text-center">
                      <h6 className=" text-center mb-0">
                        Harris tweed Three button
                      </h6>
                      <p className="card-text mb-0">Jacket</p>
                      <p className="mb-0 text-warning">$120</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>  */}
        </div>
      </section>

      <section className="my-5   trend">
        <div className="container mb-5 my-5 ">
          <div className="mt-5 my-5">
            {" "}
            <h3 className="text-center  mb-5">@TRENDING</h3>
          </div>
          <div className="container mt-5  ">
            <div className="row mt-5  g-5">
              <div className="col col-sm-3 g row-cols-md-2 btn btn-light rounded-5 ">
                #2021{" "}
              </div>
              <div className="col col-sm-3 row-cols-md-2 btn btn-light rounded-5">
                #spring
              </div>
              <div className="col col-sm-3 row-cols-md-2 btn btn-light rounded-5">
                #collection
              </div>
              <div className="col col-sm-3 row-cols-md-2 btn btn-light rounded-5">
                #fall
              </div>
              <div className="col col-sm-4 row-cols-md-2 btn btn-light rounded-5">
                #dress
              </div>
              <div className="col col-sm-3 row-cols-md-2 btn btn-light rounded-5 ms-4">
                #automncollection
              </div>
              <div className="col col-sm-3 row-cols-md-2 btn btn-light rounded-5 ms-4">
                #openfashion
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container trend mb-5 my-5">
        <div className="my-5">
          <div className="d-flex justify-content-center">
            <img
              src="./Images/logo-removebg-preview (1).png"
              className="log"
              alt=""
            />
          </div>
          <h5 className="text-center">
            Making a luxurious lifestyle accessible for a generous group of
            women is our daily drive.
          </h5>
        </div>

        <div className="container my-5 mt-5">
          <div className="row my-5 mt-5 row-cols-2 row-cols-md-4">
            <div className="col mt-5 ">
              <div className="text-center">
                <div>
                  <i className="bi bi-strava fs-3"></i>
                </div>
                <p className="mb-0">Fast shipping. Free on</p>
                <p>orders over $25</p>
              </div>
            </div>

            <div className="col mt-5">
              <div className="  text-center">
                <div>
                  <i className="bi bi-slack fs-3"></i>
                </div>
                <p className="mb-0">Sustainable process</p>
                <p>from start to finish.</p>
              </div>
            </div>

            <div className="col mt-5">
              <div className="text-center">
                <div>
                  <i className="bi bi-sourceforge fs-3"></i>
                </div>
                <p className="mb-0">Unique designs </p>
                <p>and high-quality materials.</p>
              </div>
            </div>

            <div className="col mt-5">
              <div className="text-center">
                <div>
                  <i className="bi bi-yelp fs-3"></i>
                </div>
                <p className="mb-0">UFast shipping. </p>
                <p>Free on orders over $25.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5 my-5 mt-5">
        <div className=" mt-5">
          <h3 className="text-center">FOLLOW US</h3>
          <div className=" text-center">
            <i className="bi bi-instagram fs-1"></i>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row mt-5 row-cols-2 row-cols-md-4 g-5">
            <div className="col">
              <img src="./Images/bw1.jpg" className="img-fluid low " alt="" />
              <p className="position-absolute mi text-light">@mia</p>
            </div>
            <div className="col">
              <img src="./Images/bw2.jpeg" className="img-fluid low" alt="" />
              <p className="position-absolute mi text-light">@_jihyn</p>
            </div>
            <div className="col">
              <img src="./Images/bw3.jpeg" className="img-fluid low" alt="" />
              <p className="position-absolute mi text-light">@mia</p>
            </div>
            <div className="col">
              <img src="./Images/bw4.jpg" className="img-fluid low" alt="" />
              <p className="position-absolute mi text-light">@_jihyn</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-5">
        <div className="container my-5 ">
          <div className="row my-5 row-cols-1 row-cols-md-4 d-flex  justify-content-center ">
            <div className="col text-center">
              <div className="d-flex justify-content-evenly">
                <a
                  href="https://www.facebook.com/?locale=fr_FR"
                  className="text-dark"
                >
                  <i className="bi bi-facebook fs-4"></i>
                </a>

                <a href="https://www.instagram.com/" className="text-dark">
                  <i className="bi bi-instagram fs-4"></i>
                </a>

                <a href="" className="text-dark">
                  {" "}
                  <i className="bi bi-google fs-4"></i>
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-4 position-relative">
                <hr className="w-50" />
                <div className="ligne"></div>
              </div>
            </div>
            <div className="col text-center">
              <p>support@openui.design</p>
              <p>+60 825 876</p>
              <p>08:00 - 22:00 - Everyday</p>
              <div className="d-flex justify-content-center align-items-center mb-4 position-relative">
                <hr className="w-50" />
                <div className="ligne"></div>
              </div>{" "}
            </div>
            <div className="col text-center ">
              <a href="" className="text-decoration-none text-dark">
                About
              </a>
              <a href="" className="text-decoration-none text-dark ms-3">
                Contact
              </a>
              <a href="" className="text-decoration-none text-dark ms-3">
                Blog
              </a>
            </div>
          </div>
        </div>
        <div className="bg-light">
          <p className="text-center">Copyright© OpenUI All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Accueil
