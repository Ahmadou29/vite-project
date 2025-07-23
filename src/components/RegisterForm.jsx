import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config";
import { useNavigate, Link } from "react-router-dom";
// import GoogleAuthButton from "./GoogleAuthButton";
import { doc, setDoc } from "firebase/firestore";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        username: username,
        createdAt: new Date()
      });

      navigate("/accueil");
      // too react
    } catch (error) {
      alert("Erreur lors de l'inscription : " + error.message);
    }
  };

  return (
    <div className="container col-md-4 mt-5 shadow p-5">
      <h3 className="text-center mb-4">CRÉER UN COMPTE</h3>

      <form onSubmit={handleRegister}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-success w-100 mb-2">
          CRÉER UN COMPTE
        </button>


      </form>

      <hr />
      

      <p className="text-center">
        Vous avez déjà un compte ? <Link to="/login">Connectez-vous ici</Link>
      </p>
    </div>
  );
}

export default RegisterForm;
