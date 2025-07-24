import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const PaymentSuccess = () => {
  return (
    <div
      className="bg-light text-center text-light d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="bg-white text-dark p-4 rounded shadow" style={{ width: "320px" }}>
        <h5 className="mb-3">PAYMENT SUCCESS</h5>
        <div className="mb-3">
          <i className="bi bi-check-circle-fill text-dark" style={{ fontSize: "2rem" }}></i>
        </div>
        <p>
          Your payment was success
          <br />
          <small className="text-muted">Payment ID 15263541</small>
        </p>
        <hr />
        <p className="mt-4 mb-2">Rate your purchase</p>
        <div className="d-flex justify-content-center gap-3 mb-4">
          <span role="img" aria-label="neutral">😐</span>
          <span role="img" aria-label="meh">😑</span>
          <span role="img" aria-label="happy">😊</span>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-dark">SUBMIT</button>
          <Link to="/" className="btn btn-outline-secondary">BACK TO HOME</Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
