// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../config";
// import "../App.css";
// import { useNavigate } from "react-router-dom"; // <-- pour redirection

// function Connexion() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // <-- hook pour redirection

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (email && password) {
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//         alert("Connexion réussie !");
//         navigate("/"); // <-- redirection vers la page d’accueil
//       } catch (err) {
//         if (err.code === "auth/invalid-email") {
//           setError("Adresse email invalide.");
//         } else if (
//           err.code === "auth/user-not-found" ||
//           err.code === "auth/wrong-password"
//         ) {
//           setError("Email ou mot de passe incorrect.");
//         } else {
//           setError("Une erreur est survenue. Veuillez réessayer.");
//         }
//       }
//     } else {
//        alert("Veuillez saisir votre email et votre mot de passe.");
     
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       {/* Email */}
//       <div className="mb-3 py-4">
//         <div className="input-group">
//           <span className="input-group-text bg-white">
//             <i className="bi bi-envelope"></i>
//           </span>
//           <input
//             type="email"
//             className={`form-control ${error ? "is-invalid" : ""}`}
//             placeholder="Adresse email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//       </div>

//       {/* Mot de passe */}
//       <div className="">
//         <div className="input-group">
//           <span className="input-group-text bg-white">
//             <i className="bi bi-lock"></i>
//           </span>
//           <input
//             type="password"
//             className={`form-control ${error ? "is-invalid" : ""}`}
//             placeholder="Mot de passe"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//       </div>

//       {/* Message d'erreur */}
//       {error && <div className="text-danger mt-3">{error}</div>}

//       {/* Bouton Connexion */}
//       <button type="submit" className="btn btn-orange w-100 mt-5">
//         <i className="bi bi-box-arrow-in-right me-2"></i>
//        se connecter
//       </button>
//     </form>
//   );
// }

// export default Connexion;
