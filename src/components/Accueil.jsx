// import React,{UseState, useEffect} from "react";
import React, { useState, useEffect } from "react";



import './home.css';
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut, } from "firebase/auth"; // ✅ depuis Firebase
import { auth } from "../config"; 
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo-removebg-preview (1).png";
import imgFemme10 from "../assets/images/femmes/femme-10.jpg";
import imgHomme9 from "../assets/images/homme/homme-10.jpg";
import imgFemme16 from "../assets/images/femmes/femme-16.jpg";
import imgFemme2_2 from "../assets/images/femmes/femme-2.jpg";
import imgFemme4 from "../assets/images/femmes/femme-32.jpg";
import imgGirl2 from "../assets/images/femmes/femme-16.jpg";
import imgSacCabas from "../assets/images/sac-cabas.avif";
import imgSacTote from "../assets/images/sac_a_main_the_small_tote_cuir_metallise-1.avif";
import imgSacMoyen3 from "../assets/images/sac-moyen3.avif";
import imgBody from "../assets/images/body.webp";
import imgBody2 from "../assets/images/body2.webp";
import imgBody3 from "../assets/images/body3.webp";
import imgFemme18 from "../assets/images/femmes/femme-18.jpg";
import imgFemme6 from "../assets/images/femmes/femme-23.jpg";
import imgFemme18bis from "../assets/images/femmes/femme-18.jpg";
import imgBody4 from "../assets/images/body4.webp"
import imgGirl2Bag from "../assets/images/femmes/femme-10.jpg";
import prada from "../assets/images/prada-logo-black-and-white.png";
import capture from "../assets/images/875-875-capture-d-e-cran-2018-08-03-a-13-18-47_c048605b21956f554a2635e60998754f.png";
import boss from "../assets/images/cartier-2-logo-png-transparent.png";
import cartier from "../assets/images/cartier-2-logo-png-transparent.png";
import gucci from "../assets/images/cartier-2-logo-png-transparent.png";
import tiffany from "../assets/images/tiffany-co-logo-png-transparent.png";
import collect1 from "../assets/images/accuiel-collect1.jpg";
import collect2 from "../assets/images/accuiel-collect2.jpg";
  const brandLogos = [prada, capture, boss, cartier, gucci, tiffany];
import image29 from "../assets/images/femmes/femme-1.jpg";
import image30 from "../assets/images/femmes/femme-3.jpg";
import image31 from "../assets/images/femmes/femme-5.jpg";
import image32 from "../assets/images/femmes/femme-4.jpg";
import image33 from "../assets/images/femmes/femme-14.jpg";
import image34 from "../assets/images/femmes/femme-15.jpg";
import image35 from "../assets/images/femmes/femme-10.jpg";
import image36 from "../assets/images/femmes/femme-11.jpg";
import image37 from "../assets/images/femmes/femme-7.jpg";
import image38 from "../assets/images/femmes/femme-16.jpg";
import image39 from "../assets/images/femmes/femme-2.jpg";
import image40 from "../assets/images/femmes/femme-9.jpg";
import bw1 from "../assets/images/bw1.jpg";
import bw2 from "../assets/images/bw2.jpeg";
import bw3 from "../assets/images/bw3.jpeg";
import bw4 from "../assets/images/bw4.jpg";
// import image31 from "../assets/images/girl4-a8b3d73f.png";
function Accueil() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
      const navigate = useNavigate();
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe(); // nettoyage
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Erreur de déconnexion :", error.message);
    }
  };
 

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
          <div className="collapse navbar-collapse justify-content-center d-flex  " id="navbarSupportedContent">
            <ul className="navbar-nav nav1">
              <li className="nav-item">
                 <Link className="nav-link active fs-5" to="/accueil">Home</Link>
                
              </li>
              <li className="nav-item">
               <Link className="nav-link fs-5" to="/tabsShop">Blog</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/categorie">Categorie</Link>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            
          </form>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="btn btn-outline-danger ms-2 me-3"
            >
              Déconnexion
            </button>
          ) : (
            <Link className="nav-link me-3 fs-5" to="/login">
              Se connecter
            </Link>
          )}
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
          <div className="carousel-inner ">
            <div
              className="carousel-item  text-center  vh-100 slide-1 active w-100"
              data-bs-interval="10000"
            >
              <div className="container  vh-100 d-flex align-items-center justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <h1 className="display-1 fw-bold text-white">
                      Luxury Fashion & Accessoires
                    </h1>
                    <a
                      href="#collection"
                      className="btn btn-navbar rounded-pill bouton-acc   bg-dark fs-3 text-white d-flex justify-content-center align-items-center"
                    >
                      Explore collections
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item  text-center  slide-2  vh-100 w-100"
              data-bs-interval="2000"
            >
              <div className="container  vh-100 d-flex align-items-center justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <h1 className="display-1 fw-bold text-white">
                      Luxury Fashion & Accessoires
                    </h1>
                   <a
                      href="#"
                      className="btn btn-navbar rounded-pill bouton-acc   bg-dark fs-3 text-white d-flex justify-content-center align-items-center"
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
   



    <div className="container py-5">
      <h2 className="text-center text-uppercase">New Arrival</h2>
      <div className="d-flex justify-content-center align-items-center mb-4 position-relative">
        <hr className="w-25" />
        <div className="ligne"></div>
      </div>

      <ul
        className="nav nav-pills mb-3 justify-content-center py-5"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item link-colect" role="presentation">
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
            className="nav-link"
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
            className="nav-link"
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
            id="pills-Bag-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-Bag"
            type="button"
            role="tab"
            aria-controls="pills-Bag"
            aria-selected="false"
          >
            Bag
          </button>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        {/* All */}
        <div
          className="tab-pane fade show active"
          id="pills-Starters"
          role="tabpanel"
          aria-labelledby="pills-Starters-tab"
          tabIndex="0"
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-5">
              <div className="col">
                <div className="justify-content-center">
                  <img src={imgFemme10} alt="" className="image-menu" />
                  <div className="text-center">
                    <h5>
                      WN reversible angora <br />
                      cardigan
                    </h5>
                    <span className="text-danger fw-bold fs-4">$120</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src={imgHomme9} alt="" className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    21WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img src={imgFemme16} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img src={imgFemme2_2} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-5 py-3">
              <div className="col">
                <div className="justify-content-center">
                  <img src={imgFemme4} alt="" className="image-menu" />
                  <div className="text-center">
                    <h5>
                      WN reversible angora <br />
                      cardigan
                    </h5>
                    <span className="text-danger fw-bold fs-4">$120</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src={imgGirl2} alt="" className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>Oblong Bag </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img src={imgSacCabas} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    BALMAIN
                    <br /> sac Cavan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img
                  src={imgSacTote}
                  alt=" "
                  className="image-menu img-fluid"
                />
                <div className="text-center">
                  <h5>
                    sac a main the small
                    <br /> tote cuir metallise
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-5 py-3">
              <div className="col">
                <div className="justify-content-center">
                  <img src={imgSacMoyen3} alt="" className="image-menu" />
                  <div className="text-center">
                    <h5>
                      <br /> cardigan
                    </h5>
                    <span className="text-danger fw-bold fs-4">$120</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src={imgBody} alt="" className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    21WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img src={imgBody2} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img src={imgBody3} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>Oblong Bag</h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apparel */}
        <div
          className="tab-pane fade"
          id="pills-Breakfast"
          role="tabpanel"
          aria-labelledby="pills-Breakfast-tab"
          tabIndex="0"
        >
          <div className="container">
            <div className="row row-cols-2 justify-content-center row-cols-md-4 g-5">
              <div className="col">
                <div className="justify-content-center">
                  <img src={imgFemme10} alt="" className="image-menu" />
                  <div className="text-center">
                    <h5>
                      WN reversible angora <br />
                      cardigan
                    </h5>
                    <span className="text-danger fw-bold fs-4">$120</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src={imgHomme9} alt="" className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    21WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img src={imgFemme16} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <div className="justify-content-center">
                  <img src={imgFemme18} alt="" className="image-menu" />
                  <div className="text-center">
                    <h5>
                      <br /> cardigan
                    </h5>
                    <span className="text-danger fw-bold fs-4">$120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dress */}
        <div
          className="tab-pane fade"
          id="pills-Lunch"
          role="tabpanel"
          aria-labelledby="pills-Lunch-tab"
          tabIndex="0"
        >
          <div className="container">
            <div className="row row-cols-2 row-cols-md-4 g-5">
              <div className="col">
                <div className="justify-content-center">
                  <img src={imgFemme2_2} alt="" className="image-menu" />
                  <div className="text-center">
                    <h5>
                      WN reversible angora <br />
                      cardigan
                    </h5>
                    <span className="text-danger fw-bold fs-4">$120</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="justify-content-center">
                  <img src={imgFemme4} alt="" className="image-menu" />
                  <div className="text-center">
                    <h5>
                      WN reversible angora <br />
                      cardigan
                    </h5>
                    <span className="text-danger fw-bold fs-4">$120</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src={imgFemme18bis} alt="" className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img src={imgFemme6} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tshirt */}
        <div
          className="tab-pane fade"
          id="pills-Dinner"
          role="tabpanel"
          aria-labelledby="pills-Dinner-tab"
          tabIndex="0"
        >
          <div className="container">
            <div className="row row-cols-2 row-cols-md-4 g-5">
              <div className="col-md-3">
                <div className="justify-content-center">
                  <img src={imgBody} alt="" className="image-menu" />
                  <div className="text-center">
                    <h5>
                      WN reversible angora <br />
                      cardigan
                    </h5>
                    <span className="text-danger fw-bold fs-4">$120</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <img src={imgBody2} alt="" className="image-menu" />
                <div className="text-center">
                  <h5>
                    21WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col-md-3">
                <img src={imgBody3} alt=" " className="image-menu" />
                <div className="text-center">
                  <h5>
                    WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col-md-3">
                <img src={imgBody4} alt=" " className="image-menu" />
                <div className="text-center">
                  <h5>
                    WN reversible angora <br />
                    cardigan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bag */}
        <div
          className="tab-pane fade"
          id="pills-Bag"
          role="tabpanel"
          aria-labelledby="pills-Bag-tab"
          tabIndex="0"
        >
          <div className="container">
            <div className="row row-cols-2 row-cols-md-4 g-5">
              <div className="col">
                <img src={imgSacCabas} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    BALMAIN
                    <br /> sac Cavan
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img
                  src={imgSacTote}
                  alt=" "
                  className="image-menu img-fluid"
                />
                <div className="text-center">
                  <h5>
                    sac a main the small
                    <br /> tote cuir metallise
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img src={imgSacMoyen3} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>
                    sac a main the small
                    <br /> tote cuir metallise
                  </h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
              <div className="col">
                <img src={imgGirl2Bag} alt=" " className="image-menu img-fluid" />
                <div className="text-center">
                  <h5>sac a main the small</h5>
                  <span className="text-danger fw-bold fs-4">$120</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  










      <div className="container my-5 text-center P-4">
        <div className="mb-4 d-flex justify-content-center align-items-center">
          <a href="#" className="text-decoration-none fs-2 text-dark">
            Explore More <span className="ms-1"><i className="bi bi-arrow-right"></i></span>
          </a>
        </div>

        <div className="d-flex justify-content-center align-items-center mb-4 position-relative">
          <hr className="w-25" />
          <div className="ligne"></div>
        </div>

        <div className="row justify-content-center align-items-center gx-5 gy-3">
          {brandLogos.map((src, i) => (
            <div className="col-auto" key={i}>
              <p className="fw-bold m-0">
                <img src={src} alt="marque" className="img-fluid image-marque" />
              </p>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center align-items-center mt-4 position-relative">
          <hr className="w-25" />
          <div className="ligne"></div>
        </div>
      </div>
      <div className="container my-5">
        <h4 className="text-center mb-5">COLLECTIONS</h4>
        <div className="row g-4">
          {[1, 2].map((n) => (
            <div className="col-md-6 position-relative" key={n}>
              <img src={collect2} className="img-fluid w-100" alt="Collection" />
              <div className="position-absolute top-50 start-50 translate-middle text-center">
                {n === 1 ? (
                  <>
                    <h1 className="display-1 fw-bold opacity-25 m-0 fs-2 text-white">10</h1>
                   
                    <Link
                      to="/collection-october"
                      className="position-absolute top-50 start-50 translate-middle text-white fw-bold text-decoration-none"
                    >
                      <h4 className="m-0 text-white fw-bold">
                        October<br />
                        <small className="fw-light fs-2">COLLECTION</small>
                      </h4>
                    </Link>

                  </>
                ) : (
                  <>
                    <h3 className="fw-bold m-0 fs-2 text-dark">Autumn</h3>
                    <small className="fw-light fs-2 text-dark">COLLECTION</small>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 position-relative">
            <img src={collect1} className="img-fluid w-100 rounded" alt="Video Preview" />
            <a href="#" className="position-absolute top-50 start-50 translate-middle" data-bs-toggle="modal" data-bs-target="#videoModal">
              <button className="btn btn-light rounded-circle shadow-lg bouton-video">
                <i className="bi bi-play-fill fs-1"></i>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="modal fade" id="videoModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark border-0">
            <div className="modal-body p-0">
              <video controls autoPlay className="w-100">
                <source src="/chemin/vers/ta-video.mp4" type="video/mp4" />
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
                        src={image29}
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
                        src={image30}
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
                        src={image31}
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
                        src={image32}
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
                      src={image33}
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
                      src={image34}
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
                      src={image35}
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
                      src={image36}
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
                      src={image37}
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
                      src={image38}
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
                      src={image39}
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
                      src={image40}
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
              <div className="col col-sm-3 g row-cols-md-2 btn btn-light rounded-5  ">
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
            <img src={logo} className="log" alt=""/>
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

     <section className="container my-5">
        <div className="mt-5">
          <h3 className="text-center">FOLLOW US</h3>
          <div className="text-center">
            <i className="bi bi-instagram fs-1"></i>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row mt-5 row-cols-2 row-cols-md-4 g-5">
            <div className="col position-relative">
              <img src={bw1} className="img-fluid low" alt="@mia" />
              <p className="position-absolute mi text-light">@mia</p>
            </div>
            <div className="col position-relative">
              <img src={bw2} className="img-fluid low" alt="@_jihyn" />
              <p className="position-absolute mi text-light">@_jihyn</p>
            </div>
            <div className="col position-relative">
              <img src={bw3} className="img-fluid low" alt="@mia" />
              <p className="position-absolute mi text-light">@mia</p>
            </div>
            <div className="col position-relative">
              <img src={bw4} className="img-fluid low" alt="@_jihyn" />
              <p className="position-absolute mi text-light">@_jihyn</p>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}

export default Accueil
