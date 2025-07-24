// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config";
// import { useNavigate, Link } from "react-router-dom";
// import GoogleAuthButton from "./GoogleAuthButton";
// import { toast } from "react-toastify"; // ✅

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Connexion réussie !");
//       setTimeout(() => navigate("/"), 2000);
//     } catch (error) {
//       if (error.code === "auth/user-not-found") {
//         toast.error("Aucun compte trouvé avec cet e-mail.");
//       } else if (error.code === "auth/wrong-password") {
//         toast.error("Mot de passe incorrect.");
//       } else {
//         toast.error("Erreur : " + error.message);
//       }
//     }
//   };

//   return (
//     <div className="container col-md-4 mt-5 p-4  shadow">
//       <h3 className="text-center mb-4 py-4">CONNEXION UTILISATEUR</h3>

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

//         <button type="submit" className="btn btn-success w-100 mb-2">
//           SE CONNECTER
//         </button>

//         <GoogleAuthButton />
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
import { toast } from "react-toastify";
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
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const navigate = useNavigate();

  // Connexion utilisateur
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Connexion réussie !");
      navigate("/accueil");
    } catch (error) {
      toast.error("Erreur de connexion : " + error.message);
    }
  };

const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/login"); // Redirection vers la page de connexion
  } catch (error) {
    console.error("Erreur de déconnexion :", error.message);
  }
};


  // Envoi du lien de réinitialisation de mot de passe
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!resetEmail) {
      toast.error("Veuillez saisir votre adresse e-mail.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail, {
        url: "http://localhost:5173/login", // à modifier en prod
      });
      toast.success("Un lien de réinitialisation a été envoyé à votre e-mail.");
      setShowResetForm(false);
      setResetEmail("");
    } catch (error) {
      toast.error("Erreur : " + error.message);
    }
  };

  return (
    <div className="container col-md-4 mt-5 shadow py-5 p-3">
      <h3 className="text-center mb-4">CONNEXION UTILISATEUR</h3>

      {/* Formulaire de connexion */}
      <form  onSubmit={handleLogin}>
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
          onClick={() => setShowResetForm(true)}
        >
          Mot de passe oublié ?
        </p>

        <hr />

        <button type="submit" className="btn btn- w-100 mb-2"
        style={{
          backgroundColor:' green ',
          color: '#fff'
        }}>
          

         
          SE CONNECTER
        </button>

        <GoogleAuthButton />
      </form>

      {/* Formulaire de réinitialisation */}
      {showResetForm && (
        <form onSubmit={handleForgotPassword} className="mt-4">
          <input
            className="form-control mb-2"
            type="email"
            placeholder="Entrez votre adresse email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            required
          />
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-outline-primary w-100">
              Envoyer le lien
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => {
                setShowResetForm(false);
                setResetEmail("");
              }}
            >
              Annuler
            </button>
          </div>
        </form>
      )}

      <hr />

      <p className="text-center">
        Vous êtes nouveau client ?{" "}
        <Link to="/register">Inscrivez-vous ici</Link>
      </p>
    </div>
  );
}

export default LoginForm;