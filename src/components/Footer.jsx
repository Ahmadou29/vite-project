import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='container-fluid anta'>
    <footer className="mt-5 ">
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
    </div>
  )
}

export default Footer