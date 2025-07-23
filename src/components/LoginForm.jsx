import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config"; // configure ton Firebase ici
import { useNavigate, Link } from "react-router-dom";
import GoogleAuthButton from "./GoogleAuthButton";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // redirige après succès
    } catch (error) {
      alert("Erreur de connexion : " + error.message);
    }
  };

  return (
    <div className="container col-md-4 mt-5">
      <h3 className="text-center mb-4">CONNEXION UTILISATEUR</h3>

      <form onSubmit={handleLogin}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="form-control mb-2"
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p className="text-center text-muted">Mot de passe oublié</p>

        <hr />

        <button type="submit" className="btn btn-dark w-100 mb-2">
          SE CONNECTER
        </button>

       <GoogleAuthButton />

      </form>

      <hr />

      <p className="text-center">
        Vous êtes nouveau client ?{" "}
        <Link to="/register">Inscrivez-vous ici</Link>
      </p>
    </div>
  );
}

export default LoginForm;

