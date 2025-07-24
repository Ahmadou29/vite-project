import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import img2 from "../assets/images/Collection/image 3.png";

// import "./OurStory.css"; // Si tu as des styles personnalisés

const OurStory = () => {
  return (
    <section className="sign-up mt-4 bg-light">
      <div className="container">
        <h1 className="text-dark text-center">OUR STORY</h1>
        <p className="text-dark">
          Open Fashion - Free Ecommerce UI Kit is a free download UI kit.
          You can open Open Fashion - Free Ecommerce UI Kit file by Figma. <br /><br />
          Create stunning shop with bulletproof guidelines and thoughtful components.
          Its library contains more than 50+ components supporting Light <br />
          &amp; Dark Mode and 60+ ready to use mobile screens.
        </p>

        <div className="col-md-12">
          <img
            src={img2}
            alt="our story"
            style={{ height: "60vh", width: "100%" }}
          />
        </div>

        <div className="last mt-4">
          <h2 className="text-dark text-center">SIGN UP</h2>
          <p className="text-dark">
            Receive early access to new arrivals, sales, exclusive content, events and much more!
          </p>
          <input type="text" className="input-email" placeholder="Email address" />
          <p className="p-input"></p>
        </div>

        <a
          href="/contact"
          className="btn btn-dark text-center d-flex align-items-center justify-content-center w-25 m-auto mt-4"
        >
          Submit <i className="bi bi-arrow-right ms-2"></i>
        </a>
      </div>
    </section>
  );
};

export default OurStory;
