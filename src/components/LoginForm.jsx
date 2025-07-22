// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config"; // configure ton Firebase ici
// import { useNavigate, Link } from "react-router-dom";
// import GoogleAuthButton from "./GoogleAuthButton";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/"); // redirige après succès
//     } catch (error) {
//       alert("Erreur de connexion : " + error.message);
//     }
//   };

//   return (
//     <div className="container col-md-4 mt-5">
//       <h3 className="text-center mb-4">CONNEXION UTILISATEUR</h3>

//       <form onSubmit={handleLogin}>
//         <input
//           className="form-control mb-3"
//           type="email"
//           placeholder="Votre email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           className="form-control mb-2"
//           type="password"
//           placeholder="Votre mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <p className="text-center text-muted">Mot de passe oublié</p>

//         <hr />

//         <button type="submit" className="btn btn-dark w-100 mb-2">
//           SE CONNECTER
//         </button>

//        <GoogleAuthButton />

//       </form>

//       <hr />

//       <p className="text-center">
//         Vous êtes nouveau client ?{" "}
//         <Link to="/register">Inscrivez-vous ici</Link>
//       </p>
//     </div>
//   );
// }

// export default LoginForm;

import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../config";
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
      navigate("/accueil"); // Redirection vers la page d'accueil
    } catch (error) {
      alert("Erreur de connexion : " + error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Veuillez entrer votre adresse email pour réinitialiser le mot de passe.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Un lien de réinitialisation a été envoyé à votre adresse e-mail.");
    } catch (error) {
      alert("Erreur lors de la réinitialisation : " + error.message);
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

        <p
          className="text-center text-primary"
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleForgotPassword}
        >
          Mot de passe oublié ?
        </p>

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

